export type Listing = {
  id: number;
  title: string;
  location: string;
  rating: number;
  price: string;
  badge: string;
  image: string;
};

export type Reservation = {
  id: number;
  title: string;
  address: string;
  dates: string;
  total: string;
  status: "proxima" | "pasada" | "cancelada";
  image: string;
};

export const homeCategories = [
  "Todo",
  "Alojamientos",
  "Experiencias",
  "Servicios",
];

export const popularListings: Listing[] = [
  {
    id: 1,
    title: "Condo en Retiro",
    location: "Retiro, Buenos Aires",
    rating: 4.83,
    price: "$283,630 COP por 2 noches",
    badge: "Favorito entre huespedes",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Apartamento en Palermo",
    location: "Palermo, Buenos Aires",
    rating: 5,
    price: "$721,529 COP por 2 noches",
    badge: "Favorito entre huespedes",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Apartamento en Constitucion",
    location: "Constitucion, Buenos Aires",
    rating: 5,
    price: "$389,085 COP por 2 noches",
    badge: "Favorito entre huespedes",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Apartamento en San Nicolas",
    location: "San Nicolas, Buenos Aires",
    rating: 4.91,
    price: "$448,951 COP por 2 noches",
    badge: "Favorito entre huespedes",
    image:
      "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Apartamento en Monstserrat",
    location: "Monstserrat, Buenos Aires",
    rating: 4.92,
    price: "$321,957 COP por 2 noches",
    badge: "Favorito entre huespedes",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Apartamento en Palermo",
    location: "Palermo, Buenos Aires",
    rating: 5,
    price: "$384,816 COP por 2 noches",
    badge: "Favorito entre huespedes",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    title: "Apartamento en Retiro",
    location: "Retiro, Buenos Aires",
    rating: 4.95,
    price: "$398,571 COP por 2 noches",
    badge: "Favorito entre huespedes",
    image:
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=600&q=80",
  },
];

export const propertyGallery = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
];

export const reservations: Reservation[] = [
  {
    id: 1,
    title: "Apartamento en Palermo",
    address: "Calle Thames 1420, Palermo, Buenos Aires",
    dates: "12 Ago - 17 Ago 2026",
    total: "$1,420,000 COP",
    status: "proxima",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Condo en Retiro",
    address: "Av. del Libertador 310, Retiro, Buenos Aires",
    dates: "03 Jul - 07 Jul 2026",
    total: "$930,000 COP",
    status: "pasada",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Apartamento en Monstserrat",
    address: "Av. Belgrano 722, Monstserrat, Buenos Aires",
    dates: "10 Jun - 13 Jun 2026",
    total: "$710,000 COP",
    status: "cancelada",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  },
];