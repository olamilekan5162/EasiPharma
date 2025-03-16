import Button from "../button/Button";
import "./orderstock.css"
import { RiFilter3Fill as Filtericon} from "react-icons/ri";
import { FaPlus as Plusicon } from "react-icons/fa";

const OrderStock = () => {
  return (
    <section>
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
    </section>
  );
};
export default OrderStock;
