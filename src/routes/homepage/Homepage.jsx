import "./homepage.css";
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
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
import Button from "../../components/ui/button/Button.jsx";
import { signOut } from "firebase/auth"
import { collection, getDocs, doc,  } from "firebase/firestore";
import { auth, db } from "../../utils/firebaseConfig.js"
import { GoogleGenerativeAI } from "@google/generative-ai";

const Homepage = () => {
  const { user, level } = useContext(UserContext)
  const [predictions, setPredictions] = useState({})
  const [stocks, setStocks] = useState([])
  const navigate = useNavigate();
  const date = new Date()
  
  useEffect(() =>{
    getStocks()
  },[])
  
  const getStocks = async () => {

    try {
      const querySnapshot = await getDocs(collection(db, "stocks"));
      const stockData = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
      setStocks(stockData)
    }
    catch(e){
      console.error(e)
    }
  }
  
  
useEffect(() => {
  const predict = async () => {
    if(stocks.length > 0){
      try{
        const formattedData = stocks.map((stock) => ({
        name: stock.stockName,
        quantity: stock.quantity,
        expiryDate: stock.expiryDate,
      }));
      
        const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY
        const genAI = new GoogleGenerativeAI(GEMINI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `Analyze the stock data and predict stocks that are expired or almost expired using 4 month as a judging base and the stocks that needs to be restocked i.e stocks less than 40 just go straight to the point with your answer with not more than 20 words stating , for example, restock paracetamol, aspirin will expire in 2 months, blood tonic has expired etc. starting each sentence with ||: ${JSON.stringify(formattedData)}`
        const result = await model.generateContent(prompt);
        const prediction = result.response.text()
        setPredictions({prediction})
        console.log(result.response.text());
      }
      catch(e){
        console.error(e)
      }
  }
  }
  predict()
},[stocks])


const handleSignOut = () =>{
  signOut(auth)
  .then(() => {
    navigate("/")
  })
  .catch((error) => {
    console.log(error)
  });
}
  
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
          
          {level === "Admin Manager" ?
          <NavLink to="stocks/inventory" className={({isActive}) => (isActive ? 'sidelink active' : 'sidelink')}>
            <Stockicon className="icon" />
            <span className="sidetext">Stocks</span>
          </NavLink>
          :
          <div></div>
          }
          
          <NavLink to="distribution" className={({isActive}) => (isActive ? 'sidelink active' : 'sidelink')}>
            <Distribeicon className="icon" />
            <span className="sidetext">Distribution</span>
          </NavLink>
          
          {level === "Admin Manager" ?
          <NavLink to="suppliers" className={({isActive}) => (isActive ? 'sidelink active' : 'sidelink')}>
            <Suppliericon className="icon" />
            <span className="sidetext">Suppliers</span>
          </NavLink>
          : ""
          }
        </div>

        <div className="setbox">
          
            <Link to="/homepage" className="sidelink">
              <Settingicon className="icon" />
              <span className="sidetext">Settings</span>
            </Link>
        
        </div>

        <div className="H_btn_card">
          <div className="H_btn">
            <Button variant="secondary" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="H_main">
        
          <div className="H_navbar">
            <div className="H_navbar_card">
              <Profileicon className="H_navbar_icon" />
              <h1 className="H_navbar_text">{level}</h1>
            </div>
            <div className="H_navbar_card">
              <Dateicon className="H_navbar_icon" />
              <h1 className="H_navbar_text">
                <i>{date.toLocaleDateString()}</i>
              </h1>
            </div>
            <div>
              <Settingicon className="H_navbar_set" />
            </div>
          </div>
          

          <div className="warning_box">
            {predictions.prediction && (<p className="warning_text">{predictions.prediction}</p>)}
          </div>


        <div className="H_main_content">
        <Outlet />
        </div>
      </div>
    </section>
  );
};
export default Homepage;
