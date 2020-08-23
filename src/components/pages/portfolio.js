import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import Container from "../container";
import CardHeader from "../../components/cardHeader";
import Row from "../../components/projectsContainer";
import CardBody from "../../components/cardComponent";
import Modal from "../modal";
import Footer from "../footer";

function Portfolio () {

    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        API.getProjects()
        .then(res => {
            console.log(res)
            setProjects(res);
        });
    },[]);

    function handleBtnClick(event) {
        console.log(event.target.getAttribute("data-value"));
        const id = event.target.getAttribute("data-value");
        const oneProject = projects.filter(item => item.id == id);
        console.log(oneProject);
        setProject(oneProject);
        setShowModal(true);

    }

    function handleHideModal() {
        setShowModal(false);
    }

    console.log(projects);
    //console.log(project);

    return(
        <>
        <Container>
            <CardHeader />
            <Row>
                <CardBody
                    projects = {projects}
                    handleBtnClick = {handleBtnClick}
                />
                <Modal
                    project = {project}
                    show = {showModal}
                    onHide = {handleHideModal}
                 />
            </Row>    
        </Container>
        <Footer />
        </>
    )
}

export default Portfolio;