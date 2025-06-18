import React from "react";
import personal from "../img/personal.png";
import education from "../img/education.png";
import skills from "../img/skills.png";
import certificate from "../img/certificate.png";
import achievement from "../img/achievement.png";
import { useState , useEffect} from "react";
import Details from "../details.json";
// import {TypeAnimation} from 'react-type-animation';

export default function Askme() {
  const [isHovered, setIsHovered] = useState(false);
  const [detailsOf, setDetailsOf] = useState("");
  const [imageOf, setImageOf] = useState("");

  function hadleHover(of) {
    setIsHovered(true);
    if (of === "personal_details") {
      setDetailsOf("Personal Details");
      setImageOf(personal);
    } else if (of === "qualifications") {
      setDetailsOf("Qualifications");
      setImageOf(education);
    } else if (of === "skills") {
      setDetailsOf("Skills");
      setImageOf(skills);
    } else if (of === "certifications") {
      setDetailsOf("Certifications");
      setImageOf(certificate);
    } else if (of === "achievements") {
      setDetailsOf("Achievements");
      setImageOf(achievement);
    }
  }
  function hadleHoverOver() {
    setIsHovered(false);
    setDetailsOf("");
    setImageOf("");
  }

  function displayDetails() {
    return (
      <div className={`${detailsOf ? "" : "hidden"}`}>
        <h2
          className={`w-full bg-opacity-80 shadow-md ${
            isHovered ? "bg-zinc-300" : "bg-transparent text-transparent"
          } text-gray-600 text-center rounded-t-xl p-2`}
        >
          {detailsOf}
        </h2>
        {imageOf ? (
          <img alt='' src={imageOf} className="w-7 h-7 m-2 rounded-md opacity-70" />
        ) : (
          <></>
        )}

        {/* {Details.personal_details.map((data, index) => (
          <div key={index}>
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="m-5">
              <h2 className="text-xl font-semibold text-white">{key.replace(/_/g, " ").charAt(0).toUpperCase() + key.slice(1).replace("_"," ")}</h2>
              <p className="text-sm  text-zinc-300">{value}</p>
            </div>
          ))}
        </div>
        ))} */}
        {details()}
      </div>
    );
  }

  function details() {
    if (detailsOf === "Personal Details") {
      return (
        <>
          {Details.personal_details.map((data, index) => (
            <div key={index}>
              {Object.entries(data).map(([key, value]) => (
                <div key={key} className="m-5 ">
                  <h2 className="md:text-xl text-xl font-semibold text-white ">
                    {key.replace(/_/g, " ").charAt(0).toUpperCase() +
                      key.slice(1).replace("_", " ")}
                  </h2>
                  {value.includes("com") ? value.replace(".com", ".com  ") : ""}
                  <p className="md:text-sm text-xs  text-zinc-300">{value}</p>
                </div>
              ))}
            </div>
          ))}
        </>
      );
    } else if (detailsOf === "Qualifications") {
      return (
        <>
          {Details.qualifications.map((data, index) => (
            <div key={index} className="m-5 sm:overflow-visible overflow-y-auto max-h-[200px] sm:max-h-none">
              <h2 className="text-xl font-semibold text-white">SSC</h2>
              <p className="text-sm text-zinc-300 md:mb-5 mb-2">{data.ssc}</p>
              <h2 className="text-xl font-semibold text-white">Diploma</h2>
              <p className="text-sm text-zinc-300 md:mb-5 mb-2">{data.diploma}</p>
              <ul className="list-none">
                {data.SGPA.map((sem, idx) => (
                  <>
                    <h2 className="text-xl font-semibold text-white">
                      {idx + 3} sem SGPA :{" "}
                    </h2>
                    <li key={idx} className="text-sm text-zinc-300 md:mb-5 mb-2">
                      {idx + 3} sem : {sem}
                    </li>
                  </>
                ))}
              </ul>
              <h2 className="text-xl font-semibold text-white">CGPA</h2>
              <p className="text-sm text-zinc-300 mb-5">{data.cgpa}</p>
            </div>
          ))}
        </>
      );
    } else if (detailsOf === "Skills") {
      // return (
      //   <>
      //     {Details.skills.map((data, index) => (
      //       <div key={index} className="m-2 mx-5">
      //         {/* <h2 className="text-xl font-semibold text-white">{data}</h2> */}
      //         <p className={`md:text-sm text-xs  text-gray-600 p-2 rounded-md w-fit ${index===0 || index===2 || index=== 7 || index===8 ?"bg-yellow-300":"bg-zinc-300"}`}>{data}</p>
      //       </div>
      //     ))}
      //   </>
      // );
      return (
            // 
            <div className="overflow-visible overflow-x-auto whitespace-nowrap sm:overflow-visible overflow-y-auto max-h-[200px] sm:max-h-none">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-5 min-w-max sm:min-w-0 ">
                  {Details.skills.map((data, index) => (
                    <div key={index} className="inline-block sm:block ">
                      <p
                        className={`md:text-sm text-xs text-gray-600 p-2 rounded-md w-fit 
                          ${index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 12
                            ? "bg-yellow-300"
                            : "bg-zinc-300"}`}
                      >
                        {data}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
          );
    } else if (detailsOf === "Certifications") {
      return (
        <div className="sm:overflow-visible overflow-y-auto max-h-[200px] sm:max-h-none">
          {Details.certifications.map((data, index) => (
            <div key={index} className="m-2 mx-5 ">
              {/* <h2 className="text-xl font-semibold text-white">{data}</h2> */}
              <p className={`text-sm   ${index===0 || index===1  || index===4 || index===5 || index===6 ?"bg-yellow-300":"bg-zinc-300"} text-gray-600 p-2 rounded-md w-fit`} >{data}</p>
            </div>
          ))}
        </div>
      );
    } else if (detailsOf === "Achievements") {
      return (
        <div className="sm:overflow-visible overflow-y-auto max-h-[200px] sm:max-h-none">
          {Details.achievements.map((data, index) => (
            <div key={index} className="m-2 mx-5">
              {/* <h2 className="text-xl font-semibold text-white">{data}</h2> */}
              <p className={`text-sm    text-gray-600 p-2 rounded-md w-fit ${index===0 || index===2  || index===3 || index===9 ?"bg-yellow-300":"bg-zinc-300"}`}>{data}</p>
            </div>
          ))}
        </div>
      );
    } 
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div id={`${isMobile ? "metadata-mb":"metadata"}`} className="h-screen fixed lg:w-screen lg:h-screen md:flex ">
      <div className="w-1/2">
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-start md:mx-20 md:mb-5 md:pt-20 px-20 font-hammersmith text-6xl opacity-60 in-out">
          <span className="text-4xl opacity-80 mx-2"> Ambekar </span> <br />{" "}
          <span className="lg:text-9xl font-hammersmith">Sushant
          <br /></span>
          
        </h1>
      </div>

      <div className="md:w-1/2 md:pt-28 flex">
        <div
          className={`font-hammersmith  text-xl w-3/4 ${
            isHovered
              ? "bg-zinc-700 shadow-2xl"
              : "bg-transparent text-transparent"
          } bg-opacity-70 m-10 rounded-xl `}
        >
          {displayDetails()}
        </div>

        <div className="md:w-1/4  justify-end justify-items-end items-end lg:block ">
          <div className="w-full flex justify-end mt-28 floating">
            <button
              className={` in-out rounded-full w-12 h-12 border-4  opacity-75 lg:m-5 mr-10 shadow-xl bg-white hover:scale-110 `}
              onMouseEnter={() => hadleHover("personal_details")}
              onMouseLeave={hadleHoverOver}
            >
              <img
                className="rounded-full hover:opacity-100 "
                src={personal}
                alt=""
              />
            </button>
          </div>
          <div className="w-full flex justify-end floating">
            <button
              className=" in-out rounded-full w-12 h-12 border-4  opacity-75 lg:mx-5 md:my-5 my-1 mr-10 shadow-xl bg-white hover:scale-110"
              onMouseEnter={() => hadleHover("qualifications")}
              onMouseLeave={hadleHoverOver}
            >
              <img
                className="rounded-full  hover:opacity-100"
                src={education}
                alt=""
              />
            </button>
          </div>
          <div className="w-full flex justify-end floating ">
            <button
              className=" in-out rounded-full w-12 h-12 border-4  opacity-65 lg:mx-5 md:my-5 my-1 mr-10 shadow-xl bg-white hover:scale-110 items-center justify-items-center"
              onMouseEnter={() => hadleHover("skills")}
              onMouseLeave={hadleHoverOver}
            >
              <img
                className="rounded-full w-8 hover:opacity-100"
                src={skills}
                alt=""
              />
            </button>
          </div>
          <div className="w-full flex justify-end floating">
            <button
              className=" in-out rounded-full w-12 h-12 border-4  opacity-65 lg:mx-5 md:my-5 my-1 mr-10 shadow-xl bg-white hover:scale-110 items-center justify-items-center"
              onMouseEnter={() => hadleHover("certifications")}
              onMouseLeave={hadleHoverOver}
            >
              <img
                className="rounded-full  hover:opacity-100"
                src={certificate}
                alt=""
              />
            </button>
          </div>
          <div className="w-full flex justify-end floating">
            <button
              className=" in-out rounded-full w-12 h-12 border-4  opacity-65 lg:mx-5 md:my-5 my-1 mr-10  shadow-xl bg-white hover:scale-110 items-center justify-items-center"
              onMouseEnter={() => hadleHover("achievements")}
              onMouseLeave={hadleHoverOver}
            >
              <img
                className="rounded-full  hover:opacity-100"
                src={achievement}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
