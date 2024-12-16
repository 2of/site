import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';

const Carousel = ({ images }) => {
  // State to hold the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // State to trigger animation when image changes
  const [imageKey, setImageKey] = useState(0);

  // State to track whether animation is completed
  const [isFading, setIsFading] = useState(false);

  // Function to handle thumbnail click
  const handleThumbnailClick = (image) => {
    setIsFading(true); // Start fading animation
    setCurrentImage(image);
    setImageKey(prevKey => prevKey + 1); // Trigger re-render

    // Reset fading state after the animation completes
    setTimeout(() => {
      setIsFading(false);
    }, 0); // Match the fade-in duration
  };

  // Return early if no images are available
  if (!images || images.length === 0) {
    return <div className={styles.carousel}><p>No images available</p></div>;
  }

  // Filter out the current image from the thumbnails
  const filteredImages = images.filter(image => image !== currentImage);

  return (
    <div className={styles.carousel}>
      {/* Main image display */}
      <div className={styles.mainImageContainer}>
        <img
          key={imageKey}  // Using key to trigger animation when image changes
          src={currentImage}
          alt="Project"
          className={`${styles.mainImage} ${isFading ? `` : styles.fadeIn}`}  // Add fade-in and fade-out classes
        />
      </div>
      
      {/* Thumbnails */}
      {images.length >= 2 && (
        <div className={styles.thumbnailContainer}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={styles.thumbnailWrapper}
              onClick={() => handleThumbnailClick(image)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className={styles.thumbnail}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
