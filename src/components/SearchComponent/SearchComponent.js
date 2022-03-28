import { useEffect, useState } from 'react';
import TransActionList from '../TransActionList/TransActionList';
import './SearchComponent.css';
const Search = (props) => {

    const [inputValue,setInputValue] = useState("");
    const [filteredTnx,setFilteredTnx] = useState(props.trasactions);

    const changeHandler = (e)=>{
        setInputValue(e.target.value);
        filterHandler(e.target.value);
    }

    const filterHandler = (search)=>{
        if(!search || search ===""){
            setFilteredTnx(props.trasactions);
            return;
        }

        const filtered = props.trasactions.filter((t)=>{
           return  t.title.toLowerCase().includes(search.toLowerCase());
        });

        setFilteredTnx(filtered);
    }

    useEffect(()=>{
        filterHandler(inputValue);
    },[props.trasactions]);
        
    return ( 
        <>
        <div className="search-container">
            <input
              
              className="search-input" 
              id="Title"
              placeholder="search..."
              type='text' name="search"
              onChange={changeHandler}
            />
        </div>
        <TransActionList trasactions={filteredTnx} mainlist={props.trasactions} /> 
        </>
     );
}
 
export default Search;