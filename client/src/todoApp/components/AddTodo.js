import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function AddTodo(props) {
    const [title,setTitle] = useState('');
    const changeState = (e) => {
        setTitle( e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        props.AddTodo(title);
        setTitle({title: ''}); 
        props.togglePopup();
    }
        return (
            <div style={divStyle}>
                <form onSubmit={onSubmit} style={formStyle}>
                    <input type="text" name="title" placeholder="AddTodo" style={{padding: '5px', marginBottom: '15px', height: '55px' }} value={title} onChange={changeState}/>
                    <input type="submit" value="Submit" className="btn" style={{height: '30px'}}/>
                </form>
            </div>
        )
    }

AddTodo.propTypes = {
    AddTodo: PropTypes.func.isRequired
  }

const divStyle = {
    position: 'absolute',
    left: '50%',
    right: '5%',
    top: '15%',
    bottom: '60%',
    margin: 'auto',
    borderRadius: '20px',
    background: 'grey'
}
const formStyle = {
    display: 'grid',
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
}

export default AddTodo
