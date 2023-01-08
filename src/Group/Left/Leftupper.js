import React from 'react'
import { useState } from 'react';
import Kpp from '../Newkpp/Kpp';


function Leftupper() {

    const [show, hide] = useState(false);
    return (
        <div>
        <div className={"bg-white text-center rounded-lg "}>
            <div className="h-20 w-full bg-[#98C9B4] rounded-lg pb-6" ></div>
            <img className="z-1 rounded object-cover w-[80%] h-24 relative bottom-9 m-auto " src='./images/BUILD.jpg' />

            <div className='pt-1 -mt-5'>
                <div className='text-2xl'>Payal Kumari Rajput</div>
                <p>payalkumari@</p>
            </div>
            <h2 className="my-3 font-medium ">
                ✨Think before you work<br /> penting posting✨
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
            <div onClick={() => hide(!show)} className=" w-full flex justify-center cursor-pointer text-blue-400 hover:text-green-600 ">
            
            <h1  className=" mb-0 mt-2 font-bold pb-3 w-full cursor-pointer animate-bounce">View Info </h1>
            </div>
        </div>
        <div className={(show ? "block" : "hidden") + ' absolute w-[100%] h-full bg-[#eff1f7] z-[3] top-0 rounded-lg mt-2 mb-2'}>
                <Kpp className=""/>
            </div>
        </div>
    )
}

export default Leftupper
