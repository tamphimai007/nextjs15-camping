import { createClient } from "@supabase/supabase-js";

const bucket = "landmark-bucket";
const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

// Create Supabase client
const supabase = createClient(url, key);

// Upload file using standard upload
export async function uploadFile(image: File) {
  const timeStamp = Date.now();
  const newName = `Roitai-${timeStamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image,{
      cacheControl:'3600'
    });

  if (!data) throw new Error("Image upload failed!!!");
//   const { data } = supabase.storage.from('bucket').getPublicUrl('filePath.jpg')
// console.log(data.publicUrl)
  return supabase.storage
  .from(bucket)
  .getPublicUrl(newName).data.publicUrl
}
