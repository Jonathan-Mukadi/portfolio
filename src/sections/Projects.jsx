import React from 'react'
import SectionTitle from '../components/SectionTitle';
import { projects } from '../constants';
import ProjectCards from '../components/ProjectCards';

const Projects = () => {
  return (
  <section className='py-16' id='projects'>
    <SectionTitle title="My Projects"/>
    <div className='container mt-10'>
        
        {/* Projects */}
        <div className='space-y-6'>
            {projects.map((project, index) => (<ProjectCards project={project} key={index} index={index}/>))}
        </div>
    </div>
  </section>

  );
};

export default Projects