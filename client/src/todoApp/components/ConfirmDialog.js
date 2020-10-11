import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function ConfirmDialog(props) {
  const handleClickDelete = () => {
    props.toggleDeletePopup();
    props.deleteTask();
  }
    confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h1>Are you sure?</h1>
              <p>You want to delete this file?</p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  handleClickDelete();
                  onClose();
                }}
              >
                Yes, Delete it!
              </button>
            </div>
          );
        }
      });
      return (
        <React.Fragment>
        </React.Fragment>
      );
}
