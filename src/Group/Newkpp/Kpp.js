
import { useState } from "react";
// import { Link } from 'react-router';
// import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./kpp.css";
// import {
//   FcStackOfPhotos,
//   FcVideoFile,
//   FcCalendar,
//   FcBrokenLink,
//   FcLikePlaceholder,
//   FcSettings,
// } from "react-icons/fc";
// import {AiFillSchedule} from "react-icons/ai";
import { BsPatchCheckFill, BsThreeDots } from "react-icons/bs";
// import { FaRegCommentDots, FaShareSquare, FaRetweet } from "react-icons/fa";
import Socialdesk from "../../Jpp/Socialdesk";
import Final from "../../Final";

export const users = [
  {
    id: "1",
    Name: "Payal Kumari Rajput",
    Gender: "Female",
    Email: "payalkumari1035@gmail.com",
    Post: "15",
    YoutubeImage:
      "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    InstagramImage:
      "https://images.pexels.com/photos/4099414/pexels-photo-4099414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    Education: "@dianecooper12",
    UserName: "payo@1035",
    MonthlyViews: "5.5K",
    YoutubeName: "Musical Cooper",
    InstagramName: "cooper12",
    Subscribers: "1.2K",
    Videos: "42",
    InstagramPost: "102",
    InstagramFollowers: "2.5K",

    Followers: "200",
    DOB: "10th April, 2001",
    City: "Bokaro",
    Skills: "Singing, Dancing",
    Languages: "English, French",
    Instagram: "diane.cooper12",
    Upcoming: "2",
  },
];


function Kpp() {
  const [popup, setPop] = useState(false)
  const handleClickOpen = () => {
    setPop(!popup)
  }
  const closePopup = () => {
    setPop(false)
  }

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="App">
      <div className="flex w-full">
        <div className="flex lg:w-[325px] ">
          <SideBar />
        </div>

        <div className="flex flex-col w-full h-screen ">
          <div className="flex flex-col w-full  h-full pl-4">
            <div className="flex     ">
              <div className="flex flex-col lg:flex-row w-full h-[90%] bg-[#fffdfe] rounded-xl mx-6 my-2   ">
                <div onClick={handleClickOpen} className="cursor-pointer flex w-full justify-end pt-2 pr-3 absolute z-6 top-5 ml-20"><i class="bi bi-pencil-fill"></i></div>
                <div className="lg:w-1/3  flex flex-col items-center lg:p-4 p-8">
                  {users.map(user => (<>
                    <img
                      src="https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      className="lg:h-24 mb-2 lg:w-24 border-4 border-solid border-gray-300   h-20 w-20 rounded-full"
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
                          Post
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
                    <button className="border-4 rounded-xl mb-2 text-xl font-bold border-[#d6dce1] w-full h-12 ">
                      Send Message
                    </button>
                  </>

                  ))}
                </div>
                <hr className=" bg-[#f6f7f9] w-[4px]  h-full " />
                <div className="lg:w-2/3 ">
                  <div className="grid lg:grid-cols-3 grid-cols-2 gap-10 h-full p-8">
                    {
                      users.map(user => (<>



                        <div className="flex flex-col border-b-2 border-[#eff4f8]">
                          <h1 className="font-bold text-[#888d91] text-sm ">
                            Name
                          </h1>
                          <h2 className="text-sm">{user.Name}</h2>
                        </div>
                        <div className="flex flex-col border-b-2 border-[#eff4f8]">
                          <h1 className="font-extrabold text-[#888d91] text-sm ">
                            Gender
                          </h1>
                          <h2 className="text-sm  ">{user.Gender}</h2>
                        </div>
                        <div className="flex flex-col border-b-2 border-[#eff4f8]">
                          <h1 className="font-bold text-[#888d91] text-sm">
                            DOB
                          </h1>
                          <h2 className="text-sm">{user.DOB}</h2>
                        </div>
                        <div className="flex flex-col border-b-2 border-[#eff4f8] overflow-hidden">
                          <h1 className="font-bold text-[#888d91] text-sm">
                            Email
                          </h1>
                          <h2 className="text-sm">{user.Email}</h2>
                        </div>

                        <div className="flex flex-col border-b-2 border-[#eff4f8]">
                          <h1 className="font-bold text-[#888d91] text-sm">
                            City
                          </h1>
                          <h2 className="text-sm">{user.City}</h2>
                        </div>
                        <div className="flex flex-col border-b-2 border-[#eff4f8]">
                          <h1 className="font-bold text-[#888d91] text-sm">
                            Skills
                          </h1>
                          <h2 className="text-sm">{user.Skills}</h2>
                        </div>
                        <div className="flex flex-col border-b-2 border-[#eff4f8]">
                          <h1 className="font-bold text-[#888d91] text-sm">
                            Languages
                          </h1>
                          <h2 className="text-sm">{user.Languages}</h2>
                        </div>

                      </>
                      ))
                    }

                  </div>
                </div>
              </div>
            </div>
            

            <div className="flex b bg-[#fffdfe] h-full mx-6  py-6 rounded-xl">
              <div className="flex flex-col w-full lg:px-8" >
                <div className="hidden lg:flex bg-[#eff1f7] w-full rounded-lg h-8 mb-3 justify-items-center ">
                  <button
                    onClick={() => toggleTab(1)}
                    type="button"
                    className={(toggleState === 1 ? "bg-gray-100 text-blue-700" : "") + " text-sm font-medium text-[#0d53fd] w-full h-[28px] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 mt-[2px] "}
                  >
                    Members
                  </button>
                  <button
                    onClick={() => toggleTab(2)}
                    type="button"
                    className={(toggleState === 2 ? "bg-gray-100 text-blue-700" : "") + " text-sm font-medium text-[#0d53fd] w-full h-[28px] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 mt-[2px] "}
                  >
                    Post Approve
                  </button>
                  <button
                    onClick={() => toggleTab(3)}
                    type="button"
                    className={(toggleState === 3 ? "bg-gray-100 text-blue-700" : "") + " text-sm font-medium text-[#0d53fd] w-full h-[28px] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 mt-[2px] "}
                  >
                    Blocked
                  </button>
                </div>
                {/**block 1 */}

                <div className={(toggleState === 1 ? "block" : "hidden") + " flex flex-col h-full  bg-[#eff1f7] b   lg:p-4 p-2 "}>
                  <div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-green-500 font-[600]">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-green-500 font-[600]">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-green-500 font-[600]">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-green-500 font-[600]">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-green-500 font-[600]">@gmail.com</div>
                      </div>
                    </div>

                  </div>
                </div>
                {/**block 1 end */}
                {/**block 2 */}
                <div className={(toggleState === 2 ? "block" : "hidden") + " flex flex-col h-full  bg-[#eff1f7] b   lg:p-4 p-2 "}>
                <div className="bg-white p-3 rounded-lg">
                 <div className="flex justify-between">
                    <div className="flex">
                      <div className="w-12 h-12"><img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-500"/></div>
                      <div className="font-bold mt-2 ml-2">Ravi Raunak</div>
                    </div>
                    <div><BsThreeDots/></div>
                 </div>
                 <div className="text-left font-bold my-4 mx-2">We live life to enjoy it to it's fullest. </div>
                 <div className="h-64 px-3"><img src="./images/BUILD.jpg" className="h-full w-full rounded-2xl" /></div>
                 <div className="flex justify-center gap-4 my-4">
                  <button className="w-32 h-9 bg-blue-400 text-white rounded-xl font-bold px-2">Approve</button>
                  <button className="w-32 h-9 bg-red-400 text-white rounded-xl font-bold px-2">Decline</button>
                 </div>

                </div>
                </div>
                {/**end block 2 */}
                {/**block 3 */}
                <div className={(toggleState === 3 ? "block" : "hidden") + " flex flex-col h-full  bg-[#eff1f7] b   lg:p-4 p-2 "}>
                  <div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-red-400">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-red-400">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-red-400">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-red-400">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-red-400">@gmail.com</div>
                      </div>
                    </div>

                  </div>
                  


                </div>
                {/**end block 3 */}
              </div>
            </div>
          </div>
        </div>
        <Socialdesk/>
      </div>
      {/******editting form start******** */}

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
      {/******editting form end******** */}
    </div>
  );
}

export default Kpp;

export const SideBar = () => {



  const [state, setstate] = useState(
    {
      activeObjects: null,
      objects: [
        {
          name: 'Home',
          class: 'bi bi-house-door-fill  text-[#cbd0d5]',
          id: '1',
          // link: '/Final',
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
    // <BrowserRouter>
    <div>
      {/* <span className="absolute  text-4xl top-5 left-4 cursor-pointer" onclick="Openbar()">
  <i className="bi bi-filter-left  bg-gray-900 "></i>
</span> */}
      <div className="sidebar flex justify-between flex-col fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
   w-[250px] overflow-y-auto text-center bg-white shadow h-screen">
        <div className=" text-sm">
          <div className="p-2.5 mt-1 flex items-center rounded-md ">
            <i className="bi bi-app-indicator px-2 py-1 bg-[#0d53fd] rounded-md"></i>
            <h1 className="  ml-3 text-sm  font-bold">Navigate</h1>
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
            {/* <span onClick={handleClickOpen} className="text-sm ml-4 font-bold  ">Edit</span> */}




          </div>
        </div>
       
        <div className="flex">click here
        {/* <Link to='/Final'>home</Link> */}
        </div>
        {/* <Routes>
          <Route path="Final" element={<Final />} /> */}
            {/* <Final />
          </Route> */}
        {/* </Routes> */}
        {/* </div> */}
        
      </div>

    </div>
    /* </BrowserRouter> */

  )
}