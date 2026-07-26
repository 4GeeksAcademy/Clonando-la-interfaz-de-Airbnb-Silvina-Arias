import Image from "next/image";

type ImageGalleryProps = {
  images: string[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <section className="mt-5 overflow-hidden rounded-3xl">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Image
          src={images[0]}
          alt="Vista principal del alojamiento"
          width={1400}
          height={900}
          className="h-72 w-full object-cover md:col-span-2 md:h-[420px]"
        />

        <div className="grid grid-cols-2 gap-2 md:col-span-2">
          {images.slice(1, 5).map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`Detalle del alojamiento ${index + 1}`}
              width={900}
              height={700}
              className="h-36 w-full object-cover md:h-[206px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;