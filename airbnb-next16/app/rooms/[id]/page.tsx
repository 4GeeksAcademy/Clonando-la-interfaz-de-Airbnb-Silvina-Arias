"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import BackToCatalog from "@/components/BackToCatalog";
import HostSummary from "@/components/HostSummary";
import LoadingSpinner from "@/components/LoadingSpinner";
import ReservationBox from "@/components/ReservationBox";
import RoomGallery from "@/components/RoomGallery";
import RoomHeaderInfo from "@/components/RoomHeaderInfo";
import TopNavbar from "@/components/TopNavbar";
import { roomsData, type Room } from "@/components/staysData";

const RoomDetailPage = () => {
  const params = useParams<{ id: string }>();
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const roomId = Number(params.id);
      const foundRoom = roomsData.find((item) => item.id === roomId) ?? null;
      setRoom(foundRoom);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [params.id]);

  if (isLoading) {
    return (
      <main className="min-h-screen pb-10">
        <TopNavbar searchText={searchText} onSearchChange={setSearchText} />
        <LoadingSpinner />
      </main>
    );
  }

  if (!room) {
    return (
      <main className="min-h-screen pb-10">
        <TopNavbar searchText={searchText} onSearchChange={setSearchText} />
        <section className="container-main mt-6 space-y-3">
          <BackToCatalog />
          <p className="rounded-xl border border-zinc-200 bg-white p-6 text-zinc-700">No encontramos esta habitacion.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-10">
      <TopNavbar searchText={searchText} onSearchChange={setSearchText} />

      <section className="container-main mt-6 space-y-5">
        <BackToCatalog />
        <RoomHeaderInfo title={room.title} rating={room.rating} reviews={room.reviews} location={room.location} />
        <RoomGallery photos={room.photos} title={room.title} />

        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            <HostSummary hostName={room.hostName} hostYears={room.hostYears} />
            <AmenitiesGrid amenities={room.amenities} />
          </div>
          <ReservationBox pricePerNight={room.pricePerNight} />
        </div>
      </section>
    </main>
  );
};

export default RoomDetailPage;
