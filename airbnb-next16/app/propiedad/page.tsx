import AirbnbHeader from "@/components/AirbnbHeader";
import BookingWidget from "@/components/BookingWidget";
import ImageGallery from "@/components/ImageGallery";
import PropertyHeader from "@/components/PropertyHeader";
import PropertyInfo from "@/components/PropertyInfo";
import ReviewsSection from "@/components/ReviewsSection";
import { propertyGallery } from "@/components/mockData";

const PropertyPage = () => {
  return (
    <main className="min-h-screen pb-10">
      <AirbnbHeader active="detalle" />

      <div className="container-main mt-5">
        <PropertyHeader />
        <ImageGallery images={propertyGallery} />

        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_360px]">
          <div>
            <PropertyInfo />
            <ReviewsSection />
          </div>

          <BookingWidget />
        </div>
      </div>
    </main>
  );
};

export default PropertyPage;