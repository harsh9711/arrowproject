import React,{useState} from 'react'
import "../Styles/Reasearch.css"
import {NavLink} from "react-router-dom"
import imageSrc1 from "../assets/4.png"
import ToggleSection2 from "/Users/harshsahcdeva/Desktop/arrow-main 9.04.06 PM/src/Components/ToggleSection2.js"


const Recruitment = () => {
    const [assetStatus, setAssetStatus] = useState(true);
    const [riskStatus, setRiskStatus] = useState(true);
  
    const toggleAssetStatus = () => {
      setAssetStatus(!assetStatus);
    };
  
    const toggleRiskStatus = () => {
      setRiskStatus(!riskStatus);
    }; 
     return (
    <div className="page-container">
    <div className="About">
    <div className="heading">
    <div className="h13">
      <h2>Recruitment</h2>
      </div>
      <div className="h15">
      <h2>Talent Acquisition and Development.</h2>
      </div>
      <div className="image"><img src={imageSrc1} alt="images"/> </div>
      </div>np
      <div className="listing">
      <ToggleSection2/>
        </div>
    </div>
    <div className="technology1">
    <h2>REMOTE / ENGINEERING / FULL-TIME</h2>
<p>If interested, please apply through <a href="https://wellfound.com/company/arrow-markets" className="colors" target="_blank" rel="noreferrer"><b>AngelList</b></a> send a short introduction letter and a resume to <NavLink className="colors">recruitment@arrow.markets</NavLink>.

Arrow Markets welcomes all qualified persons to apply regardless of race, religion, gender, gender identity or expression, sexual orientation, national origin, disability, age, or veteran status. Compensation will be competitive and commensurate with experience.

.</p>

  </div>
    </div>
    
  );
};

export default Recruitment;