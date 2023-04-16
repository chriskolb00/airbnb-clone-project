

import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import getReservations from "@/app/actions/getReservations";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ReservationClient from "./ReservationClient";

const ReservationsPage = async ()=>{
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState title="Unauthorized" subtitle="Please Login"></EmptyState>
            </ClientOnly>
        );
    }

    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if(reservations.length ===0){
        return(
            <ClientOnly>
                <EmptyState title="No reservations found" subtitle="Looks like you haven't made any reservations"></EmptyState>
            </ClientOnly>
        );
    }
    return(
        <ClientOnly>
            <ReservationClient reservations = {reservations} currentUser={currentUser} />
        </ClientOnly>
    );
}
export default ReservationsPage;