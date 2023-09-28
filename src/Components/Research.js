import React,{useState} from 'react'
import "../Styles/Reasearch.css"
import {NavLink} from "react-router-dom"
import List from "./Asset.js"
import imageSrc from "../assets/3.png"
import {BsTelegram} from 'react-icons/bs';
import {AiOutlineUp} from 'react-icons/ai';
import RiskMeasures from './RiskMeasures'
import ToggleSection from "/Users/harshsahcdeva/Desktop/arrow-main 9.04.06 PM/src/Components/ToggleSection.js"


const Research = () => {
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
    <div className="h11">
      <h2>Research</h2>
      </div>
      <div className="h12">
      <h2>It drives our design. Below we link to some key papers that have helped shape our thinking.</h2>
      </div>
      <div className="image"><img src={imageSrc} alt="images"/> </div>
      </div>
      <div className="listing">
      <ToggleSection />
        </div>
    </div>
    </div>
  );
};

export default Research;