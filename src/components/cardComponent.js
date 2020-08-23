import React from "react";
import Image from "../Images/background.jpg";
import "../styles/portfolio.css";

function CardBody(props) {
    return(
        props.projects.map(project => {
            return(
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 box">
                    <div className="card">
                        <a href={project.url} target="_blank" rel="noopener noreferrer"><img src={Image} className="card-img-top img-container" alt="..."></img></a>
                        <div className="card-body">
                            <h5 className="card-title" key={props.projects.id}>{project.projectName}</h5>
                            <button type="button" class="btn btn-primary" data-toggle="modal" onClick={props.handleBtnClick} data-value={project.id} data-target="#staticBackdrop">
                                See Description
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default CardBody;