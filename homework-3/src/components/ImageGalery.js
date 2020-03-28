import React from "react";

const ImageGalery = ({ onClick, photos }) => (
  <ul className="ImageGallery">
    {photos.map(photo => (
      <li className="ImageGalleryItem" key={photo.id} onClick={onClick}>
        <img
          src={photo.webformatURL}
          alt={photo.name}
          id={photo.id}
          className="ImageGalleryItem-image"
        />
      </li>
    ))}
  </ul>
);

export default ImageGalery;
