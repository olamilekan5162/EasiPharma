import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import { db } from "../../../utils/firebaseConfig.js"
import { collection, addDoc, getDocs } from "firebase/firestore";
import  Spinner  from "../../spinner/Spinner"


const DistributionModal = ({ isOpen, onClose }) => {
  const [customerName, setCustomerName] = useState("");
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState(products[0]);
  const [quantity, setQuantity] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [loading, setLoading] = useState(false)
  
  const isFormValid = customerName !== "" && productName !== "" && quantity !== "" && email !== "" && address !== "" && deliveryDate !== ""


  useEffect(() => {
    getProducts()
  }, [products]);


const getProducts = async () => {
  try {
      const querySnapshot = await getDocs(collection(db, "stocks"));
      const stockData = querySnapshot.docs.map((doc) => doc.data());
      setProducts(stockData)
    }
    catch(e){
      console.error(e)
  
    }
  
}


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    
    try{
      const docRef = await addDoc(collection(db, "distribution"), {
        customerName: customerName,
        stockName: productName,
        email: email,
        address: address,
        deliveryDate: deliveryDate,
        quantity: quantity
      });
      
      console.log("Document written with ID: ", docRef.id);
      alert(`${quantity} quantity of ${productName} had been distributed successfully`)
      setLoading(false)
      
   }catch(e){
     console.error(e)
     setLoading(false)
   }
    
    const distributionData = {
      customerName,
      productName,
      quantity: parseInt(quantity, 10),
      deliveryDate,
    };

    
    // Clear fields
    setCustomerName("");
    setProductName("");
    setQuantity("");
    setDeliveryDate("");
    setEmail("");
    setAddress("");
    onClose();
  };

  // Hide modal if not open
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Distribute Stock</h2>
        
        <label>Customer Name:</label>
        <input 
          type="text" 
          value={customerName} 
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />

        <label>Product Name:</label>
        <select value={productName} onChange={(e) => setProductName(e.target.value)} required>
          <option value="" disabled>Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.stockName}>{product.stockName}</option>
          ))}
        </select>

        <label>Quantity:</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        
        <label>Email:</label>
        <input 
          type="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label>Address:</label>
        <input 
          type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label>Delivery Date:</label>
        <input 
          type="date" 
          value={deliveryDate} 
          onChange={(e) => setDeliveryDate(e.target.value)}
          required
        />

        <div className="modal-buttons">
          <Button onClick={handleSubmit} disabled={!isFormValid}>{loading ? <Spinner loading={loading}/> : "Create Order"}</Button>
          <Button onClick={onClose} className="cancel-button">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default DistributionModal;
