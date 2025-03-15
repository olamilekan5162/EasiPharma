import "./homepage.css";
import { Outlet, Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate("/");
  };
  return (
    <section className="homepage">
      <div className="sidebar">
        <div className="homepage_hero">
          <h1 className="H_hero_text">EasiPharma Management Ltd</h1>
        </div>

        <div className="boxes">
          <Link to="dashboard" className="sidelink active">
            <Dashboardicon className="icon" />
            <span className="sidetext">Dashboard</span>
          </Link>

          <Link to="stocks" className="sidelink">
            <Stockicon className="icon" />
            <span className="sidetext">Stocks</span>
          </Link>

          <Link to="distribution" className="sidelink">
            <Distribeicon className="icon" />
            <span className="sidetext">Distribution</span>
          </Link>

          <Link to="suppliers" className="sidelink">
            <Suppliericon className="icon" />
            <span className="sidetext">Suppliers</span>
          </Link>

          <Link to="stafflist" className="sidelink">
            <Stafficon className="icon" />
            <span className="sidetext">Staff list</span>
          </Link>
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
        <div>
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
        </div>
        <Outlet />
      </div>
    </section>
  );
};
export default Homepage;
