import "./supplier.css";
import { useState } from "react";
import {
  FaPlus as Plusicon,
  FaRegSquare as Squareicon,
  FaEdit as Editicon,
} from "react-icons/fa";
import { HiChevronUpDown as Updwonicon } from "react-icons/hi2";
import { MdDeleteOutline as Delicon } from "react-icons/md";
import AddSupplierModal from "../SuppliersModal/SupplierModal";
const Suppliers = () => {



  const [supplierModalOpen, setSupplierModalOpen] = useState(false);


  const handleAddSupplier = (newSupplier) => {
    // alert("Supplier Added:", newSupplier); // Log supplier data for backend use
    alert("Supplier has been added successfully!"); 
    setSupplierModalOpen(false); 
  };

  const supplierList = ["Supplier A", "Supplier B", "Supplier C"];
  return (
    <section className="supplier_page">
      <div className="supplier_card">
        <div className="add_supplier" onClick={() => setSupplierModalOpen(true)}>
          <span>
            <Plusicon className="supplier_icon" />
          </span>
          <h1 className="supplier_text">Add supplier</h1>
        </div>
      </div>

      <div className="supplier_details">
        <table className="supplier_table">
          <tr>
            <th>
              <Squareicon />
            </th>

            <th>
              <div>
                Supplier <Updwonicon />
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
              <div></div>
            </th>
          </tr>

          <tr>
            <td>
              <Squareicon />
            </td>

            <td>Paracetamol</td>

            <td>abcd@gmail.com</td>

            <td>
              Shomolu
            </td>

            <td className="inventory_icon_cell">
              <div>
                <Editicon className="inventory_icon" />
                <Delicon className="inventory_icon" />
              </div>
            </td>
          </tr>
        </table>
      </div>
       {/* Add Supplier Modal */}
             <AddSupplierModal
              isOpen={supplierModalOpen}
              onClose={() => setSupplierModalOpen(false)}
              addSupplier={handleAddSupplier}
            />
    </section>
  );
};
export default Suppliers;
