import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name = "home" className="md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-500">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:h-full px-4 md:flex-row">
        <div id="sideText" className="flex flex-col justify-center h-full">   
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hello! My name is Anupesh and I am a full stack developer with
            experience in building websites
          </p>
          <div>
            <button className= " group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <FaCircleArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
        <div id="heroImage">
            <img src={heroImage} alt="myProfile" className="rounded-2xl mx-auto w-2/3 md:w-3/4"/>
        </div>
      </div>
    </div>
  );
};

export default Home;