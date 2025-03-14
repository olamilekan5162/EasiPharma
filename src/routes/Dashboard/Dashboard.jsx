import "./dashboard.css";
import { AiTwotoneDashboard } from "react-icons/ai";


const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="sidebar">
        <div className="dashboard_hero">
          <h1 className="D_hero_text">EasiPharma</h1>
        </div>

        <div className="boxes">
          <div className="sidebox">
            <h1 className="sidetext">Dashboard</h1>
            <AiTwotoneDashboard/>
          </div>
          <div className="sidebox">
            <h1 className="sidetext">Stocks</h1>
            </div>
          <div className="sidebox">
            <h1 className="sidetext">Distribution</h1>
          </div>
          <div className="sidebox">
            <h1 className="sidetext">Suppliers</h1>
          </div>
          <div className="sidebox">
            <h1 className="sidetext">Staff list</h1>
          </div>
      </div>

      <div className="sidebox">
        <h1 className="sidetext">Settings</h1>
      </div>


      <div className="D_btn">
        <a href="#"><button>Sign Out</button></a>
      </div>
      </div>

      <div className="mainbar">
        <h1>Second grid</h1>
      </div>
    </section>
  );
};
export default Dashboard;
