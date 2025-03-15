import "./dashboard.css";
import {
  AiTwotoneDashboard as Dashboardicon,
  AiOutlineStock as Stockicon,
} from "react-icons/ai";
import ManageStockModal from "../AddStock/AddStockModal";
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
  IoBagCheckOutline as Checkouticon,
} from "react-icons/io5";
import { GrUserWorker as Stafficon, GrStatusGoodSmall as Pendingicon } from "react-icons/gr";
import { GiMedicines as Drugicon } from "react-icons/gi";
import { TbBuildingWarehouse as Warehouseicon } from "react-icons/tb";
import { useState } from "react";
  
import Modal from "../Modal/StockModal";  

const Dashboard = () => {
  const [isManageStockModalOpen, setIsManageStockModalOpen] = useState(false);
  const [isStockModalOpen, setIsStockModalOpen] = useState(false);
const supplierList = ["Supplier A", "Supplier B", "Supplier C"];
  const updateStock = (data) => {
    console.log("Updated stock:", data);
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
        <p className="D_mainbar_text">Pending Order</p>
      </div>

      <div className="D_mainbar_card">
        <span>
          <Warehouseicon className="D_mainbar_icon" />
        </span>
        <p className="D_mainbar_text">Check Stocks</p>
      </div>

      <div 
        className="D_mainbar_card" 
        onClick={() => setIsManageStockModalOpen(true)}
      >
        <span>
          <Inventoryicon className="D_mainbar_icon" />
        </span>
        <p className="D_mainbar_text">Check Inventory</p>
      </div>

      <div className="D_mainbar_card">
        <span>
          <Stafficon className="D_mainbar_icon" />
        </span>
        <p className="D_mainbar_text">Staff List</p>
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

      {/* Order Stocks - Opens Stock Modal */}
      <div 
        className="D_mainbar_card" 
        onClick={() => setIsStockModalOpen(true)}
      >
        <span>
          <Drugicon className="D_mainbar_icon" />
        </span>
        <p className="D_mainbar_text">Order Stocks</p>
      </div>

      {/* Manage Stock Modal */}
      <ManageStockModal 
       
        isOpen={isManageStockModalOpen} 
        onClose={() => setIsManageStockModalOpen(false)}
        updateStock={updateStock}
      />
      

      {/* Stock Modal */}
      <Modal 
        isOpen={isStockModalOpen} 
        onClose={() => setIsStockModalOpen(false)} 
      />
    </div>
  );
};

export default Dashboard;
