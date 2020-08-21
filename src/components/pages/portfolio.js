import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import Container from "../container";
import CardHeader from "../../components/cardHeader";
import Row from "../../components/projectsContainer";
import CardBody from "../../components/cardComponent";

function Portfolio () {

    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState([]);

    useEffect(() => {
        API.getProjects()
        .then(res => {
            console.log(res)
            setProjects(res);
            setProject(res[0]);

        });
    },[]);

    //console.log(projects);
    //console.log(project);

    return(
        <>
        <Container>
            <CardHeader />
            <Row>
                <CardBody>
                    {projects}
                </CardBody>
            </Row>    
        </Container>
        </>
    )
}

export default Portfolio;