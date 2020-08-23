import React from 'react';
import Container from "../container";
import Row from "../../components/projectsContainer";
import "../../styles/contact.css"

function Contact () {
    return(
        <Container>
            <Row>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="aside">
                        <ul className="contacts">
                            <li><i className="fas fa-envelope"></i><span> alan2719.ahcv@gmail.com</span></li>
                            <li><a href="https://www.linkedin.com/in/alan-vel%C3%A1zquez-mart%C3%ADnez-309769a4/" target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin"></i></a><span> Alan Velázquez Martínez</span></li>
                            <li><a href="https://github.com/Alan2719" target="_blank" rel="noreferrer noopener"><i className="fab fa-github" target="_blank"></i></a><span> Alan2719</span></li>
                            <li><a href="https://www.facebook.com/alan.velazquezmartinez" target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook-square"></i></a><span> Alan Velázquez</span></li>
                            <li><a href="https://www.instagram.com/alanvem/" target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram-square" id="ig"></i></a><span> alanvem</span></li>
                        </ul>
                    </div>
                </div>
                <div className="form col-xl-8 col-lg-8 col-md-6 col-sm-12">
                    <div className="card text-center cardbox">
                        <div className="card-header">
                            <h2>Send a message</h2>
                        </div>
                        <div className="card-body body">
                            <form className="data">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input type="text" className="form-control name" id="name exampleFormControlInput1" placeholder="Write your name"></input>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control mail" id="mail exampleFormControlInput1" placeholder="Write your email"></input>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control text" id="text exampleFormControlTextarea1" rows="3" placeholder="Leave a message"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-muted">
                            <button id="submit" type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Contact;