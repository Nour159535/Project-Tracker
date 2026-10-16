import { useState } from "react";
import Cards from '../Cards/Cards';
import './FilteringProjects.css';

function FilteringProjects({ projectCard, setProjectCard }) {

    const [filterStatus, setFilterStatus] = useState('All');
    const [searchTerm, setSearchTerm] = useState ('');

    const filteredProjects = projectCard.filter((project) => {
        return (filterStatus === 'All' || project.state === filterStatus )
        && (project.name.toLowerCase().trim().includes(searchTerm.toLowerCase().trim()))
    });

    function searchInputCards(event) {
      setSearchTerm(event.target.value);
    }

    const totalProjects = filteredProjects.length;

    return (
        <>  
        <div className="filter-box">
            <input type="search" name="search" value={searchTerm} id="search" onChange={searchInputCards} placeholder="Search a project" />
            <div className="filter-btn">
                <div className="buttons">
                    <button className={filterStatus === 'All' ? 'active' : ''} onClick={() => setFilterStatus('All')}>All</button>
                    <button className={filterStatus === 'Completed' ? 'active' : ''} onClick={() => setFilterStatus('Completed')}>Completed</button>
                    <button className={filterStatus === 'In Progress' ? 'active' : ''} onClick={() => setFilterStatus('In Progress')}>In Progress</button>
                </div>
                <p>{totalProjects > 0 ? `${totalProjects === 1 ? 'Project' : 'Projects'} Found: ${totalProjects}` : `No projects found`}</p>
            </div>
        </div>    
            <Cards
                projectCard={projectCard}
                filteredProjects={filteredProjects}
                setProjectCard={setProjectCard}
            />
        </>
    );
}

export default FilteringProjects;