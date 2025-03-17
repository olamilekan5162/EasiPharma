import "./distribution.css"
import { useState, useEffect } from "react";
import DistributionModal from "../distributionModal/DistributionModal";
import {
  FaPlus as Plusicon,
  FaRegSquare as Squareicon,
  FaEdit as Editicon,
} from "react-icons/fa";
import { HiChevronUpDown as Updwonicon } from "react-icons/hi2";

import { db } from "../../../utils/firebaseConfig.js"
import { collection, addDoc, getDocs } from "firebase/firestore";


const Distribution = () => {
  const [distributions, setDistributions] = useState([])
  
useEffect(() => {
    getDistributions()
  }, [distributions]);

const getDistributions = async () => {
  try {
      const querySnapshot = await getDocs(collection(db, "suppliers"));
      const distributionData = querySnapshot.docs.map((doc) => doc.data());
      setDistributions(distributionData)
    }
    catch(e){
      console.error(e)
    }
  
}
  
  const handleAddSales = (newSales) => {
    // alert("Supplier Added:", newSupplier); // Log supplier data for backend use
    setSalesModalOpen(false); 
  };

 const [salesModalOpen, setSalesModalOpen] = useState(false);
  return (
    <section className="distri_page">
      <div className="distri_card">
      <div className="add_sales" onClick={() => setSalesModalOpen(true)}>
          <span>
            <Plusicon className="sales_icon" />
          </span>
          <h1 className="sales_text">Add Sales Order</h1>
        </div>
      </div>

      <div className="sales_details">
        <table className="sales_table">
          <tr>
            <th>
              <Squareicon />
            </th>

            <th>
              <div>
                Customer Name <Updwonicon />
              </div>
            </th>

            <th>
              <div>
                Stock <Updwonicon />
              </div>
            </th>

            <th>
              <div>
                Email <Updwonicon />
              </div>
            </th>

            <th>
              <div>
                Address <Updwonicon />
              </div>
            </th>

            <th>
              <div>
                Quantity <Updwonicon />
              </div>
            </th>

            <th>
              <div>
                Delivery Date <Updwonicon />
              </div>
            </th>

            <th>
              <div>
                Status <Updwonicon />
              </div>
            </th>

            <th></th>
          </tr>
          {distributions.map((distribution) =>{
            return(
            
          <tr>
            <td>
              <Squareicon />
            </td>

            <td>{distribution.customerName}</td>

            <td>{distribution.stockName}</td>

            <td>{distribution.email}</td>

            <td>{distribution.address}</td>

            <td>{distribution.quantity}</td>

            <td>{distribution.deliveryDate}</td>

            <td>
              <select>
                <option value="available">Pending</option>
                <option value="out-of-stock">Delivered</option>
              </select>
            </td>

             <td>
                          <div>
                            <Editicon className="sales_icon" />
                          </div>
                        </td>
          </tr>
            )
          })
          }
        </table>
      </div>
       {/* Add Sales Modal */}
                   <DistributionModal
                    isOpen={salesModalOpen}
                    onClose={() => setSalesModalOpen(false)}
                    addSales={handleAddSales}
                  />
    </section>
  );
}
export default Distribution;