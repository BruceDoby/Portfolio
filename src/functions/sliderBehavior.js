export function getNextIndex(currentIndex, images) {
    return (currentIndex + 1) % images.length;
}
  
export function getPrevIndex(currentIndex, images) {
    return (currentIndex - 1 + images.length) % images.length;
}

// Ici on a les deux fonctions qui permettent soit d'avancer dans le slider soit de reculer, la fonction de recule est surtout là au cas
// où mais n'est pas encore exploité et on utilise le modulo pour permettre de ne pas être bloquer à la fin du slider et de revenir à la
// première image dans ce cas