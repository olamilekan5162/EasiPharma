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
          <div className="sidebox active">
            <Dashboardicon className="icon" />
            <Link to="dashboard" className="sidetext">Dashboard</Link>
          </div>
          <div className="sidebox">
            <Stockicon className="icon" />
            <Link to="stocks" className="sidetext">Stocks</Link>
          </div>
          <div className="sidebox">
            <Distribeicon className="icon" />
            <Link to="distribution" className="sidetext">Distribution</Link>
          </div>
          <div className="sidebox">
            <Suppliericon className="icon" />
            <Link to="suppliers" className="sidetext">Suppliers</Link>
          </div>
          <div className="sidebox">
            <Stafficon className="icon" />
            <Link to="stafflist" className="sidetext">Staff list</Link>
          </div>
        </div>

        <div className="setbox">
          <div className="sidebox">
            <Settingicon className="icon" />
            <Link to="/homepage" className="sidetext">Settings</Link>
          </div>
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
