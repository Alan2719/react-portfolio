import React from 'react';
import Jumbotron from "../jumbotron";
import Container from "../infoContainer";
import Row from "../../components/projectsContainer";
import Image from "../../Images/Alan2.jpg";
import "../../styles/about.css";
import Footer from "../footer";

function About () {
    return(
        <>
        <Jumbotron />
        <Container>
            <Row>
                <h4>About Me</h4>
            </Row>
            <Row>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-4 picture">
                <div class="card">
                    <img src={Image} class="card-img-top" alt="..."></img>
                </div>
            </div>
            <div class="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-8 text">
                <div class="card-body">
                    <div class="text1 fade-text">
                        <p class="card-text text">
                            Full Stack Web Developer and Automotive Design Engineer educated at Tec de Monterrey. Experience
                            in mechanical design and mechanical analysis, mainly in mechanicals seals and automotive area. Working
                            with Ford Motor Company in the testing area. In charge of develop one of the Key Initiative Tools inside the company.
                            My strength in the coding area is the backend part, but I also feel comfortable working in the frontend part. 
                            One of my best abilities is the organization. This skill allows me to always finish eveyrthing that I propose with the
                            best quality possible. 

                        </p>
                    </div>
                </div>
            </div>
            </Row>
        </Container>
        <Footer />
        </>
    )
}

export default About;