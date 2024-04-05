import React, { useState, useEffect } from 'react';
import './Allproduct.css';
import Itemcom from '../itemcom/itemcom';

const Allproduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCompareMessage, setShowCompareMessage] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts'); 
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSelectItem = (item) => {
    if (selectedItems.length < 2 && !selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    } else if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    } else {
      console.log("You can only compare up to two items at a time.");
    }
  };

  useEffect(() => {
    if (selectedItems.length === 2) {
      setShowCompareMessage(true);
    } else {
      setShowCompareMessage(false);
    }
  }, [selectedItems]);

  const handleCloseCompareMessage = () => {
    setShowCompareMessage(false);
  };

  const handleCompare = () => {
    // Redirect or perform any action needed for comparison
  };

  return (
    <div className='allproduct'>
      <div className="allproduct-item">
        {products.map((item, i) => (
          <Itemcom
            key={i}
            id={item._id} //  MongoDB _id field is used for identification
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            onSelectItem={() => handleSelectItem(item)}
            isSelected={selectedItems.includes(item)}
          />
        ))}
      </div>
      {showCompareMessage && (
        <div className="modal">
          <div className="modal-content">
            <p>You have selected 2 items.</p>
            <button onClick={handleCloseCompareMessage}>Close</button>
            <button onClick={handleCompare}>Compare List</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Allproduct;
