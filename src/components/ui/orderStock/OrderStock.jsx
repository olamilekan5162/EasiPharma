import Button from "../button/Button";
import "./orderStock.css";
import { RiFilter3Fill as Filtericon } from "react-icons/ri";
import { FaPlus as Plusicon, FaRegSquare as Squareicon } from "react-icons/fa";
import { HiChevronUpDown as Updwonicon } from "react-icons/hi2";
import {useState} from 'react'
import Modal from "../Modal/StockModal"; 

const OrderStock = () => {
  
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

          <tr>
            <td>
              <Squareicon />
            </td>

            <td>Paracetamol</td>

            <td>16/03/2025</td>

            <td>10</td>

            <td>Femi Pharma</td>

            <td>
              <select>
                <option value="available">Pending</option>
                <option value="out-of-stock">Completed</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
    </section>
  );
};
export default OrderStock;
