import Button from "../button/Button";
import "./inventory.css";
import {
  FaPlus as Plusicon,
  FaRegSquare as Squareicon,
  FaEdit as Editicon,
} from "react-icons/fa";
import { HiChevronUpDown as Updwonicon } from "react-icons/hi2";
import { MdDeleteOutline as Delicon } from "react-icons/md";

const Inventory = () => {
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

          <tr>
            <td>
              <Squareicon />
            </td>

            <td>Paracetamol</td>

            <td>400</td>

            <td>18/08/2025</td>

            <td>
              <select>
                <option value="available">Available</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
            </td>

            <td className="inventory_icon_cell">
              <div>
                <Editicon  className="inventory_icon"/>
                <Delicon className="inventory_icon" />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};
export default Inventory;
