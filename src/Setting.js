import React from 'react'
import { CSSProperties } from './style.css'

function Setting() {
    return (
        <div>
            <div className="block md:flex">
                {/* left side */}
                <div className="bg-[#1f1d2c] text-white h-content md:w-[28%] pt-4">
                    <div className="flex -mr-5 md:justify-center md:ml-1 md:-mb-4 md:mr-9">
                        <div>
                            <img src="images/OIP.jpg" alt="Profile image" className="w-12 m-3 rounded-full" />
                        </div>
                        <div className="flex-column m-3">
                            <div className="text-white font-bold">Samantha</div>
                            <div className="text-white text-sm">xyz@gmail.com</div>
                        </div>
                        <div className=" w-11 m-2 p-2 pt-5 flex justify-end flex-row-reverse">
                            <a href="#">
                                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-setting-essentials-pack-tanah-basah-glyph-tanah-basah.png"
                                    className="h-6 w-9 bg-gray-300 rounded-md" />
                            </a>

                        </div>

                    </div>
                    <div className="flex-col mt-9 pr-6 text-sm ">
                        <div className="flex-col mr-6 ">
                            <div className="flex justify-items-start m-3 text-gray-400 pl-4 mb-4">Menu</div>
                            <div className="flex-column ">
                                <div className="flex border-b-2 border-gray-700 p-3 pt-1 pb-4 cursor-pointer ">
                                    <div className="w-7 h-7 ml-3">
                                        <img src="images/home.png" alt="" />
                                    </div>
                                    <div className="ml-3 mt-1">Dashboard</div>
                                </div>
                                <div className="flex border-b-2 border-gray-700 p-3 pb-4 cursor-pointer ">
                                    <div className="w-7 h-7 ml-3">
                                        <img src="images/icons8-email-send-48.png" alt="" />
                                    </div>
                                    <div className="ml-3 mt-1">Send money</div>
                                </div>
                                <div className="flex border-b-2 border-gray-700 p-3 pb-4 cursor-pointer ">
                                    <div className="w-7 h-7 ml-3">
                                        <img src="images/icons8-wallet-64.png" alt="" />
                                    </div>
                                    <div className="ml-3 mt-2">Top-up wallet</div>
                                </div>
                                <div className="flex border-b-2 border-gray-700 p-3 pb-4 cursor-pointer ">
                                    <div className="w-7 h-7 ml-3">
                                        <img src="images/icons8-wallet-64 (1).png" alt="" />
                                    </div>
                                    <div className="ml-3 mt-2">Withdraw</div>
                                </div>
                                <div className="flex border-b-2 border-gray-700 p-3 pb-4 cursor-pointer ">
                                    <div className="w-7 h-7 ml-3">
                                        <img src="images/icons8-wallet-64 (2).png" alt="" />
                                    </div>
                                    <div className="ml-3 mt-2">Bill payment</div>
                                </div>
                                <div className="flex border-b-2 border-gray-700 p-3 pb-4 cursor-pointer ">
                                    <div className="w-7 h-7 ml-3">
                                        <img src="images/home.png" alt="" />
                                    </div>
                                    <div className="ml-3 mt-1">Settings</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex-col mt-4 pr-6 mr-6 text-sm">
                        <div className="flex-col">
                            <div className="flex justify-items-start m-3 text-gray-400 pl-4 pt-6">Other Menu</div>
                            <div className="flex-column ">
                                <div className="flex border-b-2 border-gray-700 p-3 pb-4 cursor-pointer pt-1">
                                    <div className="w-7 h-7 ml-3">
                                        <img src="images/home.png" alt="" />
                                    </div>
                                    <div className="ml-3 mt-1">Dashboard</div>
                                </div>
                                <div className="flex border-b-2 border-gray-700 p-3 pb-4 cursor-pointer ">
                                    <div className="w-7 h-7 ml-3">
                                        <img src="images/home.png" alt="" />
                                    </div>
                                    <div className="ml-3 mt-1">Dashboard</div>
                                </div>
                                <div className="flex  p-3  cursor-pointer ">
                                    <div className="w-7 h-7 ml-3">
                                        <img src="images/home.png" alt="" />
                                    </div>
                                    <div className="ml-3 mt-1">Dashboard</div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-4 bg-[#262837] text-white">
                    <div className="font-bold text-xl p-4 pb-2">Settings</div>
                    <div className="p-1 pt-2">
                        <div className="bg-[#226fed] p-6 rounded-3xl">
                            <div className="flex">
                                <div className="pb-3">
                                    <div className="box">
                                        <div className="percent">
                                            <svg>
                                                <circle cx="60" cy="60" r="50"></circle>
                                                <circle cx="60" cy="60" r="50"></circle>
                                            </svg>
                                            <div className="number">
                                                <h3 className="text-white text-xl font-medium -ml-3 -mt-4">75<span>%</span></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-2">
                                    <div className="font-bold">Profile Information</div>
                                    <div>Complete your profile to unlock all features</div>
                                </div>
                            </div>
                            <div
                                className="bg-white  items-center justify-center text-center text-[#226fed] font-bold border-white rounded-3xl p-2 -mt-2">
                                Complete My Profile
                            </div>
                        </div>

                        <div className="flex  p-2 border-b-2 border-gray-700 pt-4 mt-1 pb-4 text-sm">
                            <img src="images/fav.png" alt="" className="w-8 h-9 p-1 " />
                            <div className="flex-cloumn">
                                <div className="font-medium p-2">Appereances</div>
                                <div className="pl-2">Dark and light mode, Font size</div>
                            </div>
                            <img src="https://img.icons8.com/material-sharp/24/000000/chevron-right.png"
                                className="w-8 m-3  h-9 pt-3" />
                        </div>
                        <div className="flex  p-2 border-b-2 border-gray-700 mt-1 pb-4 text-sm">
                            <img src="images/acc.png" alt="" className="w-8 h-9 p-1 " />
                            <div className="flex-cloumn">
                                <div className="font-medium p-2">Account Settings</div>
                                <div className="pl-2">Personal  Informations , E- mail</div>
                            </div>
                            <img src="https://img.icons8.com/material-sharp/24/000000/chevron-right.png"
                                className="w-8 m-3 h-9 pt-3" />
                        </div>
                        <div className="flex  p-2 border-b-2 border-gray-700 mt-1 pb-4 text-sm">
                            <img src="images/security.png" alt="" className="w-8 h-9 p-1 " />
                            <div className="flex-cloumn">
                                <div className="font-medium p-2">Security</div>
                                <div className="pl-2">Dark and light mode, Font size</div>
                            </div>
                            <img src="https://img.icons8.com/material-sharp/24/000000/chevron-right.png"
                                className="w-8 m-3 h-9 pt-3" />
                        </div>
                        <div className="flex p-2 border-b-2 border-gray-700 mt-1 pb-4 text-sm">
                            <img src="images/fav.png" alt="" className="w-8 h-9 p-1 " />
                            <div className="flex-cloumn">
                                <div className="font-medium p-2">Appereances</div>
                                <div className="pl-2">Dark and light mode, Font size</div>
                            </div>
                            <img src="https://img.icons8.com/material-sharp/24/000000/chevron-right.png"
                                className="w-8 m-3 h-9 pt-3" />
                        </div>
                        <div className="flex  p-2 mt-1 pb-4 text-sm">
                            <img src="images/home.png" alt="" className="w-8 h-9 p-1 " />
                            <div className="flex-cloumn">
                                <div className="font-medium p-2">Account Settings</div>
                                <div className="pl-2">Dark and light mode, Font size</div>
                            </div>
                            <img src="https://img.icons8.com/material-sharp/24/000000/chevron-right.png"
                                className="w-8 m-3 h-9 pt-3" />
                        </div>

                    </div>
                </div>
                <div className=" bg-[#262837] text-white p-4 pt-1 md:w-8/12 border-l-2 border-gray-700">
                    <div className="text-white font-bold m-8 text-xl  ">Account Settings</div>
                    <div>
                        <div className="font-bold m-8  ml-2 pl-6 border-t-2 border-gray-700 pt-4">Personal informations</div>
                        <div className="text-gray-1 ml-8 -mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                        <form className="ml-8 mt-6">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-first-name">
                                        First Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-[#262837] text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="text" placeholder="Jane" />

                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-last-name">
                                        Last Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-[#262837] text-white border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="gmail">
                                        Email
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-[#262837] text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-gmail" type="email" placeholder="*************@gmial.com" />

                                </div>
                            </div>

                        </form>

                    </div>
                    <div className="mt-5 border-b-2 border-t-2 border-gray-700">
                        <div className="font-bold m-8">Notifications</div>
                        <div className="text-gray-1 ml-8 -mt-5">Choose type of notifications you want to recieve</div>
                        <div className="mt-2  ">
                            <div className="flex">
                                <div className="flex justify-center">
                                    <div className="flex m-8 -mt-2 ">
                                        <div className="form-check p-2 mt-1 ">
                                            <input
                                                className="form-check-input appearance-none h-4 w-4 border border-gray-700 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox" value="" id="flexCheckDefault" checked />
                                            <label className="form-check-label inline-block text-white" for="flexCheckDefault">
                                                Default checkbox
                                            </label>
                                        </div>
                                        <div className="form-check p-2 ml-24 mt-1">
                                            <input
                                                className="form-check-input appearance-none h-4 w-4 border border-gray-700 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox" value="" id="flexCheckChecked" />
                                            <label className="form-check-label inline-block text-white" for="flexCheckChecked">
                                                Checked checkbox
                                            </label>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="flex">
                                <div className="flex justify-center">
                                    <div className="flex m-8 -mt-2">
                                        <div className="form-check p-2 -mt-3">
                                            <input
                                                className="form-check-input appearance-none h-4 w-4 border border-gray-700 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label inline-block text-white" for="flexCheckDefault">
                                                Default checkbox
                                            </label>
                                        </div>
                                        <div className="form-check p-2 ml-24 -mt-3">
                                            <input
                                                className="form-check-input appearance-none h-4 w-4 border border-gray-700 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox" value="" id="flexCheckChecked" checked />
                                            <label className="form-check-label inline-block text-white" for="flexCheckChecked">
                                                Checked checkbox
                                            </label>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="flex">
                                <div className="flex justify-center">
                                    <div className="flex m-8 -mt-2">
                                        <div className="form-check p-2 -mt-3">
                                            <input
                                                className="form-check-input appearance-none h-4 w-4 border border-gray-700 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label inline-block text-white" for="flexCheckDefault">
                                                Default checkbox
                                            </label>
                                        </div>
                                        <div className="form-check p-2 ml-24 -mt-3">
                                            <input
                                                className="form-check-input appearance-none h-4 w-4 border border-gray-700 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox" value="" id="flexCheckChecked" checked />
                                            <label className="form-check-label inline-block text-white" for="flexCheckChecked">
                                                Checked checkbox
                                            </label>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="flex pl-6 pt-3 justify-center">
                        <div className="p-4">
                            <button className="bg-[#262837] hover:bg-[#525298] text-white font-bold py-2 px-12 border border-[#262837] rounded-3xl">
                                Discard Changes
                            </button>
                        </div>
                        <div className="p-4">
                            <button className="bg-[#525298] hover:bg-[#525298] text-white font-bold py-2 px-12 border border-[#262837] rounded-3xl">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting
