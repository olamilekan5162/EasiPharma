import "./dashboard.css";
import DistributionModal from "../distributionModal/DistributionModal";
import AddSupplierModal from "../SuppliersModal/SupplierModal";
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
import { useContext, useEffect, useState } from 'react'
import { UserContext } from "../../../utils/UserAuthContext.jsx"
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/StockModal";  
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../../utils/firebaseConfig.js"



const Dashboard = () => {
  const [stocks, setStocks] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const { level } = useContext(UserContext)
  
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
    }
    catch(e){
      console.error(e)
    }
  }
  
  
  const [isManageStockModalOpen, setIsManageStockModalOpen] = useState(false);
  const [isStockModalOpen, setIsStockModalOpen] = useState(false);
  const [supplierModalOpen, setSupplierModalOpen] = useState(false);
  // const openModal = () => setIsDistributionModalOpen(true);
  // const closeModal = () => setIsDistributionModalOpen(false);


  const navigate = useNavigate();
  const handleAddSupplier = (newSupplier) => {
    // alert("Supplier Added:", newSupplier); // Log supplier data for backend use
    alert("Supplier has been added successfully!"); 
    setSupplierModalOpen(false); 
  };

const supplierList = ["Supplier A", "Supplier B", "Supplier C"];
  const updateStock = (data) => {
    console.log("Updated stock:", data);
  };
  return (
    <div className="D_mainbar">
      <div className="D_mainbar_card" 
      style={{ cursor: "pointer" }}>
        <span>
          <Storeicon className="D_mainbar_icon" />
        </span>
        <p className="D_mainbar_text">Total Stocks</p>
        <p>{totalQuantity}</p>
      </div>

      <div 
        className="D_mainbar_card" 
        onClick={() => navigate("/homepage/stocks/inventory")}
        style={{ cursor: "pointer" }}
      
      >
        <span>
          <Inventoryicon className="D_mainbar_icon" />
        </span>
        <p className="D_mainbar_text">Check Inventory</p>
      </div>
    

     {level === "Admin Manager" ?
     <>
      <div className="D_mainbar_card" 
       onClick={() => navigate("/homepage/stocks/orderstock")}  
       style={{ cursor: "pointer" }}  
      >
        <span>
          <Warehouseicon className="D_mainbar_icon" />
        </span>
        <p className="D_mainbar_text">Check Stocks</p>
      </div>



      <div className="D_mainbar_card"
      style={{ cursor: "pointer" }}
      onClick={() => setSupplierModalOpen(true)}>
        <span>
          <Suppliericon className="D_mainbar_icon" />
        </span>
        <p className="D_mainbar_text">Add Supplier</p>
      </div>
      
      <div 
        className="D_mainbar_card" 
        style={{ cursor: "pointer" }}
        onClick={() => setIsStockModalOpen(true)}
      >
        <span>
          <Drugicon className="D_mainbar_icon" />
        </span>
        <p className="D_mainbar_text">Order Stocks</p>
      </div>
      </>
      : ""
      }
      
      <div className="D_mainbar_card" 
      onClick={() => navigate("/homepage/distribution")} 
      style={{ cursor: "pointer" }}
      >
        <span>
          <Distribeicon className="D_mainbar_icon"
           />
        </span>
        <p className="D_mainbar_text">Distribution</p>
      </div>

      
    
       {/* Add Supplier Modal */}
       <AddSupplierModal
        isOpen={supplierModalOpen}
        onClose={() => setSupplierModalOpen(false)}
        addSupplier={handleAddSupplier}
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
