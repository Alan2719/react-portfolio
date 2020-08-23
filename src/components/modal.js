import React from "react";
import { Modal, Button } from 'react-bootstrap';

function ModalProject (props) {
    console.log(props.project);
    return (
        props.project.map(project => {
            return (
                <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {project.projectName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {project.projectDescription}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <a href={project.url} target="_blank" rel="noreferrer noopener"><Button>Go!</Button></a>
      </Modal.Footer>
    </Modal>
            )
        })
    )
}

export default ModalProject;