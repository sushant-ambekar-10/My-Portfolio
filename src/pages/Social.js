import React from "react";
import { Link } from "react-router-dom";
import insta from "../img/image.png";
import profile from "../img/email.jpg";
import me from "../img/me.jpg"

export default function Social() {
  return (
    <>
      <div className=" lg:my-10 items-center justify-items-center shadow-none md:flex gap-5">
        <div className="view mb-2 border-solid rounded-2xl  justify-items-center bg-zinc-900 p-2 md:w-1/2">
          <h2 className="font-hammersmith text-xl bg-zinc-900 b w-full text-center text-white rounded-t-xl p-5 ">
            LinkedIn
          </h2>
          <div className="w-full flex rounded-xl font-hammersmith  bg-gray-200 bg-opacity-80">
            <div className="md:w-1/2  lg:p-10 font-hammersmith m-2">
              <h2 className="text-xl font-semibold">Sushant Ambekar</h2>
              <p className="text-sm text-gray-600">To digitize the mind</p>
              <p className="mt-2">
                Pursuing CSE at Yeshwantrao Chavan College of Engineering - YCCE
                | Diploma in IT ...
              </p>
              <br></br>
              <Link
                className=" shadow-xl text-center bg-slate-800 hover:scale-150 hover:opacity-90 text-yellow-50 rounded-md py-2 px-4 items-center justify-items-center pt-3"
                target="_blank"
                to="https://www.linkedin.com/in/sushant-ambekar-066b06316/"
              >
                + Connect
              </Link>
            </div>
            <div className="w-1/2 p-5 justify-items-center">
              <img
                className=" rounded-full cursor-pointer shadow-xl"
                src="https://media.licdn.com/dms/image/v2/D5603AQGKwNF4QuxflA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719741763204?e=1743638400&v=beta&t=7ZjEOD9CX1cGgxCEYotJi9kW2PkG6Zh1xiu59i1-LOg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="view lg:scale-100 scale-75 shadow-xl border-solid rounded-2xl  justify-items-center  p-2 md:w-1/2 bg-gray-800">
          <h2 className="font-hammersmith text-xl bg-gray-800  w-full text-center text-white rounded-t-xl p-5 ">
            Instagram
          </h2>
          <div className="w-full flex rounded-xl font-hammersmith  bg-gray-200 bg-opacity-80">
            <div className="md:w-1/2 md:p-10 font-hammersmith m-2">
              <h2 className="md:text-xl font-semibold">@sushant_ambekar_10</h2>
              <p className="text-sm text-gray-600">Relaax...😉</p>
              <pre className="mt-2">{`void main(Relaax...😉) 
{
  Engineering.atYCCE.Nagpur.CSE ;
  ... ;
} `}</pre>
              <br></br>
              <Link
                className=" text-center bg-black hover:scale-110 hover:opacity-90 text-yellow-50 rounded-md w-full py-2 px-4 items-center justify-items-center pt-3"
                target="_blank"
                to="https://www.instagram.com/sushant_ambekar_10/"
              >
                Follow +
              </Link>
            </div>
            <div className="md:w-1/2 md:p-5 justify-items-center mr-5 mt-5">
              <img className="rounded-full cursor-pointer" src={insta} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:my-10 items-center justify-items-center shadow-none md:flex gap-5">
      <div className="view border-solid rounded-2xl  justify-items-center bg-slate-900 p-2 md:w-1/2">
            <h2 className="font-hammersmith text-xl bg-slate-900 b w-full text-center text-white rounded-t-xl p-5 ">
              Emails
            </h2>
            <div className="  w-full flex rounded-xl font-hammersmith  bg-gray-200 bg-opacity-80">
              <div className="w-1/2 md:p-10  font-hammersmith m-2">
                <h2 className="text-xl font-semibold">sushantsambekar@gmail.com</h2>
                <p className="text-sm text-gray-600">Sushant Ambekar</p>
                <p className="mt-2">
                </p>
                <br></br>
                <a
                  className=" shadow-xl text-center bg-slate-900 hover:scale-150 hover:opacity-90 text-yellow-50 rounded-md py-2 px-4 items-center justify-items-center pt-3"
                  target="_blank"
                  href="mailto:sushantsambekar@gmail.com"
                >
                 Email
                </a>
                <h2 className=" mt-5 text-xl font-semibold">23030151@ycce.in</h2>
                <p className="text-sm text-gray-600">Sushant Ambekar</p>
                <p className="mt-2">
                </p>
                <br></br>
                <a
                  className=" shadow-xl text-center bg-slate-900 hover:scale-150 hover:opacity-90 text-yellow-50 rounded-md py-2 px-4 items-center justify-items-center pt-3"
                  target="_blank"
                  href="mailto:23030151@gmail.com"
                >
                   Email
                </a>
              </div>
              <div className="w-1/2 p-8 justify-items-center">
                <img
                  className=" rounded-full cursor-pointer shadow-xl"
                  src={profile}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="view mb-2 border-solid rounded-2xl  justify-items-center bg-zinc-900 p-2 md:w-1/2">
          <h2 className="font-hammersmith text-xl bg-zinc-900 b w-full text-center text-white rounded-t-xl p-5 ">
            GitHub
          </h2>
          <div className="w-full flex rounded-xl font-hammersmith  bg-gray-200 bg-opacity-80">
            <div className="md:w-1/2  lg:p-10 font-hammersmith m-2">
              <h2 className="text-xl font-semibold">Sushant Ambekar</h2>
              <p className="text-sm text-gray-600">Innovating with Code | Building Smart Solutions</p>
              <p className="mt-2">
              CSE student & developer exploring web, Android, AI, and ML. 
              Innovating, learning, and coding!
              </p>
              <br></br>
              <Link
                className=" shadow-xl text-center bg-slate-800 hover:scale-150 hover:opacity-90 text-yellow-50 rounded-md py-2 px-4 items-center justify-items-center pt-3"
                target="_blank"
                to="https://github.com/sushant-ambekar-10"
              >
                View
              </Link>
            </div>
            <div className="w-1/2 p-5 justify-items-center">
              <img
                className=" rounded-full cursor-pointer shadow-xl"
                src={me}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div> */}
        {/* <div className=" view lg:scale-100 scale-75  mb-10 items-center justify-items-center shadow-none lg:mt-10"> */}
          {/* <div className=" border-solid rounded-2xl  justify-items-center bg-slate-900 p-2 md:w-1/2">
            <h2 className="font-hammersmith text-xl bg-slate-900 b w-full text-center text-white rounded-t-xl p-5 ">
              Emails
            </h2>
            <div className="w-full flex rounded-xl font-hammersmith  bg-gray-200 bg-opacity-80">
              <div className="w-1/2 md:p-10  font-hammersmith m-2">
                <h2 className="text-xl font-semibold">sushantsambekar@gmail.com</h2>
                <p className="text-sm text-gray-600">Sushant Ambekar</p>
                <p className="mt-2">
                </p>
                <br></br>
                <a
                  className=" shadow-xl text-center bg-slate-900 hover:scale-150 hover:opacity-90 text-yellow-50 rounded-md py-2 px-4 items-center justify-items-center pt-3"
                  target="_blank"
                  href="mailto:sushantsambekar@gmail.com"
                >
                 Email
                </a>
                <h2 className=" mt-5 text-xl font-semibold">23030151@ycce.in</h2>
                <p className="text-sm text-gray-600">Sushant Ambekar</p>
                <p className="mt-2">
                </p>
                <br></br>
                <a
                  className=" shadow-xl text-center bg-slate-900 hover:scale-150 hover:opacity-90 text-yellow-50 rounded-md py-2 px-4 items-center justify-items-center pt-3"
                  target="_blank"
                  href="mailto:23030151@gmail.com"
                >
                   Email
                </a>
              </div>
              <div className="w-1/2 p-8 justify-items-center">
                <img
                  className=" rounded-full cursor-pointer shadow-xl"
                  src={profile}
                  alt=""
                />
              </div>
            </div>
          </div> */}
        {/* </div> */}

      {/* </div> */}

    </>
  );
}
