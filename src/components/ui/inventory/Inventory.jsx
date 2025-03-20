import Button from "../button/Button";
import ManageStockModal from "../AddStock/AddStockModal.jsx";
import "./inventory.css";
import {
  FaPlus as Plusicon,
  FaRegSquare as Squareicon,
  FaEdit as Editicon,
} from "react-icons/fa";
import { HiChevronUpDown as Updwonicon } from "react-icons/hi2";
import { MdDeleteOutline as Delicon } from "react-icons/md";
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../utils/firebaseConfig.js"
import { useState, useEffect } from 'react'
import  Spinner  from "../../spinner/Spinner"

const Inventory = () => {
  const [stocks, setStocks] = useState([])
  const [isManageStockModalOpen, setIsManageStockModalOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  
  useEffect(() =>{
    getStocks()
  },[])
  
  const getStocks = async () => {
    setLoading(true)
    try {
      const querySnapshot = await getDocs(collection(db, "stocks"));
      const stockData = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
      setLoading(false)
      setStocks(stockData)
    }
    catch(e){
      setLoading(false)
      console.error(e)
    }
  }
  
  const updateStock = async () => {
    try {
      const upStock = doc(db, "stocks", "paracetamol");
      await updateDoc(upStock, {
        quantity: 10
      });
    }
    catch(e){
      console.error(e)
    }
  }
  
  const deleteStock = async (stockId, stockName) => {
    try {
      await deleteDoc(doc(db, "stocks", stockId));
      alert(`${stockName} deleted successfully`)
    }
    catch(e){
      console.error(e)
    }
  }
  
  return (
    <section className="inventory_page">
      <div className="inventory_topbar">
        <div className="inventory_btn" onClick={() => setIsManageStockModalOpen(true)} >
          <Button variant="alternate">
            <Plusicon className="inventory_btn_icon" />
            <p>Add Stock</p>
          </Button>
        </div>
      </div>

      <div className="inventory_details">
        <table className="inventory_table">
          <tr>
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
                Quantity (In carton) <Updwonicon />
              </div>
            </th>

            <th>
              <div>
                Expiring date <Updwonicon />
              </div>
            </th>

            <th>
              <div>
                Availablity <Updwonicon />
              </div>
            </th>

            <th>
              <div></div>
            </th>
          </tr>
          {loading 
          ? 
          <Spinner loading={loading} size={100} color='#008000' />
          : 
           stocks.map((stock) =>{
            return(
          <tr key={stock.id}>
            <td>
              <Squareicon />
            </td>

            <td>{stock.stockName}</td>

            <td>{stock.quantity}</td>

            <td>{stock.expiryDate}</td>

            <td>
              {stock.quantity > 0 ? "Available" : "Unavailable"}
             { /** <select>
                <option value="available">Available</option>
                <option value="out-of-stock">Out of Stock</option>
              </select> **/}
            </td>

            <td>
              <div>
                <Delicon className="inventory_icon" onClick={() => deleteStock(stock.id, stock.stockName)}/>
              </div>
            </td>
          </tr>
            )
          })
          }
        </table>
      </div>
      {/* Manage Stock Modal */}
      <ManageStockModal 
       
        isOpen={isManageStockModalOpen} 
        onClose={() => setIsManageStockModalOpen(false)}
        updateStock={updateStock}
      />
    </section>
  );
};
export default Inventory;