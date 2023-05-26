import React from 'react';
import './carousel.css'
import arrow from '../../images/arrow.png'

export default function CustomArrow({ direction, onClick }) {
  return (
    <div className={`custom-arrow custom-arrow-${direction}`} onClick={onClick}>
      <img src={arrow} alt="" />
    </div>
  );
};