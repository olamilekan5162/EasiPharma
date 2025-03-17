import "./distribution.css"
import { useState } from "react";
import DistributionModal from "../distributionModal/DistributionModal";
import {
  FaPlus as Plusicon,
  FaRegSquare as Squareicon,
  FaEdit as Editicon,
} from "react-icons/fa";
import { HiChevronUpDown as Updwonicon } from "react-icons/hi2";


const Distribution = () => {
  const handleAddSales = (newSales) => {
    // alert("Supplier Added:", newSupplier); // Log supplier data for backend use
    alert("Supplier has been added successfully!"); 
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

          <tr>
            <td>
              <Squareicon />
            </td>

            <td>Mr Tobi</td>

            <td>Aspirin</td>

            <td>abcd@gmail.com</td>

            <td>challenge</td>

            <td>500</td>

            <td>11/09/2025</td>

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