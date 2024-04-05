import './ProductList.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [bidPlaced, setBidPlaced] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/allproducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
      }
    };

    fetchProducts();
  }, []);

  const handleBidClick = (product) => {
    setSelectedProduct(product);
    setBidPlaced((prevState) => ({
      ...prevState,
      [product._id]: true,
    }));
    setIsModalOpen(true);
  };

  const handleConfirmBid = () => {
    alert('Bid confirmed successfully! Check your email for notification');
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleCancelBid = () => {
    setSelectedProduct(null);
    setBidPlaced((prevState) => ({
      ...prevState,
      [selectedProduct._id]: false,
    }));
    setIsModalOpen(false);
  };

  return (
    <div className="product-list-container">
      {error && <div className="error">{error}</div>}
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product._id}>
            <img className="product-image" src={product.image} alt="" />
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <div className="product-prices">
                <div className="product-price-new"> ${product.new_price}</div>
                <div className="product-price-old"> ${product.old_price}</div>
              
              <button
                onClick={() => handleBidClick(product)}
                disabled={bidPlaced[product._id]}
                className={bidPlaced[product._id] ? 'bid-placed-btn' : 'bid-btn'}>
                {bidPlaced[product._id] ? 'Bid Placed' : 'Place Bid'}
              </button></div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal"
        overlayClassName="overlay" >
        <div className="bid-form">
          <h2>Confirm Bidding Details</h2>
          <p><img className="product-image-bid" src={selectedProduct && selectedProduct.image} alt=""></img></p>
          <p> {selectedProduct && selectedProduct.name}</p>
          <p>Bid Price: ${selectedProduct && selectedProduct.new_price}</p>
          <label>
            <input type="checkbox" checked={emailChecked} onChange={() => setEmailChecked(!emailChecked)} />
            Send confirmation to email
          </label>
          <div className="btn-group">
            <button onClick={handleConfirmBid} className="confirm-bid-btn">Confirm Bid</button>
            <button onClick={handleCancelBid} className="cancel-btn">Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductList;
