import React from 'react'

function Adminpage() {
    return (
        <div className='bg-gray-900 w-[100%] h-screen py-9 px-12'>
            <div className='bg-gray-700 w-[90%] h-5/6 mx-auto text-white rounded-lg p-4 px-6'>
                <div className='text-2xl'>Share Project</div>
                <div className='flex gap-3 mt-4 bg-gray-600 p-3 rounded-xl'>
                    <div>
                        <img
                            className=" rounded-full object-cover w-12 h-12 relative m-auto "
                            src="data:image/jpeg;base64,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"
                            alt=""
                        /></div>
                    <div className='grow'>
                        <div>Marc morgan is asking to edit</div>
                        <div>mrgn@gmail.com</div>
                    </div>
                    <div className='flex gap-2 justify-center mt-1'>
                        <button className='border-2 px-4 h-10 py-1 rounded-xl bg-white text-red-500'>Deny</button>
                        <button className='border-2 px-4 h-10 py-1 rounded-xl bg-white text-blue-500'>Approve</button>
                    </div>
                </div>
                <div className='flex py-6 gap-10'>
                    <div className='flex h-12 grow'>
                        <input type="email" class="form-control grow
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                         bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com" />
                        {/* <label for="floatingInput" class="text-gray-700">Email address</label> */}
                        <select class="form-select appearance-none
                             block
                             w-2/6
                             px-3
                             py-1
                             text-base
                             font-normal
                             text-gray-700
                             bg-white bg-clip-padding bg-no-repeat
                             border border-solid border-gray-300
                             rounded
                             transition
                             ease-in-out
                             m-0
                             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                            <option selected>Only view</option>
                            <option value="1">edit</option>
                            <option value="2">Admin</option>
                            {/* <option value="3">Three</option> */}
                        </select>
                    </div>
                    <div className='p-1'>
                        <button className='bg-blue-400 px-4 py-2 rounded'>Send Invite</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminpage
