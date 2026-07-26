"use client";

import { useEffect, useState } from "react";
import CategoryFilterRow from "@/components/CategoryFilterRow";
import LoadingSpinner from "@/components/LoadingSpinner";
import NoResults from "@/components/NoResults";
import StayGrid from "@/components/StayGrid";
import TopNavbar from "@/components/TopNavbar";
import {
  categoryFilters,
  roomsData,
  type Room,
} from "@/components/staysData";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [isLoading, setIsLoading] = useState(true);
  const [allRooms, setAllRooms] = useState<Room[]>([]);
  const [visibleRooms, setVisibleRooms] = useState<Room[]>([]);

  const filterRooms = (source: Room[], search: string, category: string) => {
    const normalizedSearch = search.trim().toLowerCase();
    return source.filter((room) => {
      const matchesCategory = category === "Todos" || room.category === category;
      const matchesText =
        room.title.toLowerCase().includes(normalizedSearch) ||
        room.location.toLowerCase().includes(normalizedSearch);
      return matchesCategory && matchesText;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAllRooms(roomsData);
      setVisibleRooms(roomsData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchText(value);
    setVisibleRooms(filterRooms(allRooms, value, activeCategory));
  };

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    setVisibleRooms(filterRooms(allRooms, searchText, category));
  };

  return (
    <main className="min-h-screen pb-10">
      <TopNavbar searchText={searchText} onSearchChange={handleSearchChange} />
      <CategoryFilterRow
        categories={[...categoryFilters]}
        activeCategory={activeCategory}
        onSelect={handleCategorySelect}
      />

      {isLoading ? <LoadingSpinner /> : visibleRooms.length > 0 ? <StayGrid rooms={visibleRooms} /> : <NoResults />}
    </main>
  );
};

export default HomePage;
