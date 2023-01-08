import React, { useState } from "react";
import { AiOutlineDown, AiOutlineLeft } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { TbWorldDownload } from "react-icons/tb";
import { FaPencilAlt } from "react-icons/fa";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Newsidebar from "./Newsidebar";

function Job_detail() {
  const [toggle, setToggle] = useState(true);

  const toggleClass = " transform translate-x-5";
  return (
    <div className="flex">
    <div className="w-[16%] bg-slate-900">
    <Newsidebar/>
    </div>
    <div className="h-full p-7  bg-[#F2F7FA] flex-1 border-2 border-gray-300 font-normal text-black">
      {/* Hero section */}

      <div className=" flex justify-between h-16">
        <div className="flex  mb-7 items-center gap-5  ">
          <div>
            <AiOutlineLeft className=" bg-white p-2 rounded-full w-7 h-7" />
          </div>

          <div>
            <p className="text-gray-400"> DESIGN</p>
            <h1 className="flex font-medium text-2xl gap-2 items-center  ">
              Senior Product Designer{" "}
              <BsThreeDots className="p-2  font-bold rounded-md text-gray-400 border-gray-300 w-10 h-10 hover:border-blue-700 hover:text-blue-700" />
            </h1>
            <p className="text-gray-400">
              Shreyansh &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Full Time
            </p>
          </div>
        </div>

        <div className="cn -my-2">
          <div className="flex gap-2 items-center">
            <button className="p-2 border-2 font-bold rounded-md text-green-700 border-green-700 w-42 h-9 pt-1">
              Share & Promotion
            </button>

            <button className="p-2 border-2 flex gap-3 items-center font-bold rounded-md text-white bg-green-700 border-green-700 w-36 h-9 ">
              <TbWorldDownload /> Published <AiOutlineDown />
            </button>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-gray-300 text-gray-400 mb-4 mt-4  ">
        <ul className="flex gap-14 text-gray-400 font-bold text-md items-center mb-4">
          <li className="text-gray-400 font-bold text-xl hover:text-black hover:border-b-2 hover:border-yellow-400">
            Candidate
          </li>
          <li className="text-gray-400 font-bold text-xl hover:text-black hover:border-b-2 hover:border-yellow-400">
            Job Details
          </li>
          <li className="text-gray-400 font-bold text-xl hover:text-black hover:border-b-2 hover:border-yellow-400">
            Timeline & Notes
          </li>
          <li className="text-gray-400 font-bold text-xl hover:text-black hover:border-b-2 hover:border-yellow-400">
            Hiring Team
          </li>
          <li className="text-gray-400 font-bold text-xl hover:text-black hover:border-b-2 hover:border-yellow-400">
            Setting
          </li>
        </ul>
      </div>

      {/* down sections */}

      <div className="flex gap-3">
        {/* left section */}
        <div className="w-3/4 bg-white p-3 rounded-lg">
          <h1 className="mb-2">Header</h1>
          <img
            className="object-cover w-full h-[150px] mb-3 rounded-[2rem] pl-3 pr-3"
            src="https://image.shutterstock.com/image-photo/low-angle-view-skyscrapers-shenzhenchina-260nw-526689706.jpg"
            alt=""
          />
          <h1 className="mb-2">Job Titile</h1>
          <div className="flex bg-[#F2F7FA] p-5 justify-between items-center rounded-lg mb-9 h-9 ">
            <h1 className="text-xl font-medium">Senior Product Designer</h1>
            <p className="flex gap-3 text-green-900">
              {" "}
              <FaPencilAlt /> Edit title
            </p>
          </div>

          <h1 className="mb-2">Job description</h1>
          <h2 className="font-semibold mb-9">
            We are looking for a U/UX designer with a special place in his heart
            for designing and the ability to work in a fast-paced
            entrepreneurial environment. You should get excited about creating
            beautiful-looking consumer products (Apps/ Websites /Graphic) that
            are simple to use , intitutive and reponsive.
          </h2>

          <h1 className="mb-2">Responsiblity</h1>
          <h2 className="font-semibold mb-3 flex items-center   gap-2 ">
            <IoArrowForwardCircleSharp className="text-blue-700" /> Execute all
            visual design stages from concept to final hand over to the
            technology team <br />
          </h2>
          <h2 className="font-semibold mb-3 flex items-center gap-2 ">
            <IoArrowForwardCircleSharp className="text-blue-700" /> Execute all
            visual design stages from concept to final hand over to the
            technology team <br />
          </h2>
        </div>
        {/* left section ends */}
        {/* right section */}
        <div className="w-[28%] bg-white p-5  rounded-lg sticky">
          <h1 className="mb-2 ">Job details</h1>
          <p>job creation Date</p>
          <h2 className="font-semibold mb-2">
            March 15, 2021 to March 17 2021
          </h2>
          <p>Hiring Manager</p>
          <div className="flex font-semibold mb-2 ">
            <img
              className="w-8 rounded-full mr-3"
              src="https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,h_128,dpr_3/https://assets.app.engoo.com/images/1ejRYY8i2K7I3VAtaJKbWm.jpeg"
              alt=""
            />
            <h2>Bagus Fikri</h2>
          </div>
          <p>Recruitment Quota</p>
          <h2 className="font-semibold mb-2">140</h2>
          <p>Job Type</p>

          <h2 className="font-semibold mb-2">Fulltime</h2>

          <p>Experince</p>

          <h2 className="font-semibold mb-2"> 5 years +</h2>

          <p>Location</p>

          <h2 className="font-semibold mb-2"> California ,USA</h2>

          <p>Salary</p>

          <h2 className="font-semibold mb-2">$10,000</h2>

          <p>last update</p>

          <h2 className="font-semibold mb-2">12 minutes ago</h2>

          <div className="flex">

            <div className="flex py-2 justify-between gap-3">
              <div
                className=" w-9 h-5 flex items-center bg-green-700 rounded-full p-1 cursor-pointer"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {/* Switch */}

                <div
                  className={`bg-white  h-3 w-3 rounded-full shadow-md 
         transform +  ${toggle ? null : toggleClass}`}
                ></div>
              </div>
            </div>
            <h2 className="font-semibold mb-3 mt-1 ml-3"> Allow employee to apply</h2>
          </div>
          {/* <h2 className="font-semibold mb-5"> Allow employee to apply</h2> */}
        </div>
        {/* right section ends */}
      </div>
    </div>
    </div>
  );
}

export default Job_detail;
