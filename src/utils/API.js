import Projects from "../projects.json";

export default {
    getProjects: function() {
        return new Promise(resolve => {
            resolve(Projects);
        });
    }
}