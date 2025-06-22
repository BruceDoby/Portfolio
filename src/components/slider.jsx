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

// useEffect sert à contrôler quand un effet se déclenche
// la 1ere const va permettre de définir l'image actuel apparaissant sur le slider, on établit la valeur de base à 0 pour que la 1ere slide
// soit affichée par défaut
// le useEffect ici va s'occuper de géré l'interval de changement des images, en changeant l'index actuel grâce à une fonction présente
// dans un autre fichier, ajoutant un délai de 3 secondes entre chaque slide et nettoyant finalement l'interval pour éviter des fuites de
// mémoire ou des comportements inattendu, le images et delay à la toute fin en dépendances permettent de relancer l'effet si un changement
// se produit dans l'un des deux avec les nouveaux éléments