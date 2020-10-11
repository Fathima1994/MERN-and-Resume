import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AddTodo from '../AddTodo'; 

export class Header extends Component {
    state = {
        showpopup: false
    }

    togglePopup = () => {
        this.setState({showpopup : !this.state.showpopup});
    }
    render() {
        return (
            <header>
                <div style={divStyle}>
                    <div style={headerStyle}>
                        <h1>Todo List</h1>
                        {/* <Link style={LinkStyle} to={`${this.props.match.url}/home`}>Home</Link> | <Link style={LinkStyle} to={`${this.props.match.url}/about`}>About</Link> */}
                    </div>
                    <button style={btnStyle} onClick={this.togglePopup}>+</button>
                    {this.state.showpopup ? 
                    <AddTodo AddTodo={this.props.AddTodo} togglePopup={this.togglePopup}/> : null }
                </div>
                
            </header>
        )
    }
}

const headerStyle = {
    textAlign: 'center',
    width: '75%',
}

const btnStyle = {
    border: 'none',
    cursor: 'pointer',
    float: 'right',
    width: '75%',
    fontSize: 'xx-large',
    background: '#333',
    color: 'white',
}
const divStyle = {
    background: '#333',
    color: 'white',
    padding: '10px',
    display: 'flex'
}
// const LinkStyle = {
//     color: 'white',
//     textDecoration: 'none',
// }

export default Header
