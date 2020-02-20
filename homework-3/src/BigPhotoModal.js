import React from "react";

const BigPhotoModal = ({ bigUrl, onClick, onKeyPress }) => (
  <div className="Overlay" onClick={onClick}>
    <div className="Modal">
      <img src={bigUrl} alt="" onKeyPress={onKeyPress} />
    </div>
  </div>
);

export default BigPhotoModal;
