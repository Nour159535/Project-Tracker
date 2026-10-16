import { useEffect, useState } from 'react';
import AddProjectForm from './components/AddProjectForm/AddProjectForm';
import './App.css'
import FilteringProjects from './components/FilteringProjects/FilteringProjects';
import Header from './components/home/Header';

function App() {
    const initialProjects = [
        {
            name: 'Portfolio Website',
            year: 2026,
            type: 'Frontend',
            state: 'In Progress',
            id: 1
        }, {
            name: 'WordPress Website',
            year: 2026,
            type: 'WordPress',
            state: 'Completed',
            id: 2
        }, {
            name: '3D Island',
            year: 2026,
            type: 'Three.js',
            state: 'In Progress',
            id: 3
        }
    ];

      const [projectCard, setProjectCard] = useState(()=>{
      const savedProjects = localStorage.getItem('Projects');

      if(savedProjects) {
        return JSON.parse(savedProjects);
      }

      return initialProjects;
    });
    
    useEffect(()=>{
      localStorage.setItem('Projects', JSON.stringify(projectCard));
    }, [projectCard]);

  return (
    <>
      <Header />
      <AddProjectForm projectCard={projectCard} setProjectCard={setProjectCard}/>
      <FilteringProjects projectCard={projectCard} setProjectCard={setProjectCard}/>
    </>
  )
}

export default App
