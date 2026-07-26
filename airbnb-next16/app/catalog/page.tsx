"use client";

import { useMemo, useState } from "react";
import CatalogToolbar from "@/components/CatalogToolbar";
import MapPlaceholder from "@/components/MapPlaceholder";
import StayCard from "@/components/StayCard";
import TopNavbar from "@/components/TopNavbar";
import { roomsData } from "@/components/staysData";

const CatalogPage = () => {
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedRooms = useMemo(() => {
    const base = roomsData.filter(
      (room) =>
        room.title.toLowerCase().includes(searchText.toLowerCase()) ||
        room.location.toLowerCase().includes(searchText.toLowerCase()),
    );

    return [...base].sort((a, b) =>
      sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight,
    );
  }, [sortOrder, searchText]);

  return (
    <main className="min-h-screen pb-10">
      <TopNavbar searchText={searchText} onSearchChange={setSearchText} />

      <section className="container-main mt-6 grid gap-5 md:grid-cols-[minmax(0,1fr)_340px]">
        <div>
          <CatalogToolbar total={sortedRooms.length} sortOrder={sortOrder} onSortChange={setSortOrder} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sortedRooms.map((room) => (
              <StayCard key={room.id} room={room} />
            ))}
          </div>
        </div>

        <MapPlaceholder />
      </section>
    </main>
  );
};

export default CatalogPage;
