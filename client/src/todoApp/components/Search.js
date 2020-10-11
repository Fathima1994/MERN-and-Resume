import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa';

function Search(props) {
    const [search,setSearch] = useState('');
    const [showInput,setshowInput] = useState(false);
    const changeState = (e) => {
        setSearch(e.target.value
        );
        props.filterTodo(e.target.value);
    }
    const toggleInput = () => {
        setshowInput(!showInput
            );
    }
    return (
        <div style={{display:'flex', margin:'5px'}}>
            {showInput ? 
            <input type="text" name="search" placeholder="Search" value={search} style={{flex:'10'}} onChange={changeState}/>
            : null }
            <FaSearch style={{color: 'blue'}} onClick={toggleInput}/>
        </div>
    )
    }

export default Search
