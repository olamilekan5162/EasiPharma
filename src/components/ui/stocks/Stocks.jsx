import React, { useState } from "react";
import Modal from "../Modal/StockModal"; 
import Button from "../button/Button";
import "./stocks.css"
import { MdOutlineNumbers as Hashicon } from "react-icons/md";
import { BiSolidAnalyse as Analyicon } from "react-icons/bi";
import { WiMoonFull as Doticon } from "react-icons/wi";
import { NavLink, Outlet } from 'react-router-dom'

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
    <section>
      <div className="stock">
        <h1>Stocks</h1>
      </div>

      <div className="stock_mainbar">
        <div className="stock_topbar">
          <div className="stock_topbar_card">
            <Hashicon className="stock_topbar_icon" />
            <div>
              <h2 className="stock_topbar_text">Total Stock</h2>
              <p className="stock_para_text">50 stocks</p>
            </div>
          </div>
          <div className="stock_topbar_card left_border">
            <Analyicon className="stock_topbar_icon" />
            <div>
              <h2 className="stock_topbar_text">Stock Analysis</h2>
              <div className="stock_analysis">
                <div className="stock_analysis_card">
                  <Doticon className="stock_topbar_icon_dot" />
                  <p className="stock_para_text">Out of stock: 20</p>
                </div>
                <div className="stock_analysis_card">
                  <Doticon className="stock_topbar_icon_dot" />
                  <p className="stock_para_text">In stock: 70</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stock_lowbar">
          <div className="stock_lowbar_link right_margin">
            <NavLink to="inventory">
              Inventory
            </NavLink>
          </div>

          <div className="stock_lowbar_link">
            <NavLink to="orderstock">Order Stock</NavLink>
          </div>
        </div>
      </div>
      <Outlet />
      {/*<Button onClick={() => setIsModalOpen(true)}>Add Stock</Button>*/}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
    </section>
  );
};

export default Stocks;
