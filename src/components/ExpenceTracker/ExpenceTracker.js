import {useEffect, useState} from 'react';
import './ExpenceTracker.css';
import OverViewComponent from '../OverViewComponent/OverViewComponent';
import Search from '../SearchComponent/SearchComponent';
const ExpenceTracker = ()=>{

const[income,setIncome] = useState(0);
const[expence,setExpence] = useState(0);
const[trasaction,setTransAction] = useState([]);

const addtransactionHandler = (formValue)=>{
 setTransAction([...trasaction,{id:Date.now(),...formValue}]);

}

useEffect(()=>{
let exp = 0;
let inc = 0;
trasaction.forEach((t)=>{
  t.type === "expence" ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount))
});

setExpence(exp);
setIncome(inc);

},[trasaction]);

  return(
      <div className='expencetracker-box'>
          <OverViewComponent income={income} expence={expence} addtransaction = {addtransactionHandler} /> 
          <Search trasactions = {trasaction} setTransActions = {setTransAction} /> 
          
      </div>
  );
}

export default ExpenceTracker;