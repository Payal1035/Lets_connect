import React from 'react'

function Edit() {
    return (
        <div className='w-[70%] my-[7rem] ml-[15%] h-[57%] p-4 border-4 border-gray-400 bg-[#fffdfe] rounded-lg  shadow-xl '> {/**shadow-[5px_5px_7px_0px_rgba(0,0,0,0.2)] */}
            <div className='flex w-full text-2xl'>Edit Details</div>
            <hr />
            <div className='my-2 pl-5'>
                <div className="">
                  <div className='px-1 w-[15%] text-left font-serif font-semibold'>Name</div>
                  <input type="text" aria-label='Name' placeholder='Enter your name' className=' rounded h-9 flex px-2 border border-gray-400 w-[70%]' />
                </div>
                <div className=" my-2 w-full ">
                  <div className=' w-[15%] text-left px-1 font-serif font-semibold'>Email</div>
                  <input type="Email" aria-label='' placeholder='*********@gmail.com' className='h-9 flex rounded px-2 border border-gray-400 w-[70%]' />
                </div>
                <div className="flex gap-2">
                <div className=" my-2 w-[50%]">
                  <div className=' text-left px-1 font-serif font-semibold'>Gender</div>
                  <input type="text" aria-label='Gender' placeholder='Male/Female' className='h-9 flex w-[80%] rounded px-2 border border-gray-400' />
                </div>
                

                <div className=" my-2 w-[50%]">
                  <div className=' text-left px-1 font-serif font-semibold'>Date of Birth</div>
                  <input type="date" aria-label='' placeholder='' className='h-9 flex rounded w-[80%] px-2 border border-gray-400 ' />
                </div>
                </div>
                <div className=" flex flex-col my-2 w-full pr-12">
                  <div className=' w-[15%] text-left px-1 font-serif font-semibold'>City</div>
                  <input type="text" aria-label='' placeholder='City' className='rounded grow h-9 flex px-2 border border-gray-400 ' />
                </div>
                <div className=" flex flex-col my-2 pr-12">
                  <div className=' text-left font-serif font-semibold'>Skills</div>
                  <input type="text" aria-label='' placeholder='' className=' rounded  grow h-9 border border-gray-400' />
                </div>
                <div className=" flex flex-col my-2 pr-12">
                  <div className=' text-left font-serif font-semibold '>Languages</div>
                  <input type="text" aria-label='' placeholder='' className='rounded  grow h-9 border border-gray-400' />
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <button className="bg-blue-600 text-white border p-2 px-4   hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] rounded-lg font-semibold ">Save changes</button>
              </div>
        </div>
    )
}

export default Edit
