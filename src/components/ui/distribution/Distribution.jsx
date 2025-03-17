import { useState } from "react";
import { FaShareSquare as Distribeicon } from "react-icons/fa";
import DistributionModal from "../distributionModal/DistributionModal";
const Distribution = () => {
  const openModal = () => setIsDistributionModalOpen(true);
  const closeModal = () => setIsDistributionModalOpen(false);
  const [isDistributionModalOpen, setIsDistributionModalOpen] = useState(false);
  return (

<div>
<h1>Distribution</h1>
<div className="D_mainbar_card" onClick={openModal}>
        <span>
          <Distribeicon className="D_mainbar_icon" />
        </span>
        <p className="D_mainbar_text">Distribution Records</p>
      </div>
       {/* Render modal when isDistributionModalOpen is true */}
       {isDistributionModalOpen && (
        <DistributionModal isOpen={isDistributionModalOpen} onClose={closeModal} />
      )}
</div>
  
    )
}
export default Distribution;