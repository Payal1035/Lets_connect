import React from 'react';
import "./Leftbar.css";

function Leftbar() {
    return (
        <div>
            <div className='w-[17%] bg-[#3a1f8f] h-screen'>
                <div className='flex flex-col w-full p-4 pr-0 h-full'>
                    <div className='flex justify-center w-full text-2xl font-bold text-white' >Airnow</div>
                    <div className='w-full'>
                        <div className='uppercase mt-6 text-gray-400 font-semibold'>manage</div>
                        <div className='w-full bg-[#3a1f8f] menu'>
                            {/* <div>
                            <div className='bg-white'>
                                <div className='w-full h-4 bg-[#3a1f8f] rounded-br-[40px]'></div>
                            </div>
                            <div className='bg-[#3a1f8f]'>
                                <div className='w-full h-8 bg-white pl-4 pt-1 rounded-l-[40px]'>Proxy</div>
                            </div>
                            <div className='bg-white'>
                                <div className='w-full h-4 bg-[#3a1f8f] rounded-tr-[40px]'></div>
                            </div>
                        </div> */}

                            {/* <div> */}
                                {/* <div className='bg-white'>
                                <div className='w-full h-4 bg-[#3a1f8f] rounded-br-[40px]'></div>
                            </div> */}
                                {/* <div className='bg-[#3a1f8f]'> */}
                                {/* <div className='w-full h-9 before:contents  bg-[#3a1f8f] text-white text-medium font-medium pl-6 pt-2 rounded-l-[40px]'>Proxy</div> */}
                                {/* </div> */}
                                {/* <div className='bg-white'>
                                <div className='w-full h-4 bg-[#3a1f8f] rounded-tr-[40px]'></div>
                            </div> */}
                            {/* </div> */}

                            <a href='#' className='cursor-pointer' id='Balance'>
                                <div className='w-full h-9 rounded-l-[40px] pt-2  pl-6'>Balance</div>
                            </a>
                            <a href='#' className='cursor-pointer' id='Online'>
                                <div className='w-full h-9 text-medium font-medium rounded-l-[40px] pt-2  pl-6'>Online Check</div>
                            </a>
                            <a href='#' className='cursor-pointer' id='Affiliate'>
                                <div className='w-full h-9 text-medium font-medium rounded-l-[40px] pt-2  pl-6'>Affiliate system</div>
                            </a>
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <div className='uppercase mt-6 text-gray-400 font-semibold'>support</div>
                        <div className='w-full bg-[#3a1f8f]'>
                            <div className='w-full h-9 bg-[#3a1f8f] text-white text-medium font-medium rounded-l-[40px] pt-2  pl-6'>Ticket</div>
                            <div className='w-full h-9 bg-[#3a1f8f] text-white text-medium font-medium rounded-l-[40px] pt-2  pl-6'>FAQ</div>
                        </div>
                    </div>
                    <div className='flex flex-col-reverse h-full p-3 pr-7 w-full '>
                        <div className='h-40 rounded-2xl w-full bg-[#5936cc]'></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Leftbar
