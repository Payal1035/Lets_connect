
import { useState } from "react";
import Copy from "../leftbar/Copy";
//import Edit from "./Edit";
import "./Jpp.css";
import Socialdesk from "./Socialdesk";


export const users = [
  {
    id: "1",
    Name: "Diane Cooper",
    Gender: "Female",
    Email: "diane.cooper@example.com",
    Post: "15",
    YoutubeImage:
      "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    InstagramImage:
      "https://images.pexels.com/photos/4099414/pexels-photo-4099414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    Education: "@dianecooper12",
    UserName: "@dianecooper12",
    MonthlyViews: "5.5K",
    YoutubeName: "Musical Cooper",
    InstagramName: "cooper12",
    Subscribers: "1.2K",
    Videos: "42",
    InstagramPost: "102",
    InstagramFollowers: "2.5K",

    Followers: "200",
    DOB: "24th Feb, 1997",
    City: "Chandigarh",
    Skills: "Singing, Dancing",
    Languages: "English, French",
    Instagram: "diane.cooper12",
    Upcoming: "2",
  },
];


function Jpp() {
  const [popup, setPop] = useState(false)
  const handleClickOpen = () => {
    setPop(!popup)
  }
  const closePopup = () => {
    setPop(false)
  }


  return (

    <div className="App">
      <div className="flex w-full h-full">
        <div className="lg:w-[268px] fixed h-full hidden md:flex">
          <Copy />
        </div>

        <div className="flex flex-col w-full h-screen lg:ml-[18%] md:ml-[24%]">
          {/* <div className="flex   items-center h-16 justify-between w-full  p-4 ">
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"

                className="text-[#0d53fd] mr-4"
                fill="currentColor"
                width='29'
                height='29'
                class="bi bi-person  "
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              <h1 className="font-bold lg:text-xl text-sm pt-1">Diane Cooper</h1>
            </div>
            <div className="flex items-center">
              <div
                className="  flex items-center rounded-xl
                  pl-3 duration-300 cursor-pointer  border border-solid lg:w-32 w-24 h-6 border-[#cbd0d5] "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input
                  className="text-sm  ml-1 w-full bg-transparent focus:outline-none"
                  placeholder="Serach"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi text-[#0d53fd] lg:ml-4 ml-2  bi-plus-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
              </svg>
              <i className="bi ml-2 bi-bell-fill bg-white text-gray-600 rounded-full w-8 h-6 flex items-center justify-center"></i>
            </div>
          </div> */}
          <hr className="" />
          <div className="flex  items-center w-full justify-between lg:p-4 p-2 h-16">
            <div className="flex items-center">
              {/* <h1 className="text-[#0d53fd] font-bold  lg:mr-3">Artist List</h1> */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 lg:mr-3  text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <h1 className=" font-bold text-[#888d91]">Diane Cooper</h1>
            </div>
            <div className="flex">
              {/* <div className="flex bg-white w-8 h-6 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="text-[#8f96a1]"
                  fill="currentColor"
                  class="bi bi-printer-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                </svg>
              </div> */}
              {/* <div className="flex ml-4 w-24 h-6 items-center justify-center bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="text-[#8f96a1]"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
                <h1 className=" text-[#8f96a1] text-sm pl-1">Edit Artist</h1>
              </div> */}
            </div>
          </div>
          <hr className="text-gray-700 " />
          <div className=" w-full flex">

            <div className="flex flex-col lg:w-[74%] w-full  h-full">
              <div className="flex     ">
                <div className="flex flex-col lg:flex-row w-full bg-[#fffdfe] m-6 rounded-lg ">
                  <div className="lg:w-1/3  flex flex-col items-center lg:px-8 p-8 lg:py-2 h-80">
                    {users.map(user => (<>
                      <img
                        src="https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        className="lg:h-32   mb-1 lg:w-32 border-4 border-solid border-gray-300   h-20 w-20 rounded-full"
                        alt=""
                      />
                      <h1 className="text-2xl  font-bold ">{user.Name}</h1>
                      <h2 className="text-[#888d91] font-bold mb-3 text-sm">
                        {user.UserName}
                      </h2>
                      <div className="flex mb-3">
                        <div className="flex flex-col items-center">
                          <h1 className="font-bold">{user.Post}</h1>
                          <h2 className="text-[#888d91] font-bold text-[12px]">
                            Following
                          </h2>
                        </div>
                        <hr className=" bg-[#d6dce1] w-[2px] mx-8 h-full " />
                        <div className="flex flex-col items-center">

                          <h1 className="font-bold">{user.Followers}</h1>
                          <h2 className="text-[#888d91] font-bold text-[12px]">
                            Followers
                          </h2>
                        </div>

                      </div>
                      <button className="border-4 rounded-xl text-xl font-bold border-[#d6dce1] w-full h-12 ">
                        Send Message
                      </button>
                    </>

                    ))}
                  </div>
                  <hr className=" bg-[#f6f7f9] w-[4px]  h-full " />
                  <div className="lg:w-2/3 ">
                    <div onClick={handleClickOpen} className="cursor-pointer flex w-full justify-end pt-2 pr-3"><i class="bi bi-pencil-fill"></i></div>
                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-10 h-full p-8">
                      {
                        users.map(user => (<>



                          <div className="flex flex-col border-b-2 border-[#eff4f8]">
                            <h1 className="font-bold text-[#888d91] text-sm text-left">
                              Name
                            </h1>
                            <h2 className="text-sm text-left">{user.Name}</h2>
                          </div>
                          <div className="flex flex-col border-b-2 border-[#eff4f8]">
                            <h1 className="font-extrabold text-[#888d91] text-sm text-left">
                              Gender
                            </h1>
                            <h2 className="text-sm text-left ">{user.Gender}</h2>
                          </div>
                          <div className="flex flex-col border-b-2 border-[#eff4f8]">
                            <h1 className="font-bold text-[#888d91] text-sm text-left">
                              DOB
                            </h1>
                            <h2 className="text-sm text-left">{user.DOB}</h2>
                          </div>
                          <div className="flex flex-col border-b-2 border-[#eff4f8]">
                            <h1 className="font-bold text-[#888d91] text-sm text-left">
                              Email
                            </h1>
                            <h2 className="text-sm text-left overflow-hidden">{user.Email}</h2>
                          </div>

                          <div className="flex flex-col border-b-2 border-[#eff4f8]">
                            <h1 className="font-bold text-[#888d91] text-sm text-left">
                              City
                            </h1>
                            <h2 className="text-sm text-left">{user.City}</h2>
                          </div>
                          <div className="flex flex-col border-b-2 border-[#eff4f8]">
                            <h1 className="font-bold text-[#888d91] text-sm text-left">
                              Skills
                            </h1>
                            <h2 className="text-sm text-left">{user.Skills}</h2>
                          </div>
                          <div className="flex flex-col border-b-2 border-[#eff4f8]">
                            <h1 className="font-bold text-[#888d91] text-sm text-left">
                              Languages
                            </h1>
                            <h2 className="text-sm text-left">{user.Languages}</h2>
                          </div>

                        </>
                        ))
                      }

                    </div>
                  </div>
                </div>
              </div>
              <div className="block px-4  lg:hidden ">
                <Socialdesk/>
              </div>

              <div className="flex  bg-[#fffdfe] h-full mt-9 rounded-lg lg:mx-5 lg:my-1 ">
                <div className="flex flex-col w-full lg:p-8" >
                  <div className=" hidden lg:flex bg-[#eff1f7] w-[600px] rounded-lg h-8 mb-3 ">
                    <button
                      type="button"
                      className=" text-sm font-medium text-[#0d53fd] w-full h-[28px] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 mt-[2px] "
                    >
                      Upcoming Appointments
                    </button>
                    <button
                      type="button"
                      className=" text-sm font-medium text-gray-900 w-full h-[28px] focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#0d53fd] focus:z-10 mt-[2px]  "
                    >
                      Post Appointments
                    </button>
                    <button
                      type="button"
                      className=" text-sm font-medium text-gray-900 w-full h-[28px] focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#0d53fd] focus:z-10 mt-[2px]  "
                    >
                      Medical Records
                    </button>
                  </div>

                  <div className="flex flex-col h-full  bg-[#eff1f7]  lg:p-4 p-2 ">
                    <div className="flex  items-center justify-between lg:px-5  ">

                      <h1 className=" font-bold text-xl">
                        Education
                      </h1>

                      <div className="flex items-center bg-white h-8 lg:w-40 w-32 justify-center  ">
                        <img src="https://cdn-icons.flaticon.com/png/512/2985/premium/2985150.png?token=exp=1653465271~hmac=518919778d45142054bb2493e8440149" className="h-4 w-3 text-[#e6e9ee] rotate-180" alt="" />
                        <h2 className="lg:text-sm text-[12px] lg:pl-3 pl-1 text-[#888d91]">
                          Show more records
                        </h2>
                      </div>
                    </div>
                    <hr className="w-full my-2" />
                    <div className="flex">
                      <div className="w-1/12 flex justify-center">
                        <div className="h-[80%] bg-blue-500 w-1 mt-20" />
                      </div>
                      <div className="flex flex-col h-full w-11/12  lg:m-8 b">



                        <div className="flex flex-col lg:flex-row px-3 items-center justify-around mb-5 bg-white py-3 lg:py-6 rounded-3xl ">
                          <div className="relative bg-blue-700 rounded-full border-4 border-blue-800 w-6 h-6 -left-[86px] top-0">

                          </div>
                          <div className='flex flex-col  mb-2 lg:mb-0 b w-1/4'>
                            <h1 className="text-xl">
                              Pursuing
                            </h1>

                          </div>
                          <div className='flex flex-col items-center mb-2 lg:mb-0 b w-1/4'>
                            <h1 className="text-sm  text-gray-400">
                              Year
                            </h1>
                            <h1 className="text-base font-bold">
                              2020
                            </h1>
                          </div>

                          <div className='flex flex-col  mb-2 lg:mb-0 items-center b w-1/4'>

                            <h1 className="text-sm text-gray-400 ">
                              Degree
                            </h1>
                            <h1 className="text-base font-bold">
                              M.B.C.A
                            </h1>
                          </div>
                          <div className='flex flex-col lg:pl-3 items-center mb-2 lg:mb-0 b w-1/4'>

                            <h1 className="text-sm text-gray-400">
                              Subject
                            </h1>
                            <h1 className="text-base font-bold">
                              Computer Application
                            </h1>
                          </div>





                        </div>
                        <div className="flex flex-col lg:flex-row px-3 items-center justify-around bg-white py-3 lg:py-6 rounded-3xl ">
                          <div className="relative bg-white rounded-full border-4 border-blue-800 w-6 h-6 -left-[86px] top-0">

                          </div>
                          <div className='flex flex-col  mb-2 lg:mb-0 b w-1/4'>
                            <h1 className="text-xl">
                              Completed
                            </h1>

                          </div>
                          <div className='flex flex-col items-center mb-2 lg:mb-0 b w-1/4'>
                            <h1 className="text-sm  text-gray-400">
                              Year
                            </h1>
                            <h1 className="text-base font-bold">
                              2015-2018
                            </h1>
                          </div>

                          <div className='flex flex-col  mb-2 lg:mb-0 items-center b w-1/4'>

                            <h1 className="text-sm text-gray-400 ">
                              Degree
                            </h1>
                            <h1 className="text-base font-bold">
                              B.C.A
                            </h1>
                          </div>
                          <div className='flex flex-col lg:pl-3 items-center mb-2 lg:mb-0 b w-1/4'>

                            <h1 className="text-sm text-gray-400">
                              Subject
                            </h1>
                            <h1 className="text-base font-bold">
                              Computer Application
                            </h1>
                          </div>





                        </div>

                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25%] lg:block hidden">
              <Socialdesk />
            </div>
          </div>
        </div>
      </div>
      {
        popup ?
          <div className="absolute w-[82%] top-0 ml-[18%] z-[5] h-[100%] rounded-lg border-2">

            {/* <Edit/> */}

            {/***form start*/}
            <div className="shadow-[20px_20px_60px_0px_rgba(240,240,240,0.8)]">
              <div className='font-[Smooch] w-[70%] my-[1.5rem] ml-[10%]  p-4 border border-gray-400 bg-[#f6f6f8] rounded-lg   shadow-[-20px_-20px _60px_0px_rgba(203,203,203,0.5)]'> {/**shadow-[4px_4px_10px_0px_rgba(0,0,0,0.2)]  */}
                <div className='flex w-full justify-between text-2xl'>
                  <div className="flex text-xl font-semibold px-3 text-blue-700">Edit Details</div>
                  <h1 onClick={closePopup} className="flex justify-end px-2 text-sm pt-1 font-extrabold cursor-pointer text-red-600 border border-gray-400 bg-[#eff1f7]  hover:shadow-[-2px_-2px_5px_0px_rgba(0,0,0,0.2)_inset] rounded">X</h1>
                </div>
                <hr className="mt-2" />
                <form className="px-6">
                  <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-4">
                    <div>
                      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">First Name</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div>
                      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">Last name</label>
                      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                    </div>
                    <div>
                      <label for="Gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">Gender</label>
                      <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Male/Female" required />
                    </div>
                    <div>
                      <label for="dob" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">Date of Birth</label>
                      <input type="date" id="dob" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <div>
                      <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">City</label>
                      <input type="text" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your city" required />
                    </div>
                    <div>
                      {/* <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unique visitors (per month)</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> */}
                    </div>
                  </div>
                  <div class="mb-6 ">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">Email address</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                  </div>
                  <div class="mb-6">
                    <label for="skill" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">Skills</label>
                    <input type="text" id="skill" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                  </div>
                  <div class="mb-6">
                    <label for="lang" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">Languages</label>
                    <input type="text" id="lang" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                  </div>
                  {/* <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div> */}
                  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
              </div>
              </div>
              {/**form end */}
            </div> : ""
      }
          </div>
  );
}

      export default Jpp;

export const SideBar = () => {



  const [state, setstate] = useState(
      {
        activeObjects: null,
      objects: [
      {
        name: 'Home',
      class: 'bi bi-house-door-fill  text-[#cbd0d5]',
      id: '1'
        },
      {
        name: 'Bookmark',
      class: 'bi bi-bookmark-fill  text-[#cbd0d5]',
      id: '2'
        },
      {
        name: 'Messages',
      class: 'bi bi-envelope-fill text-[#cbd0d5]',
      id: '3'
        },
      {
        name: 'Logut',
      class: 'bi bi-chat-left-text-fill text-[#cbd0d5]',
      id: '4'
        },


      ]
    }
      )

  const activeHandler = (index) => {

        setstate({ ...state, activeObjects: state.objects[index] })
      }



      return (
      <div>
        {/* <span className="absolute  text-4xl top-5 left-4 cursor-pointer" onclick="Openbar()">
  <i className="bi bi-filter-left  bg-gray-900 "></i>
</span> */}
        <div className="sidebar flex justify-between flex-col fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
   w-[250px] overflow-y-auto text-center bg-white shadow h-screen">
          <div className=" text-sm">
            <div className="p-2.5 mt-1 flex items-center rounded-md ">
              <i className="bi bi-app-indicator px-2 py-1 bg-[#0d53fd] rounded-md"></i>
              <h1 className="  ml-3 text-sm  font-bold">Tailwindbar</h1>
              <i className="bi bi-x ml-20 cursor-pointer lg:hidden" onclick="Openbar()"></i>
            </div>


            <div>

              {
                state.objects.map((object, index) =>
                (

                  <div className="p-2.5 mt-2 flex items-center  px-4 duration-300 cursor-pointer   hover:bg-[#0d53fd] hover:text-white" onClick={activeHandler} key={index}>
                    <i className={object.class}></i>
                    <span className="text-sm ml-4 font-bold  ">{object.name}</span>
                  </div>
                )



                )
              }




            </div>
          </div>
          {/* <div className="flex">
          helo
        </div> */}
        </div>


      </div>
      )
}
