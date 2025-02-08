// ImageGallery.js
import React, { useState } from "react";

function ImageGallery({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open the modal and set the selected image index
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Navigate to the previous image
  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Navigate to the next image
  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div>
      {/* Collage Grid */}
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={`http://localhost:3001/uploads/${img}`}
            alt={`Gallery image ${index}`}
            className="cursor-pointer object-cover w-full h-40"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Modal / Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl focus:outline-none"
            >
              &times;
            </button>

            {/* Display the Selected Image */}
            <img
              src={`http://localhost:3001/uploads/${images[currentIndex]}`}
              alt={`Gallery image ${currentIndex}`}
              className="max-h-screen max-w-screen"
            />

            {/* Previous Button */}
            <button
              onClick={showPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl focus:outline-none"
            >
              ❮
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl focus:outline-none"
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
