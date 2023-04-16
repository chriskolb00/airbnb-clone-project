

import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import { getFavoriteListings } from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoriteClient";


const ListingPage = async()=>{
    const listings =  await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if(listings.length===0){
        return(
            <ClientOnly>
                    <EmptyState title="No favorites found" subtitle="Looks like you like any yet"/>
            </ClientOnly>
        )
    }
   return(
    <ClientOnly>
        <FavoritesClient listings={listings} currentUser={currentUser}/>
    </ClientOnly>
   )
 }
export default ListingPage;