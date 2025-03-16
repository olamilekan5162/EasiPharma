import "./supplier.css";
import {
  FaPlus as Plusicon,
  FaRegSquare as Squareicon,
  FaEdit as Editicon,
} from "react-icons/fa";
import { HiChevronUpDown as Updwonicon } from "react-icons/hi2";
import { MdDeleteOutline as Delicon } from "react-icons/md";

const Suppliers = () => {
  return (
    <section className="supplier_page">
      <div className="supplier_card">
        <div className="add_supplier">
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
    </section>
  );
};
export default Suppliers;
