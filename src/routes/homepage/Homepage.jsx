import "./homepage.css";
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { UserContext } from "../../utils/UserAuthContext.jsx"
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
import Button from "../../components/ui/button/Button";

const Homepage = () => {
  const { user, level } = useContext(UserContext)
  
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate("/");
  };
  useEffect(() => {
    console.log(user)
    console.log(level)
  },[])
  return (
    <section className="homepage">
      <div className="sidebar">
        <div className="homepage_hero">
          <h1 className="H_hero_text">EasiPharma Management Ltd</h1>
        </div>

        <div className="boxes">
          <NavLink to="dashboard" className={({isActive}) => (isActive ? 'sidelink active' : 'sidelink')}>
            <Dashboardicon className="icon" />
            <span className="sidetext">Dashboard</span>
          </NavLink>

          <NavLink to="stocks" className={({isActive}) => (isActive ? 'sidelink active' : 'sidelink')}>
            <Stockicon className="icon" />
            <span className="sidetext">Stocks</span>
          </NavLink>

          <NavLink to="distribution" className={({isActive}) => (isActive ? 'sidelink active' : 'sidelink')}>
            <Distribeicon className="icon" />
            <span className="sidetext">Distribution</span>
          </NavLink>

          <NavLink to="suppliers" className={({isActive}) => (isActive ? 'sidelink active' : 'sidelink')}>
            <Suppliericon className="icon" />
            <span className="sidetext">Suppliers</span>
          </NavLink>

          <NavLink to="stafflist" className={({isActive}) => (isActive ? 'sidelink active' : 'sidelink')}>
            <Stafficon className="icon" />
            <span className="sidetext">Staff list</span>
          </NavLink>
        </div>

        <div className="setbox">
          
            <Link to="/homepage" className="sidelink">
              <Settingicon className="icon" />
              <span className="sidetext">Settings</span>
            </Link>
        
        </div>

        <div className="H_btn">
          <Button variant="secondary" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </div>

      <div className="H_main">
        
          <div className="H_navbar">
            <div className="H_navbar_card">
              <Profileicon className="H_navbar_icon" />
              <h1 className="H_navbar_text">Admin: Manager</h1>
            </div>
            <div className="H_navbar_card">
              <Dateicon className="H_navbar_icon" />
              <h1 className="H_navbar_text">
                <i>Date</i>
              </h1>
            </div>
            <div>
              <Settingicon className="H_navbar_set" />
            </div>
          </div>
          

          <div className="warning_box">
            <p>warning</p>
          </div>


        <div className="H_main_content">
        <Outlet />
        </div>
      </div>
    </section>
  );
};
export default Homepage;
