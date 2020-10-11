import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';
import MainTodo from './todoApp/components/MainTodo';
import Home from './Home/Home';
// import { v1 as uuid } from 'uuid';
// import { confirmAlert } from 'react-confirm-alert'; 
// import 'react-confirm-alert/src/react-confirm-alert.css';
import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ExpenseTracker from './expenseTrackerApp/components/ExpenseTracker';


function App() {
    return (
      <Router>
        <div className="App">
            <Route render={({ location, history }) => (
              <React.Fragment>
                  <SideNav
                      onSelect={(selected) => {
                          const to = '/' + selected;
                          if (location.pathname !== to) {
                              history.push(to);
                          }
                      }}
                  >
                      <SideNav.Toggle />
                      <SideNav.Nav defaultSelected="home">
                          <NavItem eventKey="home">
                              <NavIcon>
                                  <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                              </NavIcon>
                              <NavText>
                                  About
                              </NavText>
                          </NavItem>
                          <NavItem eventKey="mainTodo">
                              <NavIcon>
                                  <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                              </NavIcon>
                              <NavText>
                                  Todo
                              </NavText>
                          </NavItem>
                          <NavItem eventKey="expense">
                              <NavIcon>
                                  <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                              </NavIcon>
                              <NavText>
                                Expense Tracker
                              </NavText>
                          </NavItem>
                      </SideNav.Nav>
                  </SideNav>
                  <div className="container">
                      {
                       <React.Fragment>
                      <Route exact path="/" component={props => <Home />} />
                      <Route exact path="/home" component={props => <Home />} />
                      <Route path="/mainTodo" component={(props) => <MainTodo  />} /> 
                      <Route path="/expense" component={props => <ExpenseTracker />}/>
                      </React.Fragment>}
                  </div>
              </React.Fragment>
            )}
            />
        </div>
        </Router>
    );
  }

export default App;
