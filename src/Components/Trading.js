import React, { useState } from 'react';
import '../Styles/Vault.css';
import imagsrc1 from '/Users/harshsahcdeva/Desktop/arrow-main 9.04.06 PM/src/assets/29.png';
import Vaults1 from  "./Vaults1.js";
import Positions from  "./Positions.js"; // Update the import path
import { BsQuestionCircle } from 'react-icons/bs';
import Card6 from "/Users/harshsahcdeva/Desktop/arrow-main 9.04.06 PM/src/Components/Card6.js";
import Card7 from "/Users/harshsahcdeva/Desktop/arrow-main 9.04.06 PM/src/Components/Card7.js";
import { FaCubes } from 'react-icons/fa';
import Card9 from "/Users/harshsahcdeva/Desktop/arrow-main 9.04.06 PM/src/Components/Card9.js";
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const Trading = () => {
  const [isActive, setIsActive] = useState(false); // Initially set to false for "VAULTS" active state
  const [isCard7Visible, setIsCard7Visible] = useState(false); // Initially set to false for Card7 visibility

  const toggleActive = () => {
    setIsActive(!isActive); // Toggle the active state
    setIsCard7Visible(!isCard7Visible); // Toggle the visibility of Card7
  };

  return (
    <div className="container231">
      <div className="card-rowsecond1">
        <div className="cardinging1">
          <div className="image-box1">
            <img src={imagsrc1} alt="images" className="larger-image1" />
          </div>
          <div className="secondbox">
            <h2
              onClick={() => toggleActive()} // Add onClick event to toggle active state
              className={isActive ? "hover-underline-animation active" : "hover-underline-animation"}
            >
              VAULTS
            </h2>
            <h2
              onClick={() => toggleActive()} // Add onClick event to toggle active state
              className={!isActive ? "hover-underline-animation active" : "hover-underline-animation"}
            >
              POSITIONS
            </h2>
          </div>
          <div className="thirdbox">
            {isActive ? <Card6 /> : <Card6/>} {/* Render Card7 when "VAULTS" is active */}
          </div>
        </div>
        <div className="carding1">
          <div className="firstline">
            <div className="Deposit">
              <h2>DEPOSIT</h2>
            </div>
            <div className="Withdraw">
              <h2>WITHDRAW</h2>
            </div>
            {/* <div className="question">
              <AiOutlineQuestionCircle className="iconss3" />
            </div> */}
          </div>
          {isCard7Visible ? <Card7 /> : <Card9 />} 
        </div>
        {/* <Card8 /> */}
      </div>
    </div>
  );
}

export default Trading