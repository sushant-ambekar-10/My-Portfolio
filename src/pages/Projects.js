import React from 'react';
import projectsData from "../projects.json";
import { Link} from 'react-router-dom';

export default function Dashboard() {

  return (
    
    <div className='my-10 container  border-solid rounded-2xl  justify-items-center bg-gray-800 p-2' >

        <h2 className='font-hammersmith text-xl bg-gray-800 w-full text-center text-white rounded-t-xl p-5 '>
          My Projects
        </h2>
        {projectsData.projects.map((project, index) => (
            <div key={index} className='view w-full rounded-xl p-5 font-hammersmith m-2 bg-gray-200 bg-opacity-90'>
          
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-sm text-gray-600">{project.duration}</p>
            <p className="mt-2">{project.description}</p>
            <div className="mt-2">
              <strong>Skills:</strong>{" "}
              <ul className="list-disc list-inside">
                {project.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
            <hr className="my-4 border-gray-900" />
            <div className='flex'>
              <Link className='cursor-pointer bg-slate-800 text-white p-3 rounded hover:scale-110 hover:opacity-90' target="_blank" to={project.github} >GitHub</Link>
              {(project.website=="true")?<Link className='mx-5 text-center bg-black hover:scale-110 hover:opacity-90 text-yellow-50 rounded-md w-20 items-center justify-items-center pt-3' to={project.link}>Live</Link>:<></>}  
            </div>
            </div>
        ))}
        <h2 className='font-hammersmith text-xl bg-gray-800 w-full text-center text-white rounded-b-xl p-5 '>
          To be continued ...
        </h2>
        

    </div>
  )
}
