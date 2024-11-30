// rafce
import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
const page = () => {
  // Search

  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer />
      </Suspense>
    </section>
  );
};
export default page;
