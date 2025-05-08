export function getNextIndex(currentIndex, images) {
    return (currentIndex + 1) % images.length;
}
  
export function getPrevIndex(currentIndex, images) {
    return (currentIndex - 1 + images.length) % images.length;
}