// rafce
import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { SignInCardButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/actions/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavoriteToggleButton = async ({ landmarkId }: { landmarkId: string }) => {
  const { userId } = await auth();
  if (!userId) return <SignInCardButton />;
  const favoriteId = await fetchFavoriteId({ landmarkId });

  return <FavoriteToggleForm 
            favoriteId={favoriteId} 
            landmarkId={landmarkId}
             />;
};
export default FavoriteToggleButton;
