import img from "../img/linkedin.JPG";
import Details from "../details.json";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <div className=" bg-zinc-800 pb-5 w-full h-full rounded-3xl blockh-full w-full  relative pt-10">
        {/* <h1 className=" text-black font-hammersmith font-semibold text-xl bg-white rounded-lg bg-opacity-50 w-1/6 ml-10 text-center py-2">Resume</h1> */}
        <div className="pt-48 flex justify-center items-center w-full">
          <img className=" absolute h-64 w-64  m-auto rounded-full mb-5 view" src={img} alt="" />
        </div>

        <div className=" bg-white bg-opacity-20 m-10 rounded-3xl py-10">
          <div className="w-full md:flex text-center p-10 ">
            <div className=" md:ml-6  md:w-1/2 text-left md:px-5 lg:mt-5">
              <h1 className="text-2xl pl-5 pt-3 font-hammersmith text-white bg-zinc-900 rounded-t-xl opacity-70 p-2">
                👤 Personal Details
              </h1>
              <div className=" bg-white bg-opacity-40 text-zinc-900 w-full p-2">
                <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                  <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                    Name :
                  </h2>
                  <p className="md:text-sm text-xs text-black text-zinc-900">
                    Sushant Sanjay Ambekar
                  </p>
                </div>
                <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                  <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                    Emails :
                  </h2>
                  <p className="md:text-sm text-xs  text-zinc-900">
                    sushantsambekar@gmail.com ,{" "}
                  </p>
                  <p className="md:text-sm text-xs  text-zinc-900">
                    23030151@ycce.in
                  </p>
                </div>

                <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                  <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                    Date Of Birth :
                  </h2>
                  <p className="md:text-sm text-xs text-black text-zinc-900">
                    10-09-2004
                  </p>
                </div>

                <div className="flex text-black ">
                  <Link
                    className="bg-zinc-800  rounded-lg py-3 m-2 w-1/3 text-center md:text-xl font-semibold text-white"
                    target="_blank"
                    to="https://www.linkedin.com/in/sushant-ambekar-066b06316"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    className="bg-zinc-800 rounded-lg py-3 m-2 w-1/3 text-center md:text-xl text-xl font-semibold text-white"
                    target="_blank"
                    to="https://github.com/sushant-ambekar-10"
                  >
                    Github
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:ml-6 md:w-1/2 text-left md:px-5 mt-5">
              <h1 className="text-2xl pl-5 pt-3 font-hammersmith text-white bg-zinc-900 rounded-t-xl opacity-70 p-2">
                🎓 Qualifications
              </h1>
              <div className=" bg-white bg-opacity-40 text-zinc-900 w-full p-2">
                <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                  <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                    Yeshwantrao Chavan College of Engineering
                  </h2>
                  <p className="md:text-sm text-xs text-black text-zinc-900">
                    Computer Science & Engineering
                  </p>
                </div>
                <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                  <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                    Programme :
                  </h2>
                  <p className="md:text-sm text-xs  text-zinc-900">
                    B-Tecch '26 | CGPA - <b>8.82</b>
                  </p>
                </div>

                <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                  <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                    Maharashtra State Board of Technical Education
                  </h2>
                  <p className="md:text-sm text-xs text-black text-zinc-900">
                    <b>Diploma</b> | Information Technology | <b>88%</b>
                  </p>
                </div>

                <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                  <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                    Secondary School Certificate, Nanded
                  </h2>
                  <p className="md:text-sm text-xs text-black text-zinc-900">
                    <b>90.80%</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" mr-10  w-full text-left px-5">
            <h1 className="text-2xl pl-5 pt-3 font-hammersmith text-white bg-zinc-900 rounded-t-xl opacity-70 p-2">
              📈 Work Experience
            </h1>
            <div className=" bg-white bg-opacity-40 text-zinc-900 w-full p-2">
              <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                  Web Development Intern | My Job Grow | Aug 2024 – Nov 2024
                </h2>
                <p className="md:text-sm text-xs text-black text-zinc-900">
                  Developed and deployed responsive full-stack web applications
                  using React.js, Node.js, Express.js and MongoDb. Implemented
                  RESTful services with Node.js and handled version control
                  using Git. Collaborated in team and deployed projects on
                  GitHub/Netlify.
                </p>
              </div>
              <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                  Web Development Intern | Kalavati Technologies Pvt. Ltd. | Jul
                  2022 – Sep 2022
                </h2>
                <p className="md:text-sm text-xs  text-zinc-900">
                  Completed industrial training focused on modern web
                  development. Worked with HTML, CSS, JavaScript,Bootstrap and
                  WordPress to build and design responsive websites. Gained
                  practical experience in front-end development, website
                  customization, and user interface design.
                </p>
              </div>

              <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                  Training & Placement Co-ordinator | YCCE | Aug 2024 - Present
                </h2>
                <p className="md:text-sm text-xs text-black text-zinc-900">
                  As a core coordinator of the T&P Cell, I actively managed and
                  facilitated campus recruitment drives for leading companies
                  like Infosys, TCS, HCLTech, Zoho, Infocepts, and Jubilant
                  FoodWorks. I also played a key role in organizing the HR
                  Conclave, collaborating with HR professionals from Persistent
                  Systems, Ather Energy, Swiggy, Zomato, Mahindra, and Delaplex,
                  ensuring seamless communication, event execution, and student
                  engagement.
                </p>
              </div>
            </div>
          </div>

          <div className=" mr-10  w-full text-left px-5 mt-10 ">
            <h1 className="text-2xl pl-5 pt-3 font-hammersmith text-white bg-zinc-900 rounded-t-xl opacity-70 p-2">
              🛠️ Projects
            </h1>
            <div className=" bg-white bg-opacity-40 text-zinc-900 w-full p-2">
              <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                  Sign Detection System for Impaired People | 2025 - Present
                </h2>
                <p className="md:text-sm text-xs text-black text-zinc-900">
                  A smart, ML-based mobile application designed to translate
                  sign language into real-time speech and text, bridging
                  communication gaps for individuals with hearing and speech
                  impairments. Currently evolving into an IoT-enabled Smart
                  Glove that detects hand gestures using sensors and performs
                  intelligent word prediction, enabling smoother and faster
                  sentence construction.
                </p>
                <p className="md:text-sm text-xs text-black text-zinc-900">
                  <b>Skills – </b> Python | Deep Learning | Machine Learning |
                  IoT | Android
                </p>
              </div>

              <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                  Care Now | 2024
                </h2>
                <p className="md:text-sm text-xs text-black text-zinc-900">
                  Developed CareNow, an Android application to facilitate
                  communication between patients and caregivers, with features
                  such as real-time alerts and health tracking using Firebase.
                </p>
                <p className="md:text-sm text-xs text-black text-zinc-900">
                  <b>Skills – </b> Android | Java | Firebase
                </p>
              </div>

              <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                  Me-taData | 2024
                </h2>
                <p className="md:text-sm text-xs text-black text-zinc-900">
                  Me-taData is my personal portfolio Web Application showcasing
                  my projects, skills, and achievements in software development
                  and technology.
                </p>
                <p className="md:text-sm text-xs text-black text-zinc-900">
                  <b>Skills – </b> ReactJs | NodeJs | ExpressJs | Tailwindcss
                </p>
              </div>

              <div className=" view bg-zinc-700 bg-opacity-40 text-black rounded-lg p-3 m-2">
                <h2 className="md:text-xl text-xl font-semibold text-zinc-900">
                  Java Compiler | 2022
                </h2>
                <p className="md:text-sm text-xs text-black text-zinc-900">
                  It is the Software project which is fully working java
                  compiler based on Java , and some knowledge about Operating
                  System Commands
                </p>
                <p className="md:text-sm text-xs text-black text-zinc-900">
                  <b>Skills – </b> Java
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:flex text-center md:p-10 p-5">
            <div className=" md:ml-6 md:mt-5 md:w-1/2 text-left md:px-5">
              <h1 className="text-2xl pl-5 pt-3 font-hammersmith text-white bg-zinc-900 rounded-t-xl opacity-70 p-2">
                🧠 Skills
              </h1>
              <div className=" bg-white bg-opacity-40 text-zinc-900 w-full p-2 pb-6">
                <div className="overflow-visible overflow-x-auto whitespace-nowrap">
                  <div className="view grid grid-cols-1 sm:grid-cols-3 gap-4 mx-5 min-w-max sm:min-w-0">
                    {Details.skills.map((data, index) => (
                      <div key={index} className="view inline-block sm:block">
                        <p
                          className={`view md:text-sm text-xs text-Black font-semibold p-2  m-1 rounded-md w-fit 
                          ${
                            index === 0 ||
                            index === 1 ||
                            index === 2 ||
                            index === 3 ||
                            index === 4 ||
                            index === 12
                              ? " bg-yellow-300"
                              : " bg-white bg-opacity-40"
                          }`}
                        >
                          {data}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:ml-6 mt-5 md:w-1/2 text-left md:px-5">
              <h1 className="text-2xl pl-5 pt-3 font-hammersmith text-white bg-zinc-900 rounded-t-xl opacity-70 p-2">
                📜 Certifications
              </h1>
              <div className=" bg-white bg-opacity-40 text-zinc-900 w-full p-2">
                {Details.certifications.map((data, index) => (
                  <div key={index} className="m-2 mx-5">
                    {/* <h2 className="text-xl font-semibold text-white">{data}</h2> */}
                    <p className={`text-sm   ${index===0 || index===1  || index===4 || index===5 || index===6 ?"bg-yellow-300":"bg-zinc-300"} view text-black font-semibold p-2 rounded-md w-fit`} >{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className=" mr-10  w-full text-left px-5 ">
            <h1 className="text-2xl pl-5 pt-3 font-hammersmith text-white bg-zinc-900 rounded-t-xl opacity-70 p-2">
              🏅 Achievements
            </h1>
            <div className=" bg-white bg-opacity-40 text-zinc-900 w-full p-2">
              {Details.achievements.map((data, index) => (
                <div key={index} className="m-2 mx-5">
                  {/* <h2 className="text-xl font-semibold text-white">{data}</h2> */}
                  <p className={`text-lg view text-black font-semibold p-2 rounded-md w-fit ${index===0 || index===2  || index===3 || index===9 ?"bg-yellow-300":"bg-zinc-300"}`}>{data}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
