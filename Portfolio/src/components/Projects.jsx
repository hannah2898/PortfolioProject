import { useState, useEffect } from "react";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const apiRequest = async () => {
      let response = await fetch(
        "http://localhost:8888/",
        { method: "GET" }
      );
      let data = await response.json();
      console.log("Data recieved ", data);
      setProjects(data)
    }
    apiRequest();
  }, []);
return(
    <>
        <section id="Latest-Works">
        <h2 className="latest-heading">My Projects</h2>
        <p className="detail">Here are some of my latest projects.</p>
        <div className="projects">
      {projects.map((p, index) => (
        <div key={index}>
           
            <div className="project">
                <a href={`${p.project_link}`}><h3 className="project-heading">{p.project_name}</h3></a>
                <p className="project-description">{p.project_description}</p>
                <div className="image-container">
                 <img src={`${p.imgURL}`} alt="Images"/>
                </div>
                
                <p  className="project-tech">Languages: {p.tech_stack.join(", ")}</p>
            </div>
            </div>
       
      ))}
       </div>
    </section>

    </>
)

}