import React, { useState } from "react";
import Modal from "../Modal/StockModal"; // Correct import name
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
      <h2>Order Stocks</h2>

<label>Supplier:</label>
<select value={selectedSupplier} onChange={(e) => setSelectedSupplier(e.target.value)}>
  {suppliers.map((supplier, index) => (
    <option key={index} value={supplier}>
      {supplier}
    </option>
  ))}
</select>

<label>Stock Name:</label>
<input type="text" value={stockName} onChange={(e) => setStockName(e.target.value)} />

<label>Quantity:</label>
<input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

<label>Delivery Date:</label>
<input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} />

<label>Price:</label>
<input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

< Button onClick={handleSubmit}>Confirm Order</Button>
      </Modal>
    </div>
  );
};

export default Stocks;
