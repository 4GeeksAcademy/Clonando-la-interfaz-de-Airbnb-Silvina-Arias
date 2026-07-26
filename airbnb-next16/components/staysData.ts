export type Amenity = {
  icon: string;
  label: string;
};

export type Room = {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  hostName: string;
  hostYears: number;
  amenities: Amenity[];
  photos: string[];
  coordinates: { lat: number; lng: number };
};

export const categoryFilters = [
  { id: "Todos", icon: "🌍", label: "Todos" },
  { id: "Playa", icon: "🏖️", label: "Playa" },
  { id: "Mansiones", icon: "🏛️", label: "Mansiones" },
  { id: "Tendencias", icon: "🔥", label: "Tendencias" },
  { id: "Cabanas", icon: "🌲", label: "Cabanas" },
] as const;

export const roomsData: Room[] = [
  {
    id: 1,
    title: "Casa frente al mar en Pinamar",
    location: "Pinamar, Buenos Aires",
    category: "Playa",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
    pricePerNight: 140,
    rating: 4.92,
    reviews: 123,
    hostName: "Sofia",
    hostYears: 6,
    amenities: [
      { icon: "📶", label: "Wifi rapido" },
      { icon: "🏊", label: "Piscina" },
      { icon: "🚗", label: "Estacionamiento" },
      { icon: "🍳", label: "Cocina completa" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80",
    ],
    coordinates: { lat: -37.1122, lng: -56.8616 },
  },
  {
    id: 2,
    title: "Villa de lujo con vista al lago",
    location: "Bariloche, Rio Negro",
    category: "Mansiones",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    pricePerNight: 260,
    rating: 4.86,
    reviews: 91,
    hostName: "Martin",
    hostYears: 4,
    amenities: [
      { icon: "🛁", label: "Jacuzzi" },
      { icon: "🔥", label: "Chimenea" },
      { icon: "🧺", label: "Lavadora" },
      { icon: "🐕", label: "Pet friendly" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    ],
    coordinates: { lat: -41.1335, lng: -71.3103 },
  },
  {
    id: 3,
    title: "Loft moderno en Palermo",
    location: "CABA, Argentina",
    category: "Tendencias",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    pricePerNight: 95,
    rating: 4.74,
    reviews: 202,
    hostName: "Camila",
    hostYears: 8,
    amenities: [
      { icon: "💻", label: "Espacio de trabajo" },
      { icon: "❄️", label: "Aire acondicionado" },
      { icon: "🧼", label: "Limpieza diaria" },
      { icon: "📺", label: "Smart TV" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    coordinates: { lat: -34.588, lng: -58.4306 },
  },
  {
    id: 4,
    title: "Cabana entre pinos con deck",
    location: "Villa La Angostura",
    category: "Cabanas",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    pricePerNight: 110,
    rating: 4.81,
    reviews: 76,
    hostName: "Federico",
    hostYears: 5,
    amenities: [
      { icon: "🌄", label: "Vista al bosque" },
      { icon: "🍖", label: "Parrilla" },
      { icon: "🪵", label: "Hogar a lena" },
      { icon: "🚿", label: "Ducha caliente" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
    ],
    coordinates: { lat: -40.7605, lng: -71.6463 },
  },
  {
    id: 5,
    title: "Departamento premium en Puerto Madero",
    location: "CABA, Argentina",
    category: "Tendencias",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    pricePerNight: 180,
    rating: 4.89,
    reviews: 143,
    hostName: "Agustina",
    hostYears: 7,
    amenities: [
      { icon: "🏋️", label: "Gimnasio" },
      { icon: "🛗", label: "Ascensor" },
      { icon: "🛎️", label: "Recepcion 24 h" },
      { icon: "🔒", label: "Ingreso seguro" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=80",
    ],
    coordinates: { lat: -34.6118, lng: -58.3625 },
  },
  {
    id: 6,
    title: "Mansion con jardin y pileta",
    location: "San Isidro, Buenos Aires",
    category: "Mansiones",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    pricePerNight: 320,
    rating: 4.97,
    reviews: 58,
    hostName: "Valentina",
    hostYears: 9,
    amenities: [
      { icon: "🏡", label: "Casa completa" },
      { icon: "🏊", label: "Piscina privada" },
      { icon: "🎬", label: "Home theater" },
      { icon: "🍽️", label: "Comedor amplio" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    ],
    coordinates: { lat: -34.4712, lng: -58.5128 },
  },
];
