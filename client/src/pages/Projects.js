// import React from 'react';
// import projectsData from "../projects.json";
// import { Link} from 'react-router-dom';
// import { useState, useEffect } from "react";

// export default function Dashboard() {

//   return (
    
//     <div className='my-10 container  border-solid rounded-2xl  justify-items-center bg-gray-800 p-2' >

//         <h2 className='font-hammersmith text-xl bg-gray-800 w-full text-center text-white rounded-t-xl p-5 '>
//           My Projects
//         </h2>
//         {projectsData.projects.map((project, index) => (
//             <div key={index} className='view w-full rounded-xl p-5 font-hammersmith m-2 bg-gray-200 bg-opacity-90'>
          
//             <h2 className="text-xl font-semibold">{project.name}</h2>
//             <p className="text-sm text-gray-600">{project.duration}</p>
//             <p className="mt-2">{project.description}</p>
//             <div className="mt-2">
//               <strong>Skills:</strong>{" "}
//               <ul className="list-disc list-inside">
//                 {project.skills.map((skill, idx) => (
//                   <li key={idx}>{skill}</li>
//                 ))}
//               </ul>
//             </div>
//             <hr className="my-4 border-gray-900" />
//             <div className='flex'>
//               <Link className='cursor-pointer bg-slate-800 text-white p-3 rounded hover:scale-110 hover:opacity-90' target="_blank" to={project.github} >GitHub</Link>
//               {(project.website=="true")?<Link className='mx-5 text-center bg-black hover:scale-110 hover:opacity-90 text-yellow-50 rounded-md w-20 items-center justify-items-center pt-3' to={project.link}>Live</Link>:<></>}  
//             </div>
//             </div>
//         ))}
//         <h2 className='font-hammersmith text-xl bg-gray-800 w-full text-center text-white rounded-b-xl p-5 '>
//           To be continued ...
//         </h2>
        

//     </div>
//   )
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [projectsData, setProjectsData] = useState([]); // Store projects array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")  // Your API endpoint here
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then((data) => {
        setProjectsData(data); // Save fetched projects array here
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading projects...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="my-10 container border-solid rounded-2xl justify-items-center bg-gray-800 p-2">
      <h2 className="font-hammersmith text-xl bg-gray-800 w-full text-center text-white rounded-t-xl p-5">
        My Projects
      </h2>
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="view w-full rounded-xl p-5 font-hammersmith m-2 bg-gray-200 bg-opacity-90"
        >
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
          <div className="flex">
            <Link
              className="cursor-pointer bg-slate-800 text-white p-3 rounded hover:scale-110 hover:opacity-90"
              target="_blank"
              to={project.github}
            >
              GitHub
            </Link>
            {project.website === "true" ? (
              <Link
                className="mx-5 text-center bg-black hover:scale-110 hover:opacity-90 text-yellow-50 rounded-md w-20 items-center justify-items-center pt-3"
                to={project.link}
              >
                Live
              </Link>
            ) : null}
          </div>
        </div>
      ))}
      <h2 className="font-hammersmith text-xl bg-gray-800 w-full text-center text-white rounded-b-xl p-5">
        To be continued ...
      </h2>
    </div>
  );
}
