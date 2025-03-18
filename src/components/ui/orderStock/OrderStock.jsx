import Button from "../button/Button";
import "./orderStock.css";
import { RiFilter3Fill as Filtericon } from "react-icons/ri";
import { FaPlus as Plusicon, FaRegSquare as Squareicon } from "react-icons/fa";
import { HiChevronUpDown as Updwonicon } from "react-icons/hi2";
import {useState, useEffect} from 'react'
import Modal from "../Modal/StockModal"; 
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../utils/firebaseConfig.js"
import  Spinner  from "../../spinner/Spinner"

const OrderStock = () => {
  
  const [orderStocks, setOrderStocks] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    getOrderStocks()
  }, []);


const getOrderStocks = async () => {
  setLoading(true)
  try {
      const querySnapshot = await getDocs(collection(db, "orderStock"));
      const orderStocksData = querySnapshot.docs.map((doc) => doc.data());
      setOrderStocks(orderStocksData)
      setLoading(false)
    }
    catch(e){
      console.error(e)
      setLoading(false)
    }
  
}

const getStatus = (dbDate) => {
    const ordDate = new Date(dbDate)
    currentDate = new Date()
    const threeDaysAfter = new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000);
    if (ordDate <= threeDaysAfter){
      return "Completed"
    }
    else{
      return "Pending"
    }
  }
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <section className="orderstock">
      <div className="orderstock_topbar">
        <div className="orderstock_rightbar">
          <div className="filter">
            <h2>
              <Filtericon />
              Filters
            </h2>
          </div>

          <div className="orderstock_btn">
            <Button onClick={() => setIsModalOpen(true)} variant="alternate">
              <Plusicon />
              <p>Order Stock</p>
            </Button>
          </div>
        </div>
      </div>

      <div className="orderstock_details">
        <table className="orderstock_table">
          <tr >
            <th>
              <Squareicon />
            </th>

            <th>
              <div>
                Stock Name <Updwonicon />
              </div>
            </th>

            <th>
              <div>
                Order Date <Updwonicon />
              </div>
            </th>

            <th>
              <div>
                Quantity <Updwonicon />
              </div>
            </th>

            <th>
              <div>
                Supplier <Updwonicon />
              </div>
            </th>

            <th>
              <div>
                Status <Updwonicon />
              </div>
            </th>
          </tr>
          {loading 
          ? 
          <Spinner loading={loading} size={100} color='#008000' />
          : 
          orderStocks.map((orderStock) =>{
            return (
          <tr key={orderStock.id}>
            <td>
              <Squareicon />
            </td>

            <td>{orderStock.stockName}</td>

            <td>{orderStock.orderDate}</td>

            <td>{orderStock.quantity}</td>

            <td>{orderStock.supplier}</td>

            <td>
              {getStatus(orderStock.orderDate)}
              {/** <select>
                <option value="available">Pending</option>
                <option value="out-of-stock">Completed</option>
              </select> **/}
            </td>
          </tr>
            )
          })
          }
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
    </section>
  );
};
export default OrderStock;
