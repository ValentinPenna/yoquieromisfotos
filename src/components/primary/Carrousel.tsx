import { useState, useEffect } from 'react';

const Carousel = ({ images }: { images: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-40 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[40rem] mb-2 sm:mb-4">
      <div className="relative h-full overflow-hidden">
        {images.map((image: any, index: number) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-3000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-contain w-full h-full aspect-auto"
            />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={goToPrevious}
        className="absolute p-4 text-white transform -translate-y-1/2 rounded-full left-4 top-1/2 bg-primary"
      >
        {"<"}
      </button>
      <button
        onClick={goToNext}
        className="absolute p-4 text-white transform -translate-y-1/2 rounded-full right-4 top-1/2 bg-primary"
      >
        {">"}
      </button>

      {/* Indicadores */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {images.map((_: any, index: number) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
