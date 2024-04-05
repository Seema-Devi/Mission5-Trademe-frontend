import React, { useState } from 'react';
import './CompareItems.css';

const Item = (props) => {
  const [watchlistAdded, setWatchlistAdded] = useState(false);
  const [bidPlaced, setBidPlaced] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleBidClick = () => {
    setBidPlaced(true);
    setShowPopup(true);
  };

  const handleWatchlistClick = () => {
    setWatchlistAdded(true);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
      <div className="buttons-container">
        <button onClick={handleWatchlistClick} disabled={watchlistAdded}>
          {watchlistAdded ? "Added to Watchlist" : "Add to Watchlist"}
        </button>
        <button onClick={handleBidClick} disabled={bidPlaced}>
          {bidPlaced ? "Bid Placed" : "Place Bid"}
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">{
            watchlistAdded ? "Added to Watchlist successfully!" : "Bid placed successfully!"
          }</div>
          <button onClick={handleClosePopup} className="close-btn">Close</button>
        </div>
      )}
    </div>
  );
};

export default Item;
