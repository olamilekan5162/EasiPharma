import Button from "../button/Button";
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

const Inventory = () => {
  const [stocks, setStocks] = useState([])
  
  useEffect(() =>{
    getStocks()
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
  
  const updateStock = async () => {
    try {
      const washingtonRef = doc(db, "stocks", "paracetamol");
      await updateDoc(washingtonRef, {
        quatity: 10
      });
    }
    catch(e){
      console.error(e)
    }
  }
  
  const deleteStock = async (stockName) => {
    try {
      await deleteDoc(doc(db, "stocks", stockName));
    }
    catch(e){
      console.error(e)
    }
  }
  
  return (
    <section className="inventory_page">
      <div className="inventory_topbar">
        <div className="inventory_btn">
          <Button variant="alternate">
            <Plusicon className="inventory_btn_icon" />
            <p>Add Product</p>
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
          { stocks.map((stock) =>{
            return(
          <tr key={stock.id || index}>
            <td>
              <Squareicon />
            </td>

            <td>{stock.stockName}</td>

            <td>{stock.quantity}</td>

            <td>{stock.expiryDate}</td>

            <td>
              <select>
                <option value="available">Available</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
            </td>

            <td className="inventory_icon_cell">
              <div>
                <Editicon  className="inventory_icon"/>
                <Delicon className="inventory_icon" onClick={() => deleteStock(stock.stockName)}/>
              </div>
            </td>
          </tr>
            )
          })
          }
        </table>
      </div>
    </section>
  );
};
export default Inventory;
