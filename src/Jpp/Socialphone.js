import React from 'react';

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

function Social() {
  
  return (
    <div>
        <div className="flex flex-col lg:flex-row w-full bg-[#fffdfe] m-6 h-full ">
                  <div className="lg:w-1/2  flex flex-col items-center lg:px-8 lg:py-3 p-8 ">
                    <h1 className="font-bold text-red-600 stroke-black  text-6xl mb-2">
                      Youtube
                    </h1>
                    {users.map(user => (<>
                      <img
                        src={user.YoutubeImage}
                        className="lg:h-28 border-4 border-solid border-gray-300   mb-3 lg:w-28 h-20 w-20 rounded-full"
                        alt=""
                      />
                      
                      <h1 className="text-2xl  font-bold  text-blue-700 mb-4">{user.YoutubeName}</h1>

                      <div className="flex mb-3">
                        <div className="flex flex-col items-center">
                          <h1 className="font-bold">{user.Subscribers}</h1>
                          <h2 className="text-[#888d91] font-bold text-[12px]">
                            Subscribers
                          </h2>
                        </div>
                        <hr className=" bg-[#d6dce1] w-[2px] mx-8 h-full " />
                        <div className="flex flex-col items-center">
                          <h1 className="font-bold">{user.MonthlyViews}</h1>
                          <h2 className="text-[#888d91] font-bold text-[12px]">
                            Monthly Views
                          </h2>
                        </div>
                        <hr className=" bg-[#d6dce1] w-[2px] mx-8 h-full " />
                        <div className="flex flex-col items-center">

                          <h1 className="font-bold">{user.Videos}</h1>
                          <h2 className="text-[#888d91] font-bold text-[12px]">
                            Videos
                          </h2>
                        </div>

                      </div>

                    </>

                    ))}
                  </div>
                  <hr className=" bg-[#f6f7f9] w-full h-2" />
                  <div className="lg:w-1/2 bg-white flex flex-col items-center lg:px-8 lg:py-3 p-8 h-80">
                    <h1 className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-6xl  mb-5 z-[4]">
                      Instagram
                    </h1>
                    {users.map(user => (<>
                      <img
                        src={user.InstagramImage}
                        className="lg:h-28 border-4 border-solid border-gray-300 mt-3 mb-3 lg:w-28 h-20 w-20 rounded-full"
                        alt=""
                      />
                      <h1 className="text-2xl text-blue-700   font-bold mb-4 ">{user.InstagramName}</h1>

                      <div className="flex ">
                        <div className="flex flex-col items-center">
                          <h1 className="font-bold">{user.InstagramPost}</h1>
                          <h2 className="text-[#888d91] font-bold text-[12px]">
                            Post
                          </h2>
                        </div>
                        <hr className=" bg-[#d6dce1] w-[2px] mx-8 h-full " />
                        <div className="flex flex-col items-center">

                          <h1 className="font-bold">{user.InstagramFollowers}</h1>
                          <h2 className="text-[#888d91] font-bold text-[12px]">
                            Followers
                          </h2>
                        </div>

                      </div>

                    </>

                    ))}
                  </div>
                </div>
    </div>
  )
}

export default Social
