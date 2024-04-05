import React from 'react';

const CompareModal = ({ selectedItems, handleCloseModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>You have selected {selectedItems.length} items for comparison:</p>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <img src={item.image} alt={item.name} />
              <p>New Price: {item.new_price}</p>
              <p>Old Price: {item.old_price}</p>
            </li>
          ))}
        </ul>
        <button onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
};

export default CompareModal;
