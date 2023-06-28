import React from 'react';
import './carousel.css'
export default function CustomArrowNotActive({ direction, onClick }) {
  return (
    <div className={`custom-arrow custom-arrow-${direction} inactive-arrow`} onClick={onClick}>
      <img src={'/images/greyed-arrow.png'} alt="" />
    </div>
  );
};