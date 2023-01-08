import React from "react";
import { BsBell } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { ImDownload2, ImUpload2 } from "react-icons/im";
import Graph2 from "./Graph2";
import Promo from "./Promo";

function Balance() {
  return (
    <div className="h-full p-8 bg-white flex-1 border-2 border-gray-300 font-normal text-black">
      {/* first block  */}

      <div className="flex-col lg:flex-row flex  justify-around">

        {/* left side  */}
        <div className=" lg:w-2/3 w-full">
          <div className="flex justify-between items-center  border-gray-300 pb-5 mb-5">
            <h1 className="text-xl font-semibold">Balance</h1>

            <div className="flex gap-3 items-center">
              <BsBell />
              <img
                className=" rounded-full object-cover h-8 w-8"
                src="https://static.vecteezy.com/system/resources/thumbnails/000/142/432/small/smiling-young-man-with-beard-s-headshot-vector.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-between items-center mb-5">
            <h1 className="font-bold ">Daily balance overview </h1>

            <div className="flex items-center gap-5">
              <button className="flex  items-center">
                <GoPrimitiveDot className="text-blue-400" /> spent
              </button>
              <button className="flex items-center">
                <GoPrimitiveDot className="text-indigo-700" />
                Referral{" "}
              </button>
              <select
                className="border-2 border-gray-200 w-36 shadow-sm rounded-lg p-1"
                name="cars"
                id="cars"
              >
                <option value="volvo">14 days</option>
                <option value="saab">28 days</option>
                <option value="opel"> 56 days</option>
                <option value="audi"> 64 days</option>
              </select>
            </div>
          </div>

          {/* graph2 */}

          <div className=" w-full  mb-5">
            <Graph2 />
          </div>
        </div>

        {/* left side end   */}

        <div className="w-[300px] ">
          <div className="bg-gray-100  w-full flex flex-col items-center  h-80 p-5 rounded-2xl  ">
            <h1 className="mb-10 font-bold">Balance statics</h1>


            <div className="h-40 w-40 text-center mb-5 flex flex-col items-center ml-6 justify-center rounded-full border-[20px] border-r-[#09C0D6] border-t-white -[#09C0D6] border-l-indigo-700">
              <div className="flex">
                <span className="text-[18px] text-gray-400">
                  $
                </span>
                <h1 className="text-3xl"> 1,872
                </h1>
              </div>
              <p className="text-gray-500">Money spent</p>

            </div>
            <div className="flex justify-evenly">


              <button className="flex items-center ">
                <GoPrimitiveDot className="text-[#09C0D6]" /> spent
              </button>
              <button className="flex items-center " >
                <GoPrimitiveDot className="text-indigo-700" />
                Referral{" "}
              </button>
            </div>


          </div>
        </div>
      </div>

      {/* right side end  */}
      {/* 1st block end  */}

      <div className="mb-10 flex justify-between">
        <div>

          <h1 className="mb-5 font-bold text-lg">Payment methods</h1>

          <div className="flex gap-6">
            <div className="bg-[#F1F5FC] px-6 py-8 rounded-2xl  ">
              <div className="flex w-36 justify-between mb-5">
                <h2 className="font-semibold">Paypal</h2>
                <p className="rounded-full bg-[#bbcaf1] text-blue-600 flex items-center text-xs  px-1">
                  1-5%
                </p>
              </div>
              <div className="flex w-full justify-center items-center mb-3">
                <img
                  className=" rounded-2xl shadow-xl object-cover h-12 w-12"
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQGgcRYcsEA95g/company-logo_200_200/0/1593617920398?e=2147483647&v=beta&t=HEal07oelYHA9u3ngDvlYL8TCj4peqShwexlk8JFJ6Y"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-[#F1F5FC] px-6 py-8 rounded-2xl  ">
              <div className="flex w-36 justify-between mb-5">
                <h2 className="font-semibold">Mastercard</h2>
                <p className="rounded-full bg-[#bbcaf1] text-blue-600 flex items-center text-xs  px-1">
                  1-5%
                </p>
              </div>
              <div className="flex w-full justify-center items-center mb-3">
                <img
                  className=" rounded-2xl shadow-xl object-cover h-12 w-12"
                  src="https://pentagram-production.imgix.net/ee458d4d-a8e8-4177-b2a8-97df766e2e99/lh_mb_mastercard_02.jpg?rect=%2C%2C%2C&w=640&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=400" alt=""
                />
              </div>
            </div>
            <div className="bg-[#F1F5FC] px-6 py-8 rounded-2xl  ">
              <div className="flex w-36 justify-between mb-5">
                <h2 className="font-semibold">Webmoney</h2>
                <p className="rounded-full bg-[#bbcaf1] text-blue-600 flex items-center text-xs  px-1">
                  1-5%
                </p>
              </div>
              <div className="flex w-full justify-center items-center mb-3">
                <img
                  className=" rounded-2xl shadow-xl object-cover h-12 w-12"
                  src="https://pngimg.com/uploads/webmoney/small/webmoney_PNG17.png"
                  alt=""
                />
              </div>
            </div>
            {/* <div className="bg-[#F1F5FC] px-6 py-8 rounded-2xl  ">
            <div className="flex w-36 justify-between mb-5">
              <h2 className="font-semibold">Qiwi</h2>
              <p className="rounded-full bg-[#bbcaf1] text-blue-600 flex items-center text-xs  px-1">
                1-5%
              </p>
            </div>
            <div className="flex w-full justify-center items-center mb-3">
              <img
                className=" rounded-2xl shadow-xl object-cover h-12 w-12"
                src="https://5mod.ru/uploads/posts/2019-03/1551509617_1551509627.png"
                alt=""
              />
            </div>
          </div> */}
            {/* <div className="bg-[#F1F5FC] px-6 py-8 rounded-2xl  ">
            <div className="flex w-36 justify-between mb-5">
              <h2 className="font-semibold">Transferwise</h2>
              <p className="rounded-full bg-[#bbcaf1] text-blue-600 flex items-center text-xs  px-1">
                1-5%
              </p>
            </div>
            <div className="flex w-full justify-center items-center mb-3">
              <img
                className=" rounded-2xl shadow-xl object-cover h-12 w-12"
                src="https://www.logolynx.com/images/logolynx/ba/ba5241ff733c7477409a9a67eb3fdb62.jpeg"
                alt=""
              />
            </div>
          </div> */}
          </div>
        </div>
        <div className="w-[50%]">
        <Promo/>
        </div>
        {/* <div className="py-20 px-14 w-[40%] border-2 mx-6 rounded-lg bg-slate-100 shadow-[-3px_-3px_7px_0px_rgba(98,60,234,0.2)_inset]">
        <div className="font-semibold text-xl">Apply code</div>
          <div>
            <div class="ui action input flex">
              <input type="text" value="http://ww.short.url/c0opq" className="border-2 w-[70%] h-12" />
              <button className="ui bg-green-500 right h-12 labeled icon button flex text-lg hover:text-green-800">
                <div className="bg-green-600 h-12 px-3 py-3 ">
                <i class="bi bi-check-lg"></i>
                </div>
                <div className="py-2 px-3"> Apply</div>

              </button>
            </div>
          </div>

          <div className="font-semibold text-xl mt-8">Promo code</div>
          <div className="mb-6 flex ">
            <button className="ui border border-black bg-green-500 right h-12 labeled icon button flex text-lg hover:text-green-800">
              <div className="bg-green-600 h-12 px-3 py-2">
                <i class="bi bi-clipboard-check-fill "></i>
              </div>
              <div className="py-2 px-3">Copy</div>

            </button>
            <div className="border-r border-t border-b border-black w-[70%] h-12 py-2 text-xl font-semibold px-3" >5t67y65t</div>
          </div>
        </div> */}

      </div>

      {/* 2nd block end  */}

      <div className="flex gap-7">
        {/* left side  */}

        <div className="w-2/3 shadow-md rounded-xl text-[13px]">
          <div className="flex justify-between px-8" >
            <h1 className="font-bold text-lg">Transactions</h1>

            <div className="flex gap-5">
              <button className="font-semibold   text-gray-300">Today</button>
              <button className="font-semibold   text-gray-300">This week</button>
              <button className="font-semibold  ">This Month</button>
            </div>
          </div>

          <div>
            <table className="table-fixed text-center  justify-center w-full text-gray-400  mt-5    ">
              <thead className=" border-gray-200 pb-8 mb-8  ">
                <tr className=" py-7 my-14  pb-8 mb-8 text-gray-400">
                  <th className="pb-5">Data and time</th>
                  <th className="pb-5">payment method</th>
                  <th className="pb-5">status</th>
                  <th className="pb-5">Amount($)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 font-semibold">
                <tr className=" border-gray-200">
                  <td className="py-3">17 Feb 2020,16:30</td>
                  <td className=" h-full flex items-center   p-3 gap-3">
                    <img
                      className=" rounded-2xl shadow-xl object-cover h-7 w-7"
                      src="https://pentagram-production.imgix.net/ee458d4d-a8e8-4177-b2a8-97df766e2e99/lh_mb_mastercard_02.jpg?rect=%2C%2C%2C&w=640&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=400" alt=""
                    />

                    Mastercard</td>
                  <td>pending</td>
                  <td>-400.00$</td>
                </tr>
                <tr className=" border-gray-200">
                  <td className="py-3">14 Feb 2020,12:39</td>
                  <td className=" h-full flex items-center   p-3 gap-3">
                    <img
                      className=" rounded-2xl shadow-xl h-7 w-7"
                      src="https://media-exp1.licdn.com/dms/image/C4E0BAQGgcRYcsEA95g/company-logo_200_200/0/1593617920398?e=2147483647&v=beta&t=HEal07oelYHA9u3ngDvlYL8TCj4peqShwexlk8JFJ6Y"
                      alt=""
                    />
                    payal</td>
                  <td>pending</td>
                  <td>-250.00$</td>
                </tr>
                <tr className=" border-gray-200" >
                  <td className="py-3 ">12 Feb 2020, 09:45</td>
                  <td className=" h-full flex items-center   p-3 gap-3">
                    <img
                      className=" object-cover h-7 w-7 rounded-2xl shadow-xl "
                      src="https://5mod.ru/uploads/posts/2019-03/1551509617_1551509627.png"
                      alt=""
                    />

                    Qiwi</td>
                  <td>Done</td>
                  <td className="text-[#09C0D6]">+1000.00$</td>
                </tr>
                <tr className=" border-gray-200">
                  <td className="py-5">10 Feb 2020, 12:39</td>
                  <td className=" h-full flex items-center   p-3 gap-3">
                    <img
                      className=" rounded-2xl shadow-xl object-cover h-5 w-5"
                      src="https://pngimg.com/uploads/webmoney/small/webmoney_PNG17.png"
                      alt=""
                    />
                    Webmoney</td>
                  <td>pending</td>
                  <td>-250.00$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* right side  */}
        <div className=" p-7 rounded-xl  ">
          <h1 className="mb-7 font-bold">Income / Expense</h1>

          <div className="flex gap-5 items-center mb-5">
            <div className="bg-[#09C0D6] h-14 w-14  p-1 flex items-center justify-center rounded-2xl">
              <ImUpload2 className=" text-white h-7 w-7" />

            </div>
            <div className="cn">
              <h1 className="text-xl font-bold">$22,578.00</h1>
              <p className="text-gray-400 ">Total Amount expense  </p>
            </div>
          </div>
          <div className="flex gap-5 items-center -2">
            <div className="bg-indigo-700  h-14 w-14  p-1 flex items-center justify-center rounded-2xl">
              <ImDownload2 className=" text-white h-7 w-7" />

            </div>

            <div className="cn">
              <h1 className="text-xl font-bold">$5,578.00</h1>
              <p className="text-gray-400 ">Total Amount income   </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Balance;
