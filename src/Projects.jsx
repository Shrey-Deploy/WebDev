import React from 'react'
import projectsData from './data';

const Projects = () => {
  const  projects = projectsData;
  return (
    <div className='projects'>
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className='projects-center'>
        {projects.map((item)=>{
          const {id,url,title,image} = item;
          return <a key={id} className='project' href={url} target='_blank' rel='noreferrer'>
            <img src={image} alt={title} className='img' />
            <h5>{title}</h5>
          </a>
        })}
      </div>
    </div>
  )
}

export default Projects