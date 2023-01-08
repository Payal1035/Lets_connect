import React from 'react'

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

function Socialdesk() {
    return (
        <div><div className="">
            <div className="flex flex-col  w-full  my-6  ">
                <div className="  flex flex-col items-center bg-[#fffdfe] rounded-lg lg:px-8 py-4 p-8">
                    <h1 className="font-bold text-red-600 stroke-black  text-5xl mb-4">
                        Youtube
                    </h1>
                    <div className=' px-7 py-3 mb-3  cursor-pointer  bg-gray-200  text-gray-400 hover:text-gray-500 text-6xl rounded-full  hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset]'>
                    +
                    </div> {/**shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] */}

                    <button className='bg-red-600 px-4 py-1 rounded-lg my-3 text-white '>Login</button>

                    {/* {users.map(user => (<>
                        <img
                            src={user.YoutubeImage}
                            className="lg:h-28 border-4 bg-gray-300 border-solid border-gray-300   mb-3 lg:w-28 h-20 w-20 rounded-full"
                            alt=""
                        />

                       
                        <h1 className="text-2xl  font-bold  text-blue-700 mb-4">{user.YoutubeName}</h1>

                        <div className="flex mb-3">
                            <div className="flex flex-col items-center pl-2">
                                <h1 className="font-bold">{user.Subscribers}</h1>
                                <h2 className="text-[#888d91] font-bold text-[12px]">
                                    Subscribers
                                </h2>
                            </div>
                            <hr className=" bg-[#d6dce1]  w-[2px] mx-8 h-14 " />
                            <div className="flex flex-col items-center ">
                                <h1 className="font-bold">{user.MonthlyViews}</h1>
                                <h2 className="text-[#888d91] font-bold text-[12px]">
                                    Monthly Views
                                </h2>
                            </div>
                            <hr className=" bg-[#d6dce1] w-[2px] mx-8 h-14 " />
                            <div className="flex flex-col items-start">

                                <h1 className="font-bold">{user.Videos}</h1>
                                <h2 className="text-[#888d91] font-bold text-[12px] -ml-2">
                                    Videos
                                </h2>
                            </div>

                        </div>

                    </>

                    ))} */}
                </div>
                {/* <hr className=" bg-[#f6f7f9] w-3  h-full " /> */}
                <div className=" flex flex-col items-center bg-[#fffdfe] rounded-lg lg:px-8 py-4 p-8 mt-6">
                    <h1 className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-5xl h-[4.5rem]">
                        Instagram
                    </h1>

                    <div className=' px-7 py-3 mb-3 cursor-pointer  bg-gray-200  text-gray-400 hover:text-gray-500 text-6xl rounded-full  hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset]'>
                    +
                    </div> {/**shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] */}

                    <button className='bg-gradient-to-r from-purple-400 to-pink-600 px-4 py-1 rounded-lg my-3 text-white '>Login</button>

                    {/* {users.map(user => (<>
                        <img
                            src={user.InstagramImage}
                            className="lg:h-28 border-4  border-solid border-gray-300  mb-3 lg:w-28 h-20 w-20 rounded-full"
                            alt=""
                        />
                        <h1 className="text-2xl text-blue-700   font-bold mb-4 ">{user.InstagramName}</h1>

                        <div className="flex mb-3">
                            <div className="flex flex-col items-center">
                                <h1 className="font-bold">{user.InstagramPost}</h1>
                                <h2 className="text-[#888d91] font-bold text-[12px]">
                                    Post
                                </h2>
                            </div>
                            <hr className=" bg-[#d6dce1] w-[2px] mx-8 h-14 " />
                            <div className="flex flex-col items-center">

                                <h1 className="font-bold">{user.InstagramFollowers}</h1>
                                <h2 className="text-[#888d91] font-bold text-[12px]">
                                    Followers
                                </h2>
                            </div>

                        </div>

                    </>

                    ))} */}
                </div>
            </div>
        </div></div>
    )
}

export default Socialdesk
