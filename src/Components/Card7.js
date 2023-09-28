import React from 'react'
import "../Styles/Card7.css"
import "../Styles/Card6.css"
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import Todolist from './Todolist';

const Card7 = () => {
  return (
    <div className="card7">
    <div className="amountcard">
    <div className="amount2">
        <h2>AMOUNT</h2>
        </div>
        <div className="amount3">
        <AiOutlineQuestionCircle className="iconss1" />
        </div>
    </div>
    <div className="baxing">
    <Todolist/>
    </div>
    </div>
  )
}

export default Card7;
