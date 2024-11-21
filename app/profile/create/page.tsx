import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";

const createProfileAction = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  // Validate
  // Insert to db
  // return
  console.log("Jukkru!!!!", firstName);
};

const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md">
        <form action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
          <FormInput name="firstName" label="Fist Name" type="text" placeholder="First Name" />
          <FormInput name="lastName" label="Last Name" type="text" placeholder="Last Name"/>
          <FormInput name="userName" label="Username" type="text" placeholder="Username" />
          </div>
          <Button type="submit" size="lg">
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  );
};
export default CreateProfile;
