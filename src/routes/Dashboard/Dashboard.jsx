import "./dashboard.css";
import { useNavigate } from 'react-router-dom'
import {
  AiTwotoneDashboard as Dashboardicon,
  AiOutlineStock as Stockicon,
} from "react-icons/ai";
import { FaShareSquare as Distribeicon } from "react-icons/fa";
import { MdOutlineSupportAgent as Suppliericon } from "react-icons/md";
import {
  CiCircleList as Stafficon,
  CiSettings as Settingicon,
} from "react-icons/ci";
import Button from "../../components/ui/button/Button";

const Dashboard = () => {
  const navigate = useNavigate()
  const handleSignOut = () => {
    navigate('/')
  }
  return (
    <section className="dashboard">
      <div className="sidebar">
        <div className="dashboard_hero">
          <h1 className="D_hero_text">EasiPharma Management Ltd</h1>
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

        <div className="D_btn">
          <Button variant="primary" onClick={handleSignOut}>
        Sign Out 
      </Button>
        </div>
      </div>

      <div className="mainbar">
        <h1>Second grid</h1>
      </div>
    </section>
  );
};
export default Dashboard;
