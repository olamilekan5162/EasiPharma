import React, { useState, useEffect } from "react";
import Modal from "../Modal/StockModal"; 
import "./stocks.css"
import { MdOutlineNumbers as Hashicon } from "react-icons/md";
import { BiSolidAnalyse as Analyicon } from "react-icons/bi";
import { WiMoonFull as Doticon } from "react-icons/wi";
import { NavLink, Outlet } from 'react-router-dom'
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../../utils/firebaseConfig.js"


const Stocks = () => {
  const [stocks, setStocks] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [inStock, setInStock] = useState(0)
  const [outStock, setOutStock] = useState(0)
 
   useEffect(() =>{
    getStocks()
  },[stocks])
  
  useEffect(() => {
    const tQuantity = stocks.reduce((acc, current) => {
    const quantity = parseFloat(current.quantity);
    return acc + (isNaN(quantity) ? 0 : quantity);
    }, 0);
    setTotalQuantity(tQuantity)
  },[stocks])
  
  const getStocks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "stocks"));
      const stockData = querySnapshot.docs.map((doc) => doc.data());
      setStocks(stockData)
      const inStockArray = stocks.filter((stock) => parseFloat(stock.quantity) > 0 )
      const outStockArray = stocks.filter((stock) => parseFloat(stock.quantity) === 0 )
      
      setInStock(inStockArray.length)
      setOutStock(outStockArray.length)
    }
    catch(e){
      console.error(e)
    }
  }
  

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
              <p className="stock_para_text">{totalQuantity} products</p>
            </div>
          </div>
          <div className="stock_topbar_card left_border">
            <Analyicon className="stock_topbar_icon" />
            <div>
              <h2 className="stock_topbar_text">Stock Analysis</h2>
              <div className="stock_analysis">
                <div className="stock_analysis_card">
                  <Doticon className="stock_topbar_icon_dot" />
                  <p className="stock_para_text">Out of stock: {outStock}</p>
                </div>
                <div className="stock_analysis_card">
                  <Doticon className="stock_topbar_icon_dot" />
                  <p className="stock_para_text">In stock: {inStock}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stock_lowbar">
          <div className="right_margin">
            <NavLink to="inventory" className={({isActive}) => (isActive ? "stock_lowbar_active" : "")} >
              Inventory
            </NavLink>
          </div>

          <div>
            <NavLink to="orderstock" className={({isActive}) => (isActive ? "stock_lowbar_active" : "")}>Order Stock</NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default Stocks;
