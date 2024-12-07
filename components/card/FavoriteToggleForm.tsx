"use client";
import { toggleFavoriteAction } from "@/actions/actions";
import FormContainer from "../form/FormContainer";
import { usePathname } from "next/navigation";
import { CardSubmitButton } from "../form/Buttons";

const FavoriteToggleForm = ({
  favoriteId,
  landmarkId,
}: {
  favoriteId: string | null;
  landmarkId: string;
}) => {
  const pathname = usePathname();
  // console.log("id", favoriteId);
  // console.log(pathname);

  const toggleAction = toggleFavoriteAction.bind(null, {
    favoriteId,
    landmarkId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};
export default FavoriteToggleForm;
