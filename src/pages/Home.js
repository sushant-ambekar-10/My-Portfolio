// import Header from "../pages/Header";
// import AnimatedHeader from "./AnimatedHeader";
// import React, { useEffect, useState } from "react";
// import Footer from "./Footer";
import { Link } from "react-router-dom";
import insta from "../img/image.png";
import profile from "../img/emailp.jpg";
import personal from "../img/personal.png";
import education from "../img/education.png";
import skills from "../img/skills.png";
import certificate from "../img/certificate.png";
import projectsData from "../projects.json";
import achievement from "../img/achievement.png";

export default function Home() {

  

  return (
    <div className="p-5 ">
      
      <div className='my-10 container  border-solid rounded-2xl  justify-items-center bg-gray-800 p-2' >

        <h2 className='font-hammersmith text-xl bg-zinc-800 w-full text-center text-white rounded-t-xl p-5 '>
          My Projects
        </h2>
        {projectsData.projects.map((project, index) => (
      
            <div key={index} className={`${index<3?" view w-full rounded-xl p-5 font-hammersmith m-2 bg-gray-200 bg-opacity-90":""}`}>
            
            {index<3 && <div>
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-sm text-gray-600">{project.duration}</p>
            <p className="mt-2">{project.description}</p>
           
            <hr className="my-4 border-gray-900" />
            <div className='flex'>
              <Link to="/projects" className='cursor-pointer bg-zinc-800 text-white p-3 px-5 rounded hover:scale-110 hover:opacity-90'>View</Link>
              </div>
            </div>}
            </div>
        ))}
        <h2 className='cursor-pointer p-2 font-hammersmith text-xl bg-zinc-800 w-full text-center text-white rounded-b-xl p-5 '>
          <Link to="/projects"><p className="hover:scale-110">View More</p></Link>
        </h2>
        

    </div>


      <div className=" view m-5 bg-zinc-800 bg-opacity-85 rounded-xl ">
        <h1 className="p-2 rounded-t-lg font-hammersmith text-center text-lg shadow-xl bg-zinc-500 text-zinc-200">
          Me-taData{" "}
        </h1>

        <div className="md:flex p-5 justify-items-center justify-between">
          <div className="md:w-1/5 mb-2 mx-2 bg-white bg-opacity-80 justify-items-center px-5 py-10 rounded-lg hover:scale-105">
            <img alt=''
              src={[personal]}
              className="w-1/2 rounded-full shadow-sm hover:shadow-xl"
            />
            <h2 className="mt-4 text-lg font-semibold text-gray-700">
              Personal
            </h2>
            <div className="w-full h-0.5 bg-gray-500 my-3"></div>
            <Link to="/metadata">
              <p className="text-sm p-2  w-fit rounded-md bg-zinc-400 font-semibold hover:scale-110">
                Me-taData
              </p>
            </Link>
          </div>
          <div className="md:w-1/5 mb-2 mx-2 bg-white bg-opacity-80 justify-items-center px-5 py-10 rounded-lg hover:scale-105">
            <img alt=''
              src={education}
              className="w-1/2 rounded-full shadow-sm hover:shadow-xl"
            />
            <h2 className="mt-4 text-lg font-semibold text-gray-700">
              Qualifications
            </h2>
            <div className="w-full h-0.5 bg-gray-500 my-3"></div>
            <Link to="/metadata">
              <p className="text-sm p-2  w-fit rounded-md bg-zinc-400 font-semibold hover:scale-110">
                Me-taData
              </p>
            </Link>
          </div>
          <div className="md:w-1/5 mb-2 mx-2 bg-white bg-opacity-80 justify-items-center px-5 py-10 rounded-lg hover:scale-105">
            <img alt=''
              src={skills}
              className="w-1/2 rounded-full shadow-sm hover:shadow-xl"
            />
            <h2 className="mt-4 text-lg font-semibold text-gray-700">Skills</h2>
            <div className="w-full h-0.5 bg-gray-500 my-3"></div>
            <Link to="/metadata">
              <p className="text-sm p-2  w-fit rounded-md bg-zinc-400 font-semibold hover:scale-110">
                Me-taData
              </p>
            </Link>
          </div>
          <div className="md:w-1/5 mb-2 mx-2 bg-white bg-opacity-80 justify-items-center px-5 py-10 rounded-lg hover:scale-105">
            <img alt=''
              src={certificate}
              className="w-1/2 rounded-full shadow-sm hover:shadow-xl"
            />
            <h2 className="mt-4 text-lg font-semibold text-gray-700">
              Certifications
            </h2>
            <div className="w-full h-0.5 bg-gray-500 my-3"></div>
            <Link to="/metadata">
              <p className="text-sm p-2  w-fit rounded-md bg-zinc-400 font-semibold hover:scale-110">
                Me-taData
              </p>
            </Link>
          </div>
          <div className="md:w-1/5 mb-2 mx-2 bg-white bg-opacity-80 justify-items-center px-5 py-10 rounded-lg hover:scale-105">
            <img alt=''
              src={achievement}
              className="w-1/2 rounded-full shadow-sm hover:shadow-xl"
            />
            <h2 className="mt-4 text-lg font-semibold text-gray-700">
              Achievement
            </h2>
            <div className="w-full h-0.5 bg-gray-500 my-3"></div>
            <Link to="/metadata">
              <p className="text-sm p-2  w-fit rounded-md bg-zinc-400 font-semibold hover:scale-110">
                Me-taData
              </p>
            </Link>
          </div>
        </div>
      </div>


      <div className="view bg-zinc-700 rounded-xl shadow-lg items-center justify-items-center md:m-5 w-/">
        <h2
          className={`w-full bg-opacity-80 shadow-mdbg-zinc-300 bg-zinc-500 text-zinc-200 shadow-xl text-center rounded-t-xl p-2`}
        >
          <strong>Connect me</strong>
        </h2>
        <div className=" block md:flex m-2 px-10 justify-around py-10 gap-2 h-1/3 bg-zinc-700 rounded-lg shadow-lg items-center justify-items-center">
          {/* <div className="w-1/3 mx-10 p-5 justify-items-center bg-zinc-300 rounded-xl hover:scale-105">
            <img
              className=" w-3/4 rounded-full shadow-lg bg-opacity-10 hover:shadow-xl"
              src="https://media.licdn.com/dms/image/v2/D5603AQGKwNF4QuxflA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719741763204?e=1743638400&v=beta&t=7ZjEOD9CX1cGgxCEYotJi9kW2PkG6Zh1xiu59i1-LOg"
              alt=""
            />
            <br />
            <Link>
              <p
                className=" self-center shadow-xl text-center bg-slate-800 hover:scale-105 hover:opacity-90 text-yellow-50 rounded-md py-2 px-4 items-center justify-items-center pt-3"
                to="/social"
              >
                + Connect
              </p>
            </Link>
          </div>
          <div className="w-1/3 mx-10 p-5 justify-items-center bg-zinc-300 rounded-xl hover:scale-105">
            <img
              className=" w-3/4 rounded-full  shadow-lg bg-opacity-10 hover:shadow-xl"
              src={insta}
              alt=""
            />
            <br />
            <Link
              className="  self-center shadow-xl text-center  bg-black hover:scale-110 hover:opacity-90 text-yellow-50 rounded-md w-full py-2 px-4 items-center justify-items-center pt-3"
              target="_blank"
              to="/social"
            >
              Follow +
            </Link>
          </div> */}
          {/* <div className="w-1/3 mx-10 p-5 justify-items-center bg-zinc-300 rounded-xl hover:scale-105">
            <img
              className=" w-3/4 rounded-full shadow-lg hover:shadow-xl bg-opacity-10"
              src={profile}
              alt=""
            />
            <br />
            <Link
              className="  self-center shadow-xl text-center  bg-slate-900 hover:scale-110 hover:opacity-90 text-yellow-50 rounded-md w-full py-2 px-4 items-center justify-items-center pt-3"
              target="_blank"
              to="/social"
            >
              Mail
            </Link>
          </div> */}

          <div className="md:w-1/4 mb-2 mx-5 py-10 bg-white bg-opacity-90 flex flex-col items-center p-6 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Profile Picture */}
            <div className="w-1/2 p-1 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center rounded-full shadow-md transition-all duration-300 hover:shadow-xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGKwNF4QuxflA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719741763204?e=1743638400&v=beta&t=7ZjEOD9CX1cGgxCEYotJi9kW2PkG6Zh1xiu59i1-LOg"
                className=" rounded-full border-4 border-white"
                alt="Sushant Ambekar"
              />
            </div>

            {/* LinkedIn Identifier */}
            <div className="flex items-center mt-4 space-x-2 text-blue-600 font-semibold">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn Logo"
                className="w-5 h-5"
              />
              <span>Sushant Ambekar</span>
            </div>

            {/* View Profile Button */}
            <a
              href="https://www.linkedin.com/in/sushant-ambekar-066b06316/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-md transition-all duration-300 hover:from-blue-700 hover:to-blue-500 hover:scale-110"
            >
              +Connect
            </a>
          </div>

          <div className="md:w-1/4 mb-2 mx-5 py-10 bg-white bg-opacity-90 flex flex-col items-center p-6 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Profile Picture with Gradient Border */}
            <div className="w-1/2 p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded-full shadow-md transition-all duration-300 hover:shadow-xl">
              <img
                src={insta}
                className="rounded-full border-4 border-white"
                alt="Instagram Profile"
              />
            </div>

            {/* Instagram Username */}
            <div className="flex items-center mt-4 space-x-2 text-pink-600 font-semibold">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram Logo"
                className="w-5 h-5"
              />
              <span>@sushant_ambekar_10</span>
            </div>

            {/* Follow Button */}
            <a
              href="https://www.instagram.com/sushant_ambekar_10/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full shadow-md transition-all duration-300 hover:from-yellow-500 hover:to-pink-500 hover:scale-110"
            >
              Follow
            </a>
          </div>

          <div className="md:w-1/4 mx-5 py-9 bg-white bg-opacity-90 flex flex-col items-center p-6 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Facebook Logo */}
            <div className="self-end  top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              Facebook
            </div>

            {/* Profile Picture */}
            <div className="w-1/2 p-1 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
              <img
                src={profile}
                className="w-full h-full object-cover"
                alt="Facebook Profile"
              />
            </div>

            {/* Title */}
            <h2 className="mt-4 text-lg font-semibold text-gray-800">
              Sushant Ambekar
            </h2>

            {/* View Profile Button */}
            <a
              href="https://www.facebook.com/mangal.ambekar.5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105"
            >
              Add Friend
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
