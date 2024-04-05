import React from 'react';
import './itemcom.css';

const Itemcom = ({ id, name, image, new_price, old_price, onSelectItem, isSelected }) => {
  const handleToggleCompare = () => {
    onSelectItem();
  };

  return (
    <div className='item'>
      <img className='item-image' src={image} alt={name} />
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
        <button onClick={handleToggleCompare}>
          {isSelected ? "Remove from Compare" : "Add to Compare"}
        </button>
      </div>
    </div>
  );
}

export default Itemcom;
