import React from 'react'
import {
    FcStackOfPhotos,
    FcVideoFile,
    FcCalendar,
    FcBrokenLink,
    FcLikePlaceholder,
    FcSettings,
} from "react-icons/fc";
// import {AiFillSchedule} from "react-icons/ai";
import { BsPatchCheckFill, BsThreeDots } from "react-icons/bs";
import { FaRegCommentDots, FaShareSquare, FaRetweet } from "react-icons/fa";

function Postapprove() {
    return (
        <div className='p-4 bg-[#05141C] text-white' >
            <div className='flex lg:relative'>
                <div className='hidden md:block lg:w-[20%] h-screen bg-[#1B2730] rounded-2xl py-2 px-4 fixed'>
                    <div className='font-semibold text-xl'>
                        Manage groups
                    </div>
                    <div className='flex mt-2'>
                        <img src='./images/BUILD.jpg' className='w-14 h-14 p-1 rounded-lg' />
                        <div className='p-1' >
                            <div>FRiends</div>
                            <div className='text-gray-400 text-sm'>Group type</div>
                        </div>
                    </div>
                    <div className='my-4 flex flex-col gap-2'>
                        {/* <div className='flex justify-center bg-gray-800 py-1 border border-gray-600 cursor-pointer'>Community</div> */}
                        <div className='flex justify-center bg-gray-800 py-1 border border-gray-600 cursor-pointer'>Overview</div>
                    </div>
                    <div className='my-6 flex flex-col gap-3 border-b border-t border-gray-400 py-7 px-3'>
                    <div className='flex gap-3'>
                        <div className='text-white'><i class="bi bi-award-fill"></i></div>
                        <div>Admin Assit</div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='text-white'><i class="bi bi-emoji-smile-fill"></i></div>
                        <div>Requests</div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='text-white'><i class="bi bi-stickies-fill"></i></div>
                        <div>Pending Post</div>
                    </div>
                    {/* <div className='flex gap-3'>
                        <div className='text white'><i class="bi bi-question-diamond-fill"></i></div>
                        <div>Questions</div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='text-white'><i class="bi bi-bar-chart-fill"></i></div>
                        <div>Statistics</div>
                    </div> */}
                    </div>
                    <div className='my-6 flex flex-col gap-3 border-b border-gray-400 pb-7 px-3'>
                    <div className='flex gap-3'>
                        <div className='text-blue-800'><i class="bi bi-slash-square-fill"></i></div>
                        <div>Restricted</div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='text-red-400'><i class="bi bi-x-circle"></i></div>
                        <div>Blocked</div>
                    </div> 
                    </div>
                </div>
                <div className='md:mx-auto lg:ml-[23rem] md:ml-[12rem] md:w-[70%]'>
                    <div className="bg-[#1B2730] mx-auto w-[90%] rounded-lg p-4 pt-2 mb-4 md:pr-12 pr-0">
                        <div className="text-sm">
                            <div className="flex gap-1 mb-4 text-base">
                                <img
                                    className=" rounded-full object-cover w-10 h-10 relative mr-3"
                                    src="data:image/jpeg;base64,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"
                                    alt=""
                                />
                                <div>
                                    <h1 className=" flex gap-3 -ml-2 md:ml-0">HYPERBEAST</h1>
                                    <p className='text-slate-500'>2 hours ago</p>
                                </div>

                                <BsPatchCheckFill className="text-blue-400 flex h-5 text-sm md:text-base " />
                                <p>@HYPERBEAST</p>
                            </div>

                            <div className="px-14 mb-4 pl-2 md:pl-14">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                fugiat!!!
                            </div>

                            <div className="lg:flex lg:flex-row justify-start w-[90%] md:ml-14 ml-2 mr-7 p-2 rounded-lg border border-gray-400 h-[15rem] overflow-hidden md:flex md:flex-col md:justify-center">
                                <div className='lg:h-1/4 lg:w-2/4  px-2 py-1 md:flex md:flex-col md:justify-center lg:block '>
                                    <img
                                        className="rounded-xl md:h-40 lg:h-[13rem]"
                                        src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmobile%2F000%2F025%2F810%2Flol.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className='lg:w-[50%] px-2 overflow-hidden md:mt-2'><p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!
                                </p>
                                </div>
                            </div>

                            {/* <div className="flex pl-16 gap-1 justify-between px-5 mb-8 ">
                        <div className="flex gap-2 ">
                            <FcLikePlaceholder className="bg-red-500 rounded-full p-1 w-5 h-5" />
                            <FaRetweet className="bg-green-500 rounded-full p-1 w-5 h-5" />
                            <FaShareSquare className="bg-blue-500 rounded-full p-1 w-5 h-5" />
                            <p>241k</p>
                        </div>
                        <p className="">45 comments</p>
                       </div> */}

                            <div className="flex md:pl-16 pl-2 gap-1 justify-between lg:px-5 text-white mt-8 lg:mr-4 mr-2 md:mr-0 mb-2">
                                <div className='flex gap-1'>
                                <button className="flex gap-2 items-center py-1 lg:px-7 md:px-4 px-2 bg-gray-700 rounded-xl">
                                        <FcLikePlaceholder className="text-white" /> View Post
                                    </button>
                                    {/* <button className="flex gap-2 items-center py-1 px-3 border-gray-700 border-2 rounded-xl">
                                        <FaShareSquare />
                                    </button> */}
                                    
                                </div>
                                <div className='flex gap-2'>
                                <button className="flex gap-2 items-center py-1 lg:px-7 md:px-2 px-1 bg-gray-700 rounded-xl border-blue-500 border">
                                        <FcLikePlaceholder className="text-white" /> Approve
                                    </button>
                                <button className="flex gap-2 items-center py-1 lg:px-7 md:px-2 px-1 bg-gray-700 rounded-xl border-red-400 border">
                                    <FaRetweet /> Decline
                                </button>
                                </div>
                                {/* <button className="flex gap-2 items-center py-1 px-7 bg-gray-700 rounded-xl">
                            <FaRegCommentDots /> Comment
                        </button> */}
                                {/* <button className="flex gap-2 items-center py-1 px-3 border-gray-700 border-2 rounded-xl">
                                    <FaShareSquare />
                                </button> */}
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#1B2730] mx-auto w-[90%] rounded-lg p-4 pt-2 mb-4 md:pr-12 pr-0">
                        <div className="text-sm">
                            <div className="flex gap-1 mb-4 text-base">
                                <img
                                    className=" rounded-full object-cover w-10 h-10 relative mr-3"
                                    src="data:image/jpeg;base64,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"
                                    alt=""
                                />
                                <div>
                                    <h1 className=" flex gap-3 -ml-2 md:ml-0">HYPERBEAST</h1>
                                    <p className='text-slate-500'>2 hours ago</p>
                                </div>

                                <BsPatchCheckFill className="text-blue-400 flex h-5 text-sm md:text-base " />
                                <p>@HYPERBEAST</p>
                            </div>

                            <div className="px-14 mb-4 pl-2 md:pl-14">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                fugiat!!!
                            </div>

                            <div className="lg:flex lg:flex-row justify-start w-[90%] md:ml-14 ml-2 mr-7 p-2 rounded-lg border border-gray-400 h-[15rem] overflow-hidden md:flex md:flex-col md:justify-center">
                                <div className='lg:h-1/4 lg:w-2/4  px-2 py-1 md:flex md:flex-col md:justify-center lg:block '>
                                    <img
                                        className="rounded-xl md:h-40 lg:h-[13rem]"
                                        src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmobile%2F000%2F025%2F810%2Flol.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className='lg:w-[50%] px-2 overflow-hidden md:mt-2'><p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!
                                </p>
                                </div>
                            </div>

                            {/* <div className="flex pl-16 gap-1 justify-between px-5 mb-8 ">
                        <div className="flex gap-2 ">
                            <FcLikePlaceholder className="bg-red-500 rounded-full p-1 w-5 h-5" />
                            <FaRetweet className="bg-green-500 rounded-full p-1 w-5 h-5" />
                            <FaShareSquare className="bg-blue-500 rounded-full p-1 w-5 h-5" />
                            <p>241k</p>
                        </div>
                        <p className="">45 comments</p>
                       </div> */}

                            <div className="flex md:pl-16 pl-2 gap-1 justify-between lg:px-5 text-white mt-8 lg:mr-4 mr-2 md:mr-0 mb-2">
                                <div className='flex gap-1'>
                                <button className="flex gap-2 items-center py-1 lg:px-7 md:px-4 px-2 bg-gray-700 rounded-xl">
                                        <FcLikePlaceholder className="text-white" /> View Post
                                    </button>
                                    {/* <button className="flex gap-2 items-center py-1 px-3 border-gray-700 border-2 rounded-xl">
                                        <FaShareSquare />
                                    </button> */}
                                    
                                </div>
                                <div className='flex gap-2'>
                                <button className="flex gap-2 items-center py-1 lg:px-7 md:px-2 px-1 bg-gray-700 rounded-xl border-blue-500 border">
                                        <FcLikePlaceholder className="text-white" /> Approve
                                    </button>
                                <button className="flex gap-2 items-center py-1 lg:px-7 md:px-2 px-1 bg-gray-700 rounded-xl border-red-400 border">
                                    <FaRetweet /> Decline
                                </button>
                                </div>
                                {/* <button className="flex gap-2 items-center py-1 px-7 bg-gray-700 rounded-xl">
                            <FaRegCommentDots /> Comment
                        </button> */}
                                {/* <button className="flex gap-2 items-center py-1 px-3 border-gray-700 border-2 rounded-xl">
                                    <FaShareSquare />
                                </button> */}
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#1B2730] mx-auto w-[90%] rounded-lg p-4 pt-2 mb-4 md:pr-12 pr-0">
                        <div className="text-sm">
                            <div className="flex gap-1 mb-4 text-base">
                                <img
                                    className=" rounded-full object-cover w-10 h-10 relative mr-3"
                                    src="data:image/jpeg;base64,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"
                                    alt=""
                                />
                                <div>
                                    <h1 className=" flex gap-3 -ml-2 md:ml-0">HYPERBEAST</h1>
                                    <p className='text-slate-500'>2 hours ago</p>
                                </div>

                                <BsPatchCheckFill className="text-blue-400 flex h-5 text-sm md:text-base " />
                                <p>@HYPERBEAST</p>
                            </div>

                            <div className="px-14 mb-4 pl-2 md:pl-14">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                fugiat!!!
                            </div>

                            <div className="lg:flex lg:flex-row justify-start w-[90%] md:ml-14 ml-2 mr-7 p-2 rounded-lg border border-gray-400 h-[15rem] overflow-hidden md:flex md:flex-col md:justify-center">
                                <div className='lg:h-1/4 lg:w-2/4  px-2 py-1 md:flex md:flex-col md:justify-center lg:block '>
                                    <img
                                        className="rounded-xl md:h-40 lg:h-[13rem]"
                                        src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmobile%2F000%2F025%2F810%2Flol.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className='lg:w-[50%] px-2 overflow-hidden md:mt-2'><p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!fugiat!!!Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
                                    fugiat!!!
                                </p>
                                </div>
                            </div>

                            {/* <div className="flex pl-16 gap-1 justify-between px-5 mb-8 ">
                        <div className="flex gap-2 ">
                            <FcLikePlaceholder className="bg-red-500 rounded-full p-1 w-5 h-5" />
                            <FaRetweet className="bg-green-500 rounded-full p-1 w-5 h-5" />
                            <FaShareSquare className="bg-blue-500 rounded-full p-1 w-5 h-5" />
                            <p>241k</p>
                        </div>
                        <p className="">45 comments</p>
                       </div> */}

                            <div className="flex md:pl-16 pl-2 gap-1 justify-between lg:px-5 text-white mt-8 lg:mr-4 mr-2 md:mr-0 mb-2">
                                <div className='flex gap-1'>
                                <button className="flex gap-2 items-center py-1 lg:px-7 md:px-4 px-2 bg-gray-700 rounded-xl">
                                        <FcLikePlaceholder className="text-white" /> View Post
                                    </button>
                                    {/* <button className="flex gap-2 items-center py-1 px-3 border-gray-700 border-2 rounded-xl">
                                        <FaShareSquare />
                                    </button> */}
                                    
                                </div>
                                <div className='flex gap-2'>
                                <button className="flex gap-2 items-center py-1 lg:px-7 md:px-2 px-1 bg-gray-700 rounded-xl border-blue-500 border">
                                        <FcLikePlaceholder className="text-white" /> Approve
                                    </button>
                                <button className="flex gap-2 items-center py-1 lg:px-7 md:px-2 px-1 bg-gray-700 rounded-xl border-red-400 border">
                                    <FaRetweet /> Decline
                                </button>
                                </div>
                                {/* <button className="flex gap-2 items-center py-1 px-7 bg-gray-700 rounded-xl">
                            <FaRegCommentDots /> Comment
                        </button> */}
                                {/* <button className="flex gap-2 items-center py-1 px-3 border-gray-700 border-2 rounded-xl">
                                    <FaShareSquare />
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Postapprove
