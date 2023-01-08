import React from 'react'
import { useState } from 'react';
import Kpp from '../Newkpp/Kpp';


function Leftupper() {

    const [show, hide] = useState(false);
    return (
        <div>
        <div className={(show ? "hidden" : "block") + "bg-white text-center rounded-lg "}>
            <div className="h-20 w-full bg-[#98C9B4] rounded-lg pb-6" ></div>
            <img className="z-1 rounded object-cover w-[80%] h-24 relative bottom-9 m-auto " src='./images/BUILD.jpg' />

            <div className='pt-1 -mt-5'>
                <div className='text-2xl'>Music Creators</div>
                <p>@wave_music</p>
            </div>
            <h2 className="my-3 font-medium ">
                ✨penting gak penting yang <br /> penting posting✨
            </h2>

            <div className="flex justify-around text-base my-2 border-y-2 border-gray-700 py-2 ">
                <div>
                    <h1>64</h1>
                    <p>Members</p>
                </div>
                <div>
                    <h1>6,664</h1>
                    <p>Followers</p>
                </div>
            </div>

            <h1 onClick={() => hide(!show)} className="text-blue-400 mb-3 font-bold pb-3 w-full cursor-pointer">Group Info</h1>
        </div>
        <div className={(show ? "block" : "hidden") + ' absolute w-[60%] h-full bg-white z-[3] top-3 ml-[18%] rounded-lg mt-2 mb-2'}>
                <Kpp className=" bg-white"/>
            </div>
        </div>
    )
}

export default Leftupper
