import './TransActionsList.css';
const TransActionList = ({trasactions,mainlist}) => {
    return (
        <div className="transaction-list">
            <h3>
               {trasactions.length !=0 ? 
                " TransActions" : 
                (mainlist.length !=0 ? "Do not Match":"Please Add Your TransAcrions")
                }

                
              
            </h3>
            <ul className="transaction-ul">
             {trasactions.map((item)=>{
                return(
                    <li key={item.id} className={`transaction-li ${item.type == "income" ? "green-li":"red-li"}`}>
                        <span>{item.title}</span>
                        <span>$ {item.amount}</span>
                    </li>
                );
             })}
            </ul>
        </div>
      );
}
 
export default TransActionList;