import { useState, useEffect } from 'react';
import { getNextIndex } from '../functions/sliderBehavior';

function Slider({ images, delay = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex(prev => getNextIndex(prev, images));
    }, delay);

    return () => clearInterval(interval);
  }, [images, delay]);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className='slider__image' />

      <div className="slider__dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`slider__dot ${i === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider