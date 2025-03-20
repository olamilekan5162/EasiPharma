import React, { useState } from "react";
import Button from "../button/Button";
import "./SupplierModal.css";
import { db } from "../../../utils/firebaseConfig.js"
import { collection, addDoc } from "firebase/firestore"; 
import  Spinner  from "../../spinner/Spinner"



const AddSupplierModal = ({ isOpen, onClose, addSupplier }) => {
  const [supplierName, setSupplierName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false)
  
  const isFormValid = supplierName !== "" && email !== "" && address !== ""

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
   try{
      const docRef = await addDoc(collection(db, "suppliers"), {
        name: supplierName,
        email: email,
        address: address
      });
      setLoading(false)
      console.log("Document written with ID: ", docRef.id);
      alert(`${supplierName} added successfully`)
   }catch(e){
     console.error(e)
     setLoading(false)
   }
    
    const newSupplier = {
      supplierName,
      email,
      address,
    };

    addSupplier(newSupplier);
    
    
    setSupplierName("");
    setEmail("");
    setAddress("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Supplier</h2>
        
        <label>Supplier Name:</label>
        <input 
          type="text" 
          value={supplierName} 
          onChange={(e) => setSupplierName(e.target.value)}
          required
        />

        <label>Email Address:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Company Address:</label>
        <input 
          type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <div className="modal-buttons">
          <Button onClick={handleSubmit} disabled={!isFormValid}>{loading ? <Spinner loading={loading}/> : "Add Supplier"}</Button>
          <Button onClick={onClose} className="cancel-button">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default AddSupplierModal;
