import React, { useState } from "react";
import Modal from "../Modal/StockModal"; 
import Button from "../button/Button";

const suppliers = ["Supplier A", "Supplier B", "Supplier C"];
const Stocks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [stockName, setStockName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [price, setPrice] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState(suppliers[0]);

  const handleSubmit = () => {
    alert(`Order placed for ${quantity} of ${stockName} from ${selectedSupplier} at ${price} on ${deliveryDate}`);
    setIsModalOpen(false);
    e.preventDefault();

    // Here, you can handle sending data to the backend 
    console.log({ stockName, quantity, deliveryDate, price });

    
    setStockName("");
    setQuantity("");
    setDeliveryDate("");
    setPrice("");
  };
  return (
    <div>
      
      
      
      <h1>Stocks</h1>
      <Button onClick={() => setIsModalOpen(true)}>Add Stock</Button>

      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      
      </Modal>
    </div>
  );
};

export default Stocks;
