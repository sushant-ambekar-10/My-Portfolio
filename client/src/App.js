// // import logo from "./logo.svg";
// import "./App.css";
// import Header from "./pages/Header";
// import Home from "./pages/Home";
// import MetaData from "./pages/MetaData";
// import Projects from "./pages/Projects";
// import AnimatedHeader from "./pages/AnimatedHeader";
// // import img from "./img/img.jpg";
// import React, { useEffect, useState } from "react";
// import Footer from "./pages/Footer";
// import Social from "./pages/Social";
// import Admin from "./pages/Admin";
// import Resume from "./pages/Resume";
// import { BrowserRouter as Router, Route, Routes  , useLocation} from "react-router-dom";

// function App() {
//   // const [isExpanded, setIsExpanded] = useState(false);
  

//   // useEffect(() => {
//   //   const timer = setTimeout(() => setIsExpanded(true), 2000);
//   //   return () => clearTimeout(timer);
//   // }, []);

  
  

//   // const location = useLocation();
  
//   return (
//     <Router basename="/">

//       <MainContent/>
    
//     </Router>
//   );
// }



// function MainContent(){
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [, setScrollPercentage] = useState(0);
//   const [bg, setBg] = useState("");

//   // scrollPercentage?{}:{}

//   useEffect(() => {
//       const handleScroll = () => {
//           const scrollTop = window.scrollY || document.documentElement.scrollTop;
//           const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//           const percent = (scrollTop / scrollHeight) * 100;
//           setScrollPercentage(percent);
//           if(percent>=99)
//             setBg("bg-gray-900")
//           else if(percent>=80)
//             setBg("bg-gray-800")
//           else if(percent>=70)
//             setBg("bg-gray-700")
//           else if(percent>=60)
//             setBg("bg-gray-600")
//           else if(percent>=50)
//             setBg("bg-gray-500")
//           else if(percent>=40)
//             setBg("bg-gray-400")
//           else if(percent>=30)
//             setBg("bg-gray-300")
//           else if(percent>=20)
//             setBg("bg-gray-200")
//           else 
//             setBg("bg-gray-100")
//       };

//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsExpanded(true), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   const location=useLocation();

//   return (
//     <div className={``}>
        
//         <div>
//           {isExpanded ? <Header /> : <></>}
//            {/* <Header/> */}
//         </div> 
//         <div
//         className={`${(location.pathname!=="/metadata")?"pb-10 justify-items-center":""}  ${bg} bg-opacity-90 transition-all duration-500 ${
//           isExpanded ? "h-full" : "h-screen"
//         }  mb-100 `}
//       >
//         {/* <h1 className='mb-5 ml-3'>Jyoti Ambekar</h1> */}

//          {location.pathname!=="/metadata" && location.pathname!=="/resume" && <AnimatedHeader />}

//         {/* <img src={img}  className='float-left mr-4 mb-4 h-30'></img> */}
//         <div className={`  bg-slate-300 shadow-xl width rounded-xl ${location.pathname!=="/metadata"?"p-5 m-5":""} `} >
          
          
          
//           <Routes>
//             <Route path="/" element={<Home/>}></Route>
//             <Route path="/home" element={<Home/>}></Route>
//             <Route path="/projects" element={<Projects/>}></Route>
//             <Route path="/metadata" element={<MetaData/>}></Route>
//             <Route path="/social" element={<Social/>}></Route>
//             <Route path="/admin" element={<Admin/>}></Route>
//             <Route path="/resume" element={<Resume/>}></Route>
//           </Routes>

//         </div>

        

//         <div className=" bg-slate-200 rounded-xl shadow-xl" id="Footer">
//         {location.pathname!=="/metadata" && location.pathname!=="/resume" && <Footer/>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import MetaData from "./pages/MetaData";
import Projects from "./pages/Projects";
import AnimatedHeader from "./pages/AnimatedHeader";
import React, { useEffect, useState } from "react";
import Footer from "./pages/Footer";
import Social from "./pages/Social";
import Admin from "./pages/Admin";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Route, Routes, useLocation,Link } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [, setScrollPercentage] = useState(0);
  const [bg, setBg] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percent = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percent);

      if (percent >= 99) setBg("bg-gray-900");
      else if (percent >= 80) setBg("bg-gray-800");
      else if (percent >= 70) setBg("bg-gray-700");
      else if (percent >= 60) setBg("bg-gray-600");
      else if (percent >= 50) setBg("bg-gray-500");
      else if (percent >= 40) setBg("bg-gray-400");
      else if (percent >= 30) setBg("bg-gray-300");
      else if (percent >= 20) setBg("bg-gray-200");
      else setBg("bg-gray-100");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsExpanded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Apply desktop mode only for /resume route
  const desktopOnly = location.pathname === "/resume";

  return (
    <div className={`${desktopOnly ? "min-w-[1024px] mx-auto overflow-x-auto bg-white" : ""}`}>
      {isExpanded && <Header />}

      <div
        className={`${location.pathname !== "/metadata" ? "pb-10 justify-items-center" : ""} ${bg} bg-opacity-90 transition-all duration-500 ${
          isExpanded ? "h-full" : "h-screen"
        } mb-100`}
      >
        {location.pathname !== "/metadata" && location.pathname !== "/resume" && <AnimatedHeader />}

        <div className={`bg-slate-300 shadow-xl width rounded-xl ${location.pathname !== "/metadata" ? "p-5 m-5" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/metadata" element={<MetaData />} />
            <Route path="/social" element={<Social />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>

        <div className="bg-slate-200 rounded-xl shadow-xl" id="Footer">
          {location.pathname !== "/metadata" && location.pathname !== "/resume" && <Footer />}
        </div>
        <Link
          className="fixed bottom-6 right-6  py-3 px-4  shadow-lg transition duration-300 rounded-md bg-zinc-600 floating bg-opacity-70 text-yellow-50"
          to="resume"
        >
          📝 Resume
        </Link>
      </div>
    </div>
  );
}

export default App;
