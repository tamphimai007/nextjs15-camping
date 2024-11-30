import { fetchLandmarks } from "@/actions/actions"
import LandmarkList from "./LandmarkList"
import { LandmarkCardProps } from "@/utils/types"


const LandmarkContainer = async() => {
    const landmarks:LandmarkCardProps[] = await fetchLandmarks()
    // console.log(landmarks)

  return (
    <div>
        <LandmarkList landmarks={landmarks}/>
    </div>
  )
}
export default LandmarkContainer