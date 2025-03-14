import "./homepage.css";
import { useNavigate } from 'react-router-dom'
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
            <Dashboardicon className="icon active" />
            <h1 className="sidetext active">Dashboard</h1>
          </div>
          <div className="sidebox">
            <Stockicon className="icon" />
            <h1 className="sidetext">Stocks</h1>
          </div>
          <div className="sidebox">
            <Distribeicon className="icon" />
            <h1 className="sidetext">Distribution</h1>
          </div>
          <div className="sidebox">
            <Suppliericon className="icon" />
            <h1 className="sidetext">Suppliers</h1>
          </div>
          <div className="sidebox">
            <Stafficon className="icon" />
            <h1 className="sidetext">Staff list</h1>
          </div>
        </div>

        <div className="setbox">
          <div className="sidebox">
            <Settingicon className="icon" />
            <h1 className="sidetext">Settings</h1>
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

        {/* Dashboard component, copy from here */}
        <div className="H_mainbar">
          <div className="H_mainbar_card">
            <span>
              <Storeicon className="H_mainbar_icon" />
            </span>
            <p className="H_mainbar_text">Total Stocks</p>
            <p>100</p>
          </div>

          <div className="H_mainbar_card">
            <span>
              <Checkouticon className="H_mainbar_icon" />
            </span>
            <p className="H_mainbar_text">Last Order</p>
          </div>

          <div className="H_mainbar_card">
            <span>
              <Pendingicon className="H_mainbar_icon" />
            </span>
            <p className="H_mainbar_text">Pending Oder</p>
          </div>

          <div className="H_mainbar_card">
            <span>
              <Warehouseicon className="H_mainbar_icon" />
            </span>
            <p className="H_mainbar_text">Check Stocks</p>
          </div>

          <div className="H_mainbar_card">
            <span>
              <Inventoryicon className="H_mainbar_icon" />
            </span>
            <p className="H_mainbar_text">Check Inventory</p>
          </div>

          <div className="H_mainbar_card">
            <span>
              <Stafficon className="H_mainbar_icon" />
            </span>
            <p className="H_mainbar_text">Staff list</p>
          </div>

          <div className="H_mainbar_card">
            <span>
              <Suppliericon className="H_mainbar_icon" />
            </span>
            <p className="H_mainbar_text">Add Supplier</p>
          </div>

          <div className="H_mainbar_card">
            <span>
              <Distribeicon className="H_mainbar_icon" />
            </span>
            <p className="H_mainbar_text">Distribution Records</p>
          </div>

          <div className="H_mainbar_card">
            <span>
              <Drugicon className="H_mainbar_icon" />
            </span>
            <p className="H_mainbar_text">Order Stocks</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Homepage;
