import { fetchFavorits } from "@/actions/actions"
import EmptyList from "@/components/home/EmptyList"
import LandmarkList from "@/components/home/LandmarkList"

// rafce
const FavoritsPage = async() => {
  const favorites = await fetchFavorits()
  if(favorites.length ===0){
    return <EmptyList 
    heading="No items Favorits"
    />
  }

  return <LandmarkList landmarks={favorites}/>
}
export default FavoritsPage