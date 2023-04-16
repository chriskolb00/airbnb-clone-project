'use client';

import { toast } from "react-hot-toast";

import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeListing, SafeReservation, SafeUser } from "../types";
import ListingCard from "../components/listings/ListingCard";


interface FavoriteClientProps{
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}
const FavoritesClient:React.FC<FavoriteClientProps> =({
    listings, currentUser
}) =>{


    return(
        <Container>
            <Heading title="Favorites" subtitle="Listing of places you favorited!"/>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {listings.map((listing) =>(
                    <ListingCard currentUser={currentUser} key={listing.id} data={listing}/>
                ))}
            </div>
        </Container>
    )
}
export default FavoritesClient;