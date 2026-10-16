import { useEffect, useState } from "react";
import './EditingProject.css';

function EditingProject({ projectCard, setProjectCard, project }) {
    const [editingProjectId, setEditingProjectId] = useState(null);
    const [editingName, setEditingName] = useState('');
    const [editingYear, setEditingYear] = useState('');
    const [editingType, setEditingType] = useState('');
    const [error, setError] = useState({});

    function startEditingName(event) {
        setEditingName(event.target.value);
    }
    function startEditingYear(event) {
        setEditingYear(event.target.value);
    }
    function startEditingType(event) {
        setEditingType(event.target.value);
    }
    function startEditing(projectId) {
        const findProject = projectCard.find((project) => {
            return project.id === projectId
        });
        setEditingProjectId(findProject.id)
        setEditingName(findProject.name);
        setEditingYear(String(findProject.year));
        setEditingType(findProject.type);
        setError({});
    }
    function editProject() {
        const newError = {};
        if (editingName.trim() === '') {
            newError.editingName = 'Please enter a project name.'
        }
        else if (projectCard.some((project) => {
            return project.name.toLowerCase().trim() === editingName.toLowerCase().trim() && project.id !== editingProjectId
        })) {
            newError.editingName = 'This project already exists.'

        } if (editingType.trim() === '') {
            newError.editingType = 'Please select a project type.'
        }

        if (editingYear.trim() === '' ||
            !Number.isInteger(Number(editingYear)) ||
            Number(editingYear) <= 0) {
            newError.editingYear = 'Please enter a valid positive year.'
        }
        setError(newError);

        if (Object.keys(newError).length > 0) {
            return;
        }
        const editingProjectFrom = projectCard.map((project) => {
            if (editingProjectId === project.id) {
                return {
                    ...project,
                    name: editingName,
                    year: Number(editingYear),
                    type: editingType
                }
            }
            return project
        });
        setProjectCard(editingProjectFrom);
        setEditingProjectId(null);
        setError({});
    }

    function closeEditForm() {
        setEditingProjectId(null);
        setEditingName('');
        setEditingYear('');
        setEditingType('');
        setError({});
    }
    useEffect(() => {
        if (editingProjectId === null) return;

        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                setEditingProjectId(null);
                setEditingName('');
                setEditingYear('');
                setEditingType('');
                setError({});
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [editingProjectId]);

    function handleOverlayClick(event) {
        if(event.target === event.currentTarget){
            closeEditForm();
        }
    }
    return (
        <>
            <button className="edit-btn" onClick={() => startEditing(project.id)}>{editingProjectId === project.id ? 'Editing this project' : 'Edit Project'}</button>
            {editingProjectId === project.id &&
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="editing-container" role="dialog" aria-modal="true" aria-labelledby="edit-title">
                        <div className="text-cancel">
                            <h2 id="edit-title">Edit Project</h2>
                            <button className="close-edit" type="button" onClick={closeEditForm}>Cancel</button>
                        </div>
                        <div className="edit-project">
                            <div className="name">
                                <input className="project-name" type="text" value={editingName} onChange={startEditingName} name='project-name' placeholder='Edit project Name' />
                                {error.editingName && (
                                <p className="error-message-name" role="alert">
                                    {error.editingName}
                                </p>
                            )}
                            </div>
                            <div className="year">
                                <input className="project-year" maxLength={4} type="text" inputMode='numeric' value={editingYear} onChange={startEditingYear} name="project-year" placeholder='Edit Project Year' />
                                {error.editingYear && (
                                <p className="error-message-year" role="alert">
                                    {error.editingYear}
                                </p>
                            )}
                            </div>
                            <div className="type">
                                <input className="project-type" type="text" value={editingType} onChange={startEditingType} name='project-type' placeholder='Edit Project Type' />
                                {error.editingType && (
                                <p className="error-message" role="alert">
                                    {error.editingType}
                                </p>
                            )}
                            </div>
                            <button id='save' onClick={editProject}>Save</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default EditingProject;