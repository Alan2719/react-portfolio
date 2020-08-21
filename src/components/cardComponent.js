import React from "react";
import Image from "../Images/planner.jpg";

function CardBody(props) {
    console.log(props.children[0]);
    return(
        props.children.map(project => {
            return(
                <div className="col-lg-4 col-6 card">
                    <img src={Image} className="card-img-top" alt="..."></img>
                    <div className="card-img-overlay">
                        <h3 className="card-title">{project.projectName}</h3>
                        <a href={project.url} className ="btn btn-primary">See Description</a>
                    </div>
                </div>
            )
        })
        
    )
}

export default CardBody;