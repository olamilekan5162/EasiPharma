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
import { db } from "../../../utils/firebaseConfig.js";
import { useState, useEffect } from "react";

const Inventory = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    getStocks();
  }, []); // ✅ Runs only once when component mounts

  const getStocks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "stocks"));
      const stockData = querySnapshot.docs.map((doc) => ({
        id: doc.id, // ✅ Include document ID
        ...doc.data(),
      }));
      setStocks(stockData);
    } catch (e) {
      console.error(e);
    }
  };

  const updateStock = async (stockId, newQuantity) => {
    try {
      const stockRef = doc(db, "stocks", stockId);
      await updateDoc(stockRef, { quantity: newQuantity });
    } catch (e) {
      console.error(e);
    }
  };

  const deleteStock = async (stockId) => {
    try {
      await deleteDoc(doc(db, "stocks", stockId));
      setStocks(stocks.filter((stock) => stock.id !== stockId)); // ✅ Update state after deletion
    } catch (e) {
      console.error(e);
    }
  };

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
          <thead>
            <tr>
              <th><Squareicon /></th>
              <th><div>Stock Name <Updwonicon /></div></th>
              <th><div>Quantity (In carton) <Updwonicon /></div></th>
              <th><div>Expiring Date <Updwonicon /></div></th>
              <th><div>Availability <Updwonicon /></div></th>
              <th><div>Actions</div></th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={stock.id || index}>
                <td><Squareicon /></td>
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
                    <Editicon className="inventory_icon" />
                    <Delicon className="inventory_icon" onClick={() => deleteStock(stock.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Inventory;
