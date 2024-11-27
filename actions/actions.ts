"use server";

import { imageSchema, landmarkSchema, profileSchema, validateWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";

const getAuthUser = async () => {
  // code body
  const user = await currentUser();
  if (!user) {
    throw new Error("You must logged!!!");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};

const renderError = (error: unknown): { message: string } => {
  //code body
  return {
    message: error instanceof Error ? error.message : "An Error!!!",
  };
};
export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please Login!!!");

    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);
    console.log("validated", validateField);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validateField,
      },
    });
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
    // return { message: "Create Profile Success!!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  redirect("/");
};

export const createLandmarkAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const user = await getAuthUser();
    const rawData = Object.fromEntries(formData);
    const file = formData.get('image') as File
    
    const validatedFile = validateWithZod(imageSchema,{ image:file })
    const validateField = validateWithZod(landmarkSchema, rawData);
    console.log("validated", validatedFile);
    console.log("validated", validateField);
    
    

    // Step 1 Validate Data
    // Step 2 Upload Image to Supabase
    // Step 3 Inser to DB



  
    return { message: "Create Landmark Success!!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  // redirect("/");
};
