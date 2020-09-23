import React from "react";
import Image from "../Images/background.jpg";
import "../styles/portfolio.css";

function CardBody(props) {
    console.log(props);
    return(
        props.projects.map(project => {
            return(
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 box">
                    <div className="card">
                        <a href={project.url} target="_blank" rel="noopener noreferrer"><img src={project.image} className="card-img-top card-img-top-2 img-container" alt="..."></img></a>
                        <div className="card-body">
                            <h5 className="card-title" key={props.projects.id}>{project.projectName}</h5>
                            <button type="button" className="btn btn-primary" data-toggle="modal" onClick={props.handleBtnClick} data-value={project.id} data-target="#staticBackdrop">
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default CardBody;