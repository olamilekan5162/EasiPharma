import Button from "../button/Button";
import "./orderstock.css";
import { RiFilter3Fill as Filtericon } from "react-icons/ri";
import { FaPlus as Plusicon, FaRegSquare as Squareicon } from "react-icons/fa";
import { HiChevronUpDown as Updwonicon } from "react-icons/hi2";

const OrderStock = () => {
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
              <Plusicon className="orderstock_btn_icon" />
              <p>Add Stock</p>
            </Button>
          </div>
        </div>
      </div>

      <div className="orderstock_details">
        <table className="orderstock_table">
          <tr>
            <th>
              <Squareicon />
            </th>

            <th>Order No.</th>

            <th>Created</th>

            <th>From Supplier</th>

            <th>nil</th>
          </tr>

          <tr>
            <td>
              <Squareicon />
            </td>

            <td>No.001</td>

            <td>date</td>

            <td>Femi Pharma</td>

            <td>nil</td>
          </tr>

          <tr>
            <td>
              <Squareicon />
            </td>

            <td>No.001</td>

            <td>date</td>

            <td>Femi Pharma</td>

            <td>nil</td>
          </tr>

          <tr>
            <td>
              <Squareicon />
            </td>

            <td>No.001</td>

            <td>date</td>

            <td>Femi Pharma</td>

            <td>nil</td>
          </tr>

          <tr>
            <td>
              <Squareicon />
            </td>

            <td>No.001</td>

            <td>date</td>

            <td>Femi Pharma</td>

            <td>nil</td>
          </tr>
        </table>
      </div>
    </section>
  );
};
export default OrderStock;
