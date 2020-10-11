import React, { useState } from 'react';
import './css/intro.css';
import './css/experience.css';
import './css/education.css';
import './css/skills.css';
import './css/contact.css';
import { connect  } from 'react-redux';
import  * as actions from './homeActions/actions';
export const  Home = (props) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const submitForm = (e) => {
        e.preventDefault();
        const newItem = {
            name,
            email,
            message
          }
          props.addContact(newItem);
          setName('');
          setEmail('');
          setMessage('');
    }
    const openTab = (tabName) => {
        var i, x;
        x = document.getElementsByClassName("eduactioncontainerTab");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
      }
     const closeTab = (tabName) => {
        var i, x;
        x = document.getElementsByClassName("eduactioncontainerTab");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "block";
        }
        document.getElementById(tabName).style.display = "none";
      }
    return (
        <React.Fragment>
            <section className="introSection">
                <div className="introContainer">
                    <div className="card">
                        <img src={require("./images/fathima.png")} alt="Syeda Fathima" style={{width:'100%'}}/>
                        <h1>Syeda Fathima</h1>
                        <p className="title">Applications Developer</p>
                        <p>
                            <i className="fa fa-envelope"></i>
                            syedafathimajc@gmail.com
                        </p>
                        <a target="_blank" href="http://www.linkedin.com/in/syedafathima31"><i className="fa fa-linkedin"></i></a>&nbsp;
                        <a target="_blank" href={require("./Syeda Fathima__CV_2020.pdf")}><i className="fas fa-file-pdf"></i></a>
                    </div>
                    <div className="info">
                        <p>
                        UI Developer with 4 years of experience in designing, developing and debugging user interfaces.Implemented features that increased user satisfaction. Experience of creating both logical and innovative solution to complex web problems and interacting on a daily basis with UI designers, back-end developers and business analysts. Responsible for working on a range of projects, implementing appealing web pages, building up and enhancing integration within existing systems, for implement and maintaining best practice procedures in all areas of work and have an intense desire to learn on new technologies and user experience. Mainly worked in Javascript, jQuery, css, html. Learned new technologies such as React/Redux, Nodejs, Expressjs, Mongodb and implemented small app using these technologies.
                        <h3>
                            You can have a look at the apps
                        </h3>
                        </p>
                        <a target="_blank" href="http://localhost:3000/mainTodo" style={{color:'blue'}}>Todo App</a><br />
                        <a target="_blank" href="http://localhost:3000/expense" style={{color:'blue'}}>Expense Tracker App</a>
                    </div>
                </div>
            </section>
            <section className="experience_section">
                <div className='experienceContainer'>
                    <div className="row">
                        <div className="headingcolumn">
                            <h1>Experience</h1>
                        </div>
                        <div className="descriptioncolumn">
                            <h1>Oracle</h1>
                            <p>
                                UI Developer
                                <span>  &bull;  </span>
                                Bangalore
                                <span>  &bull;  </span>
                                July 2016 - Present
                            </p>
                            <hr></hr>
                            <p>Working on the software which provides services to project-intensive industries such as
                            engineering and construction, aerospace and defense, industrial manufacturing etc.</p>
                            <ul>
                                <li>Developed the front-end web page by using HTML5, CSS,JavaScript and jQuery</li>
                                <li>Responsible for creating the JavaScript code, for different modules.</li>
                                <li>Estimated time to develop for all approved prototypes and the implementation of
                                those prototypes using jQuery and CSS</li>
                                <li>Responsible for creating rtl language supported layout using css, js, jquery</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="education_section">
                <div className="educationContainer">
                    <h1>Education</h1>
                    <p>You can click on each to view</p>
                    <hr></hr>
                    <div className="educationrow">
                        <div className="educationcolumn" onClick={openTab.bind(this,'school')} style={{backgroundColor:'#aaa'}}>June 2009 - April 2010</div>
                        <div className="educationcolumn" onClick={openTab.bind(this,'twelve')} style={{backgroundColor:'#bbb'}}>June 2010 - May 2012</div>
                        <div className="educationcolumn" onClick={openTab.bind(this,'college')} style={{backgroundColor:'#aaa'}}>Sept 2012 - May 2016</div>
                    </div>
                    <div id="school" className="educationcontainerTab" style={{display:'none',backgroundColor:'#aaa'}}>
                        <span onClick={closeTab.bind(this,'school')} className="closebtn">x</span>
                        <h2>Rotary High School,C.N.Halli</h2>
                        <p>93.6%</p>
                    </div>
                    <div id="twelve" className="educationcontainerTab" style={{display:'none',backgroundColor:'#bbb'}}>
                        <span onClick={closeTab.bind(this,'twelve')} className="closebtn">x</span>
                        <h2>Sarvodaya PU College,Tumkur</h2>
                        <p>PCMB- 88.16%.</p>
                    </div>
                    <div id="college" className="educationcontainerTab" style={{display:'none',backgroundColor:'#aaa'}}>
                        <span onClick={closeTab.bind(this,'college')} className="closebtn">x</span>
                        <h2>Sri Jayachamarajendra College of Engineering (Autonomous), Mysore</h2>
                        <p>CGPA-8.99. Computer Science</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='skillsContainer'>
                    <h1>Skills</h1>
                    <hr></hr>
                    <div className="skillsrow">
                        <div className="skillscolumn" style={{backgroundColor:'#aaa'}}>
                            <h2>Language</h2>
                            <hr></hr>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <div className="skillscolumn" style={{backgroundColor:'#bbb'}}>
                            <h2>Framework</h2>
                            <hr></hr>
                            <ul>
                                <li>Redux</li>
                                <li>Express.js</li>
                            </ul>
                        </div>
                        <div className="skillscolumn" style={{backgroundColor:'#aaa'}}>
                            <h2>libraries/API</h2>
                            <hr></hr>
                            <ul>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>lodash</li>
                                <li>jQuery</li>
                            </ul>
                        </div>
                    </div>

                    <div className="skillsrow">
                        <div className="skillscolumn" style={{backgroundColor:'#bbb'}}>
                        <h2>Tools</h2>
                            <hr></hr>
                            <ul>
                                <li>Sublime</li>
                                <li>Visual Studio Code</li>
                            </ul>
                        </div>
                        <div className="skillscolumn" style={{backgroundColor:'#aaa'}}>
                            <h2>Platforms</h2>
                            <hr></hr>
                            <ul>
                                <li>Windows</li>
                            </ul>
                        </div>
                        <div className="skillscolumn" style={{backgroundColor:'#bbb'}}>
                            <h2>Storage</h2>
                            <hr></hr>
                            <ul>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contactSection">
            <div style={{textAlign:'center'}}>
                <h2>Contact</h2>
                <p>Have a question or want to work together?</p>
                <div class="row">
                    <div class="column">
                        <form onSubmit={submitForm}>
                            <input placeholder="Enter Name" className="contact" type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" required=""/>
                            <input placeholder="Enter email" className="contact" type="email"value={email} onChange={(e) => setEmail(e.target.value)} name="email" required=""/>
                            <textarea placeholder="Your Message" type="text" className="contact" value={message} onChange={(e) => setMessage(e.target.value)}  name="message"/>
                            <div id="success">
                            <div style={{display:'none', color: 'red', fontSize: '30px'}}>
                                Your message was sent successfully. Thanks!
                            </div>
                            </div>
                            <input class="button" type="submit" id="submit" value="SUBMIT"/>
                        </form>
                        </div>
                    </div>
            </div>
            </section>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    contact: state.contact.items,
});

export default connect(mapStateToProps,  actions )(Home);
