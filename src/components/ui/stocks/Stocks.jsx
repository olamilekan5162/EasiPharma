import React, { useState } from "react";
import Modal from "../Modal/StockModal"; 
import "./stocks.css"
import { MdOutlineNumbers as Hashicon } from "react-icons/md";
import { BiSolidAnalyse as Analyicon } from "react-icons/bi";
import { WiMoonFull as Doticon } from "react-icons/wi";
import { NavLink, Outlet } from 'react-router-dom'


const Stocks = () => {

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
