import { useState } from "react";
import './TransActionsFormComponent.css';
const TransActionsFormComponent = ({addtransaction,setIsShowForm}) => {
    
    const [formValue,setFormValue] = useState({title:"",amount:null,type:"income"});

    const changeHandler = (e)=>{
        setFormValue({...formValue,[e.target.name]:e.target.value});
        
    }

    const submitHandler = (e)=> {
        e.preventDefault();
        addtransaction(formValue);
        setFormValue({title:"",amount:0,type:""});
        setIsShowForm(false);
    }

    return ( 
       <>
        <form className="form" onSubmit={submitHandler}>
            <div className="form-control">
            <input required className="field" id="Title" placeholder="Description" type='text' name="title" onChange={changeHandler} />
            </div>
           <div className="form-control">
            <input required className="field" placeholder="Amount" id="Amount" type='number' name="amount"  onChange={changeHandler}/>
           </div>
           <div className="form-control">
           <label htmlFor="Income">Income</label>
            <input id="Income" type='radio' name="type" value='income' checked={formValue.type === "income"} onChange={changeHandler} />
           </div>
           <div className="form-control">
           <label htmlFor="Expence">Expence</label>
            <input id="Expence" type='radio' name="type" value='expence' checked={formValue.type === "expence"} onChange={changeHandler}/>
           </div>
            <button className="btn-primery btn" type="submit">addItem</button>
        </form>
       </>
     );
}
 
export default TransActionsFormComponent;