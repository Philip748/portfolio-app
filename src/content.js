import React from "react";
import './content.css';
import SubTitle from './subTitle.js';
import Project from './Project.js';
import sudokuImg from "./images/SudokuScreenShot.png"
import RBDCImg from "./images/RBDCScreenShot2.png"
import MGRSImg from "./images/MGRSScreenShot.png"

function content() {
    return(
        <div className="contentDiv">
            <div id="aboutMeDiv">
                <SubTitle text={"About me"}/>
                <p className="textP">My name is Philip, I am a front-end web developer currently located in Glasgow.</p>

                <p className="textP">In 2023 I graduated the University of Glasgow with a BSc degree in computing science with a Specialism in Human Computer Interaction.</p>
            
                <p className="textP">For more details see my CV below.</p>

                <form action='https://www.philipcoffey.co.uk/CV.pdf' target="_blank">
                    <input id="CVInput" type="submit" value="View my CV" />
                </form>
            </div>

            <div id="projectsDiv">
                <SubTitle text={"Projects"}/>
                <Project title={"Military Grid Reference System"} image={MGRSImg} link={"https://www.youtube.com/watch?v=xKLrNE7hxhU&ab_channel=PhilipCoffey"} text={"This Military Grid Reference System comes from a third year project where me and three other students worked with a customer in an agile team setting. Our customer was aerospace company Thales. This project taught me a great deal on working effectively within a team. My main contributions to this app where implementing the 'Shape drawing', the 'map overlays' and acting as 'chair' for out customer meetings."}/>
                <Project title={"Resolvable Block design Constructor"} image={RBDCImg} link={"https://resolvable-bd-constructor.herokuapp.com/"} text={"This application was made as part of my forth year individual project. While the most significant challenge of this project was understanding the relevant math, building the app still required me to improve my development which I think is evident when comparing with my MGRS web application. This application was also my first major project built with django and my first time hosting a project online."}/>
                <Project title={"Sudoku React App"} image={sudokuImg} link={"https://sudoku-react-application-95df4e0d2f6d.herokuapp.com/"} text={"I made this sudoku web app for the purpose of teaching myself how to use react. Throughout the development of this project I learned a lot about making a flexible front end which can maintain it's layout throughout different devices and screen sizes. I refactored the aesthetic of this application multiple times as I learned about making a consistent theme by utilizing complementary colours."}/>
            </div>

            <div id="contactMeDiv">
                <SubTitle text={"Contact me"}/>

                <div className="container">
                    <form target="_blank" action="https://formsubmit.co/philip.coffey.2000@icloud.com" method="POST">
                        <div className="form-group">
                            <div id="topRowDiv" className="form-row">
                                <div className="col">
                                    <input className="contactInput" id="nameInput" type="text" name="name" placeholder="Full Name" required/>
                                </div>
                                <div className="col">
                                    <input className="contactInput" id="emailInput" type="email" name="email" placeholder="Email Address" required/>
                                </div>
                            </div>
                        </div>
                        <div id="otherRowDiv" className="form-group">
                            <textarea id="messageInput" placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
                        </div>
                        <button id="sendEmailButton" type="submit" className="btn btn-lg btn-dark btn-block">Send Email</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default content;