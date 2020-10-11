import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ConfirmDialog from './ConfirmDialog';

export function TodoItem(props) {
    const [togglePopup,settogglePopup] = useState(false);
    const toggleDeletePopup = () => {
        settogglePopup(!togglePopup);
    }
    const getStyle = () => {
        // if(this.props.todo.completed) {
        //     return {
        //         textDecoration : 'line-through'
        //     }
        // } else {
        //     return {
        //         textDecoration : 'none'
        //     }
        // }
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration : props.todo.completed ?  'line-through' : 'none'
        }
    }
        const { _id, title, completed} = props.todo;
        const checked = completed ? 'checked' : '';
        return (
            <div style={getStyle()}>
                <p>
                    <input type="checkbox" onChange={props.markComplete.bind(this,_id)} checked={checked} />{' '}
                    { title }
                    <button style={btnStyle} onClick={toggleDeletePopup}>X</button>
                    {togglePopup ? <ConfirmDialog deleteTask={props.deleteTask.bind(this,_id)} toggleDeletePopup={toggleDeletePopup} />: null}
                </p>
            </div>
        )
    }

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
