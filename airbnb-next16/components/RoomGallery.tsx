"use client";

import { useState } from "react";
import Image from "next/image";

type RoomGalleryProps = {
  photos: string[];
  title: string;
};

const RoomGallery = ({ photos, title }: RoomGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousPhoto = () => {
    setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setActiveIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="space-y-3">
      <div className="relative h-72 overflow-hidden rounded-2xl bg-zinc-200 md:h-[420px]">
        <Image src={photos[activeIndex]} alt={title} fill className="object-cover" sizes="100vw" />
      </div>
      <div className="flex items-center justify-between">
        <button type="button" onClick={previousPhoto} className="rounded-lg border border-zinc-300 px-4 py-2">
          Anterior
        </button>
        <p className="text-sm text-zinc-600">Foto {activeIndex + 1} de {photos.length}</p>
        <button type="button" onClick={nextPhoto} className="rounded-lg border border-zinc-300 px-4 py-2">
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default RoomGallery;
