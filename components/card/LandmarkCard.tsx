import Image from "next/image";
import { LandmarkCardProps } from "@/utils/types";
import LandmarkRating from "./LandmarkRating";

const LandmarkCard = ({ landmark }: { landmark: LandmarkCardProps }) => {
  const { name, image, id, province, lat, lng, category } = landmark;
  return (
    <article className="group relative">
      <div className="relative h-[300px] rounded-md mb-2">
        <Image
          src={image}
          sizes="(max-width:768px) 100vw, 50vw"
          alt={name}
          fill
          className="object-cover rounded-md 
          group-hover:scale-105 transition-transform
           duration-300"
        />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold mt-1">{name}</h3>
        <LandmarkRating />
      </div>



    </article>
  );
};
export default LandmarkCard;
