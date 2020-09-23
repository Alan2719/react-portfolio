import React from "react";
import { Modal, Button } from 'react-bootstrap';
import "../styles/modal.css"

function ModalProject (props) {
    console.log(props.project.map(item => item.projectName));
    
    return (
        props.project.map(project => {
            return (
                <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
      <Modal.Header closeButton className="modal-header">
        <Modal.Title id="contained-modal-title-vcenter">
          <h5 className="project-title">{project.projectName}</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="project-description">
          {project.projectDescription}
        </p>
      </Modal.Body>
      <Modal.Footer className="modal-header">
        <Button onClick={props.onHide}>Close</Button>
        <a href={project.github} target="_blank" rel="noreferrer noopener"><Button>GitHub Repo!</Button></a>
        <a href={project.url} target="_blank" rel="noreferrer noopener"><Button>Live Demo!</Button></a>
      </Modal.Footer>
    </Modal>
            )
        })
    )
}

export default ModalProject;