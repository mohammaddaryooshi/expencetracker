import { useState } from 'react';
import TransActionsFormComponent from '../TransActionsFormComponent/TransActionsFormComponent';
import './OverViewComponent.css';
const OverViewComponent = ({income,expence,addtransaction}) => {

    const[isShow,setIsShow] = useState(false);
    return (  
       <div className='overview-contaioner'>
           <div className='addbox'>
              <div className='addboxtop'>
              <p className='overviewtitel'>Balance : {income-expence}</p>
               <button className={`btn ${isShow === true ? "red-btn":"green-btn"}`} onClick={()=>setIsShow(!isShow)}>{!isShow ? "addTransaction" : "cancel"}</button>
              </div>
              {isShow &&
              <div className='addboxbottom'>
               <TransActionsFormComponent setIsShowForm = {setIsShow} addtransaction = {addtransaction}  /> 
              </div>
              }
           </div>


           <div className='trackerbox'>
               <div className='filedbox'>
                   <span className='overviewtitel' >Income : </span>
                   <span className='incomepriceprice overviewtitel'>${income}</span>
               </div>
               <div className='filedbox'>
               <span className='overviewtitel'>Expence : </span>
                   <span className='overviewtitel expenceprice'>${expence}</span>
               </div>
           </div>
       </div>
    );
}
 
export default OverViewComponent;