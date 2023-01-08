import React from 'react';
import "./Copy.css";

function Copy() {
  return (
    <div className=' bg-blue-800 h-full flex flex-col  fixed lg:w-[18%] w-[22%] '> {/**bg-[#3a1f8f] bg-gradient-to-l from-blue-400 to-blue-700 rounded-r-[20px]*/}
      <div className='flex flex-col p-4  w-full pr-0 h-full'>
        <div className='flex justify-center w-full text-3xl font-bold text-blue-100'>Airnow</div>
        <hr className='w-[90%] justify-center mt-2' />
        <div className='w-full flex flex-col mt-[8%]'>
          {/* <div className='uppercase text-white text-lg font-semibold text-left'>manage</div> */}
          <div class="menu w-full ">
            <a href="#home" id="home" className='p-2'>
              <div className=' text-left pl-4 flex gap-2 text-lg '>
                <div className=''><i class="bi bi-columns-gap"></i></div>
                <div className='px-2'>Dashboard</div>
              </div>
            </a>
            <div className='h-1'></div>
            <a href="#profile" id="profile" className='p-2'>
              <div className=' text-left pl-4 flex gap-2 text-lg'>
                <div className=''><i class="bi bi-envelope-paper"></i></div>
                <div className='px-2'>Inbox</div>
              </div>
            </a>
            <div className='h-1'></div>
            <a href="#cart" id="cart" className='p-2'>
              <div className=' text-left pl-4 flex gap-2 text-lg'>
                <div className=''><i class="bi bi-calendar-week"></i></div>
                <div className='px-2'>Calendar</div>
              </div>
            </a>
            <div className='h-2'></div>
            <div className='uppercase text-left text-blue-200 '>Recruitment</div>
            <div className='h-1'></div>
            <a href="#settings" id="settings" className='p-2'>
              <div className=' text-left pl-4 flex gap-2 text-lg'>
                <div className=''><i class="bi bi-briefcase"></i></div>
                <div className='px-2'>Jobs</div>
              </div>
            </a>
            <div className='h-1'></div>
            <a href="#Tickets" id="Tickets" className='p-2'>
              <div className=' text-left pl-4 flex gap-2 text-lg'>
                <div className=''><i class="bi bi-people-fill"></i></div>
                <div className='px-2'>Candidates</div>
              </div>
            </a>
            <div className='h-1'></div>
            <a href="#FAQs" id="FAQs" className='p-2'>
              <div className=' text-left pl-4 flex gap-2 text-lg'>
                <div className=''><i class="bi bi-triangle"></i></div>
                <div className='px-2'>Referrals</div>
              </div>
            </a>
            <div className='h-1'></div>
            <a href="#Career Site" id="Career Site" className='p-2'>
              <div className=' text-left pl-4 flex gap-2 text-lg'>
                <div className=''><i class="bi bi-pc-display"></i></div>
                <div className='px-2'>Career Site</div>
              </div>
            </a>
            <div className='h-2'></div>
            <div className='uppercase text-left text-blue-200'>Organization</div>
            <div className='h-1'></div>
            <a href="#Employee" id="Employee" className='p-2'>
              <div className=' text-left pl-4 flex gap-2 text-lg'>
                <div className=''><i class="bi bi-person"></i></div>
                <div className='px-2'>Employee</div>
              </div>
            </a>
            <div className='h-1'></div>
            <a href="#Structure" id="Structure" className='p-2'>
              <div className=' text-left pl-4 flex gap-2 text-lg'>
                <div className=''><i class="bi bi-diagram-3-fill"></i></div>
                <div className='px-2'>Structure</div>
              </div>
            </a>
            <div className='h-1'></div>
            <a href="#Report" id="Report" className='p-2'>
              <div className=' text-left pl-4 flex gap-2 text-lg'>
                <div className=''><i class="bi bi-pie-chart-fill"></i></div>
                <div className='px-2'>Report</div>
              </div>
            </a>
            <div className='h-1'></div>
            <a href="#Settings" id="Settings" className='p-2'>
              <div className=' text-left pl-4 flex gap-2 text-lg'>
                <div className=''><i class="bi bi-gear"></i></div>
                <div className='px-2'>Settings</div>
              </div>
            </a>
          </div>
        </div>
        {/* <div className='w-full flex flex-col mt-[87%]'>
          <div className='uppercase text-white text-lg  font-semibold text-left'>Support</div>
          <div class="menu w-[20%] fixed mt-7">
            

          </div>
        </div> */}
      </div>
      <div className='flex flex-col-reverse h-full py-3 px-3 w-full '>
        <div className='h-20 border rounded-2xl w-full '></div> {/****bg-gradient-to-r from-blue-600 to-blue-900 */}
      </div>
    </div>
  )
}

export default Copy
