# Contexto del Proyecto

## Tipo de usuario

La interfaz esta pensada para viajeros que quieren descubrir alojamientos, comparar opciones por categoria/precio y revisar el detalle de una habitacion antes de reservar.

## Rutas principales implementadas

- / : Home con busqueda, filtros y grilla de alojamientos.
- /catalog : Catalogo con ordenacion por precio y area de mapa (placeholder).
- /rooms/[id] : Detalle dinamico por id de habitacion.

## Especificaciones funcionales derivadas de las pantallas

1. Navegacion interna con Link de Next.js
- Las tarjetas de alojamiento navegan a /rooms/[id].
- La barra superior permite volver a Home y navegar al Catalogo.

2. Home (mobile-first)
- Navbar superior con logo, input de busqueda e iconos de usuario.
- Fila horizontal de categorias (icono + etiqueta) con categoria activa.
- Filtrado en tiempo real por texto y categoria con estado local.
- Simulacion de carga inicial con useEffect + setTimeout y spinner visible.
- Grilla responsive: base 1 columna (375px) y expansion con breakpoints sm/md/lg.

3. Catalogo
- Cabecera con total de resultados.
- Selector de orden por precio ascendente/descendente.
- Reutilizacion del componente de tarjeta de Home.
- Zona de mapa como placeholder estilizado (desktop: derecha, mobile: debajo).

4. Detalle de habitacion
- Carga por id con useEffect + setTimeout.
- Secciones obligatorias:
	- Galeria con navegacion anterior/siguiente.
	- Cabecera del alojamiento (titulo, rating, resenas, ubicacion).
	- Informacion del anfitrion.
	- Amenities (icono + etiqueta).
	- Tarjeta de reserva con contador de huespedes.
- Extra funcional: date picker de check-in/check-out y calculo estimado del total.

## Componentes clave

- TopNavbar
- CategoryFilterRow
- StayCard
- StayGrid
- CatalogToolbar
- MapPlaceholder
- RoomGallery
- RoomHeaderInfo
- HostSummary
- AmenitiesGrid
- ReservationBox
- LoadingSpinner

## Datos y tipos

El archivo components/staysData.ts define los tipos principales (Amenity y Room) y la fuente de datos de habitaciones, categorias y coordenadas.

## Notas tecnicas

- Stack: Next.js 16 (App Router), TypeScript, Tailwind CSS.
- Paradigma funcional: componentes declarados como constantes y funciones flecha.
- Estilos: sin style inline, solo utilidades de Tailwind.
