/*import React, { useState,createContext, useEffect } from "react";
import API from "../utils/API";

const ProjectsContext = createContext({
  projectName: "",
  image: ""
});

export const ProjectContext = createContext();

export const projectProvider = ({children}) => {       //todo lo que esté dentro de este elemento
  const [projectState, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const projects = API.getProjects();
      setProjects(projects)
    }
      getProjects();
  },[]);

  return (
    <ProjectContext.Provider value={projectProvider}>
        {children}
    </ProjectContext.Provider>
  )
} 

export default { projectProvider, createContext };*/

/*---------------------------------------------------------*/

import React from "react";

const ProjectsContext = React.createContext({
  projectName: "",
  image: ""
});

export default ProjectsContext