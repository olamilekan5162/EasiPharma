import "./dashboard.css";
import {
  AiTwotoneDashboard as Dashboardicon,
  AiOutlineStock as Stockicon,
} from "react-icons/ai";
import { FaShareSquare as Distribeicon } from "react-icons/fa";
import {
  MdOutlineSupportAgent as Suppliericon,
  MdInventory as Inventoryicon,
} from "react-icons/md";
import {
  CiSettings as Settingicon,
  CiCalendarDate as Dateicon,
} from "react-icons/ci";
import {
  IoPersonCircleSharp as Profileicon,
  IoStorefront as Storeicon,
  IoBagCheckOutline as Checkouticon
} from "react-icons/io5";
import { GrUserWorker as Stafficon, GrStatusGoodSmall as Pendingicon } from "react-icons/gr";
import { GiMedicines as Drugicon } from "react-icons/gi";
import { TbBuildingWarehouse as Warehouseicon } from "react-icons/tb";
import { useState } from "react";
import Modal from "../Modal/StockModal";
import Button from "../button/Button";

const suppliers = ["Supplier A", "Supplier B", "Supplier C"];
const Dashboard = () => {
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
    
    <div className="D_mainbar">
          <div className="D_mainbar_card">
            <span>
              <Storeicon className="D_mainbar_icon" />
            </span>
            <p className="D_mainbar_text">Total Stocks</p>
            <p>100</p>
          </div>

          <div className="D_mainbar_card">
            <span>
              <Checkouticon className="D_mainbar_icon" />
            </span>
            <p className="D_mainbar_text">Last Order</p>
          </div>

          <div className="D_mainbar_card">
            <span>
              <Pendingicon className="D_mainbar_icon" />
            </span>
            <p className="D_mainbar_text">Pending Oder</p>
          </div>

          <div className="D_mainbar_card">
            <span>
              <Warehouseicon className="D_mainbar_icon" />
            </span>
            <p className="D_mainbar_text">Check Stocks</p>
          </div>

          <div className="D_mainbar_card">
            <span>
              <Inventoryicon className="D_mainbar_icon" />
            </span>
            <p className="D_mainbar_text">Check Inventory</p>
          </div>

          <div className="D_mainbar_card">
            <span>
              <Stafficon className="D_mainbar_icon" />
            </span>
            <p className="D_mainbar_text">Staff list</p>
          </div>

          <div className="D_mainbar_card">
            <span>
              <Suppliericon className="D_mainbar_icon" />
            </span>
            <p className="D_mainbar_text">Add Supplier</p>
          </div>

          <div className="D_mainbar_card">
            <span>
              <Distribeicon className="D_mainbar_icon" />
            </span>
            <p className="D_mainbar_text">Distribution Records</p>
          </div>

          <div className="D_mainbar">
      <div className="D_mainbar_card" onClick={() => setIsModalOpen(true)}>
        <span>
          <Drugicon className="D_mainbar_icon" />
        </span>
        <p className="D_mainbar_text">Order Stocks</p>
      </div>

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
        </div>
    )
}
export default Dashboard;