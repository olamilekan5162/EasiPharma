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


const suppliers = ["Supplier A", "Supplier B", "Supplier C"];
const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  
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
        
      </Modal>
    </div>
        </div>
    )
}
export default Dashboard;