import './Cards.css';
import EditingProject from '../EditingProject/EditingProject';

function Cards({ projectCard, filteredProjects, setProjectCard}) {

    function deleteProject(projectId){
         const projectFilter =  projectCard.filter((project)=>{
            return project.id !== projectId;
          });
          setProjectCard(projectFilter);
    }
    function toggleProjectStatus(projectId){
        const updatedProject = projectCard.map((project)=>{
            if(project.id === projectId){
                return {
                    ...project,
                    state: project.state === 'Completed' ? 'In Progress' : 'Completed'
                }
            }
            return project;
        });
        setProjectCard(updatedProject)
    }

    return (
            <div className="cards-container">
                    {filteredProjects.map((project) => {
                    return (
                    <div key={project.id} className="cards-item">
                        <div className="project-status">
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="51" height="51" rx="25.5" fill="#7124DF"/>
                                <path d="M15.375 22.125H35.625M22.125 35.625V22.125M17.625 15.375H33.375C34.6176 15.375 35.625 16.3824 35.625 17.625V33.375C35.625 34.6176 34.6176 35.625 33.375 35.625H17.625C16.3824 35.625 15.375 34.6176 15.375 33.375V17.625C15.375 16.3824 16.3824 15.375 17.625 15.375Z" stroke="#F4F3FF" strokeWidth={1.5} strokeLinecap={"round"}/>
                            </svg>
                            <button className={project.state === 'In Progress' ? 'in-progress' : 'completed'} onClick={()=> toggleProjectStatus(project.id)}>{project.state}</button>
                        </div>
                        <div className="card-details">
                            <h3>{project.name}</h3>
                            <h5>{project.type}</h5>
                            <p>{project.year}</p>
                        </div>
                        <div className="toggle-delete">
                            <button className='toggle-status' onClick={() => toggleProjectStatus(project.id)}>Toggle Status</button>
                            <button className='delete' onClick={() => deleteProject(project.id)}>Delete</button>
                        </div>
                        <EditingProject projectCard={projectCard} setProjectCard={setProjectCard} project={project}/>
                    </div>
                        );
                    })}
            </div>

    );
}

export default Cards;