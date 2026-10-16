import { useState } from "react";
import './AddProjectForm.css';

function AddProjectForm({ projectCard, setProjectCard }) {
    const [projectName, setProjectName] = useState('');
    const [projectYear, setProjectYear] = useState('');
    const [projectType, setProjectType] = useState('');
    const [projectStatus, setProjectStatus] = useState('In Progress');
    const [error, setError] = useState({});

    function changeName(event) {
        setProjectName(event.target.value)
    }
    function changeYear(event) {
        setProjectYear(event.target.value)
    }
    function changeType(event) {
        setProjectType(event.target.value)
    }
    function changeStatus(event) {
        setProjectStatus(event.target.value)
    }

    function addProject() {
        const newErrors = {}
        if (projectName.trim() === '') {
            newErrors.projectName = 'Please enter a project name.';
        }
        else if (projectCard.some((project) =>
            project.name.toLowerCase().trim() === projectName.toLowerCase().trim()
        )) {
            newErrors.projectName = 'This project already exists.';
        }

        if (projectType.trim() === '') {
            newErrors.projectType = 'Please select a project type.';
        }

        if (projectYear.trim() === '' ||
            !Number.isInteger(Number(projectYear)) ||
            Number(projectYear) <= 0) {
            newErrors.projectYear = 'Please enter a valid positive year.';
        }
        setError(newErrors);

        if (Object.keys(newErrors).length > 0) {

            return;

        } else {
            setProjectCard([...projectCard, {
                name: projectName,
                year: Number(projectYear),
                type: projectType,
                state: projectStatus,
                id: crypto.randomUUID()
            }]);
            setProjectName('');
            setProjectYear('');
            setProjectType('');
            setProjectStatus('In Progress');
        }

    }
    return (
    <div className="project-form">
        <div className="project-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99969 12.0008H16.0003M12 8.00048V16.0011M22.0008 12.0008C22.0008 17.5241 17.5233 22.0016 12 22.0016C6.47672 22.0016 1.99921 17.5241 1.99921 12.0008C1.99921 6.47751 6.47672 2 12 2C17.5233 2 22.0008 6.47751 22.0008 12.0008Z" stroke="#9986FF" strokeWidth={1.5} strokeLinecap={"round"}/>
            </svg>
            <h4>Add New Project</h4>
        </div>
        <div className="add-project">
            <div className="name">
                <input className="project-name" type="text" value={projectName} onChange={changeName} name='project-name' placeholder='Add project Name' />
                {error.projectName && (
                <p className="error-message-name" role="alert">
                    {error.projectName}
                </p>
            )}
            </div>
            <div className="year">
                <input className="project-year" maxLength={4} type="text" inputMode='numeric' value={projectYear} onChange={changeYear} name="project-year" placeholder='Project Year' />
                {error.projectYear && (
                <p className="error-message-year" role="alert">
                    {error.projectYear}
                </p>
            )}
            </div>
            <div className="type">
                <input className="project-type" type="text" value={projectType} onChange={changeType} name='project-type' placeholder='Project Type' />
                {error.projectType && (
                <p className="error-message-type" role="alert">
                    {error.projectType}
                </p>
            )}
            </div>
            <div className="btn-radio">
                <p>Choose the project status:</p>
                <input type="radio" name="choice" id="in-progress" checked={projectStatus === 'In Progress'} value="In Progress" onChange={changeStatus} />
                <label htmlFor="in-progress">In Progress</label>
                <input type="radio" name="choice" id="completed" checked={projectStatus === 'Completed'} value="Completed" onChange={changeStatus} />
                <label htmlFor="completed">Completed</label>
            </div>
            <button id='add' onClick={addProject}>Add Project</button>
        </div>
    </div>
    );
}

export default AddProjectForm;