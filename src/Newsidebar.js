import React from 'react'

function Newsidebar() {
    return (
        <div className='text-white'>
            <div className=" overflow-hidden text-[1.2 rem] p-1">
                {/* upperside */}

                <div className="bg-[#1B2730] text-center rounded-lg  ">
                    <div className="h-20 w-full bg-[#98C9B4] rounded-lg pb-6" ></div>
                    <img
                        className="z-1 rounded-full object-cover w-14 h-14 relative bottom-9 m-auto "
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhUREhISERESEhgSEREREREREQ8RGBgZGhgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBIRGDQdGB0xNDE0NDQxMTE0MTE0MTQ0NDExNTQ0MTc0MTQ0MTQxNDExMTExMTExNDQ/MTE1MTExP//AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQADAQIGBwj/xABDEAACAQMCAgcEBwUHAwUAAAABAgADBBESIQUxEyJBUWFxgQYykaEHFCNScrHBQoKy0eEzU2JzkqLwY9LxFkODk8L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAICAwACAwAAAAAAAAAAAQIRITEDEkEyUSJhcf/aAAwDAQACEQMRAD8AUoYShgiy1DADkMtUwNGl6vEZpZ3RU7zorK6BnGI8NtroqeccpWO6p4MuCRFw3iQbAJj+iwYSk6QJA6yZqL4AxppgOjNQ+CwNNEgpy/RMhIALVT3R/jEKCTV06yDzPyhAWADuk30Td13m5G0AHVJkpLlWZxAKtMgSXFZnTAByk1KQjEwVgFHRydHCNExpgA4SaVU2hemVVl2gCesm8N4em0GrDeMOHrtJ+rv4ta6RdXSNq6xfXWNBJdJEN6k6W6WIr1YjcvepzgPDF+2EZ3ywLha/bCTelY9uu0ySwLMSW+nMqssVZsqyxVmjmRBLVmVSX06WYgpWWoZd9WmOiIga+g2DscToOGcSK4Dcu+c7SSM7ZNobGnbW1wrjIMqorl3PpEFrVemcqfSNuG36ElWOHJ7eRj2VhjpkCyzEzplEp0/aDwUn4y8CVovXbwUCX4iCgjeZblMgbznPbH2gtrek9F6gFapTOhMEk5OnPhg/lGDe44hSpo7monUXUwDAkd2QJzV57d29POhWqFGIOMKCVPIEnt755VcVVSorF2DNuCBgEEHG/dFRuFfUWLU9XPSTgk+Hjv2xbPT3G39ubV1Rjka3ZGVSXemw5ZAHWB7xmdQlRWXUpBXvnzJcXh0pTpknQDkn3mPf58459nvay4tmp5qNVFNSEpOzCkhOdyB7xGfn5Q2NPoTEmIFwO+FxbUa2QxqU1YkDSC2OtgHxzD4ya4kIlgEhEArCyquNoTiUXAiBTVG8YWC9WBVOcZWI6smKvTFZYuriNKwi+uJSSi5EQ3yzoblYivliNzN8IBwpfthGV+IFwofayb0rHt1mZJpmSZukiVZeizVVhCJNnIirDbZIOFhVAGIDFpjEw1DwmyEy1WPdABhb4htumJFIl1NhBUohFgrpvDUYESkLJMXYXtSntnUv3W7PI9keW10lQbbHtU8x/OIqSbS+mmNxtKlTTuiN3Pjj4CWkRXZ3hXIYZ3zq7YzWqpGxlJCXtYU6b1CpYIjMVX3mAGcDxngvGmFzUZi7OoqMULtl1GTpBPbj9J7txqkXta6qcE0nwSNQ909k8a4NwCpXJdVwCSdTbDbnvyitVjN0kfh9a4fNJHqY2AQHbHlCv/Qd6V1aFXtwWwR6T2X2f4bTtqCqFAY7sR2t35meKXICnAkXLjbTHCW6eD1vZK6p52Ukdx/KJK9B6bYdWUjv2zPX72ruTOV4jTSplGA7cHxmWPlv1vl4ZJwP+iz2gSncLRq63ZgadF2cdHbUydRCqTtqYDOJ7YJ4H9GnADV4kA/uWwNV+9sHSg9SQf3TPfcTol4cdmqkkzJGTGJRc8oTBrrlAFj84zsR1YsYb+sbWQ6smdtMpwlUQCuIxqwCsJTMpuREN8s6G5ERXwgHMX4iu1fTUzHF8OcRNs/rIy6PeuXVJXGBvMRQlfYTEy2294ORYTTWaokIRJuxYCw23pwdV3jK2pwDKpLVSWCnNlSBNVSWBJsqzYLAK9GJuHWR+U2CxHtYlZe/ELpuDyIPrF5WY09sYNKSiXcuRgCVCJaLiAHLdhQdZAUDdmICgeJnE8GoAEpjPR5H9oXQ5OcqB1QDnO3fHHtCoqWzKRqXUhZfvhWDafI4irhVwejDsiIanWVKYwqJ+yMd+DMc8udOjxYcex1dcXKLop0jVdR1sNoUeAOOc5a59o6lR+jeg9McveVwPhLeP8JrOvS06lTRvhEAGCQdyT253z4TlOG8PrdIiBX2P2lQsW1b5zjs22k5bsaY8ZbkO6hzkkjGJzl9dUwdteB+0EYj44jn2ppvRZEQe+oO55nunM3FWuC3WJOBoXSAGO2c5Ow97lns8Znjjzy1zy/T0z6K7Uabm4G/SNTpg/gVmP8AGJ6CBON+jRh9VqNyVq5KrgAr1Kec+s7MMJ14/jHBn+VTEmJkGSUhjEFuuUMg1dMxGWFY1tB1RAGomMLdcLIna8rwlSAVowqQGtNGZXciI70R9cRJeiAczfjnOdumwczpb8c5zV8OcjLoXpT9bkgWZJkjX9vQkSEIs1RZeqzdoxSXeN7antFtuvWju2TaEDGiZ0S/TJpjJTpmwWW6ZnTABnXcDxlhSZC9YQhkiATTIV2hBSYKcvOMIUmumFmnNNG8AHrUdSle8bdwPZ85zz0KlN2aoFAYgqy4Go4BfbJx1id+2daacT+0tEmjrH7B63gp2z8cfGZ547m/sbeLOy6+Usq8f6NCAFxjmYu4bxWmajVar9GowEwhIfPvGczxRHJQKc4zsTsTjYxxYcOqVKIyiZJxjpG2bfHWxgcu3vE55L3t12zrWhHtXdU65R0wFAADEgk47fHaKqTK9MnC6hse8HslfFeBVKK66h6MDUQOlRi2k8lHbnMVcONR6i4DZbACnGpiT1QcdvP4xety+j2k+PTPYhHpWzEggVKhdfLSoz8jOlS8Mot7bQiJ2Iir54GJYKM7MZqacGV3bRK3ktW7EBNGQUjKSYfWhMdMDATSOJooIipw0Bl9PlFgqnvjG3OVEmHZpKkCrQ6pAq0pJZcRNeCOrkRNeQDnL8c5ynFWxvOsvhznI8dbCycuhl0U9JJAOmkmXqy5exoJcBtNEEuxtNmzNsu8d267RRZjeO6I2jhLAJkLMgTYCMNdMmmb4kIiClF6/pLysqoDrtCcQCkrIq9ZfOW4mUQ6s4OADkiAblZqF3k+sL2HODj1E06cZ5RhcyxfxtcW1TxXl4ZGflCHusY7ycCWXKCojL2MpB8iMRWcCXVeSMv2mDtgwxrmpTGVB5Yyp7ILfUiHZD76MVOOakf8z6wVbqoMrsw8cgicWVejj+297eGoMMMns2HP4Rx7AUaD3DvUPXpkBFPuhyMgnxxjE5i5uXOwAXvI5wz2Kb7S4Hih/wBuP0l+KzbPzW6e0hJYKc5S34xVUBdZONhnB2jK14w594A+mJ1bcZyacgpwalxFG7IR9ZTIGfeOB3ZjJGp7QWqIwcQGuN4r0rHtTG9t7oigiNrb3ZEVk2qQKtDHgdaaMy6vE15HNeJryIOdv5xvtEOrOzv5yfGU1DEnLoVyPRGSO0txgTMy9qn1r1GnLW5StJZU5Tda+zEc0+UU2QjdI4VWrNxNFm4gGcTLCZEw0AqtRux8YQRKbQdUnvJhEIGoELpkKAD+3nfx/wDEoRckDvM3vxgZHYBkDngbgjxH5ZgCdupVZTybrDzGx/SbvthuwiV8RbUVcd4yR3Hb9Zdbtrpkdo3gFDNqZMdhJPop/XEZUDlPSI61HpDoJKnmGB0spHIqe+NLZiqKC2ogdY406j34gHAe2FuaV0tRc6KynUP8aYGfUMPhFboGHj2Gdn7Z2waklT+7qrnyYFMfFhOVNPB5Th8+Osnf4Mt4/wCE9ejuYd7GUcVrj8KH+P8AlLnt87w72YRRcOna9LPnpYf90Xh/I/PP4napLrcYyPWEfV5haRUMzcyezkB2TscC+gJvd1OqRy2BHhzm1JYFxGrhio+6vzLSt8B0nDro1KYYnrDZvHbYzWod4k4dXKVkQHqmmquPPl8MxvVfBit4VjOWxEZW/uxP0kb256oih5JUMDqmFVDA6plswNeJ7uNrgxPdmIEF9Er2+vMc30q4VT1BpOXS8ea5p7cgkY5eEkfVrbrHbtkmWlerokmzmaIZHO83ZGFkI1SK7OM0McC1ZYJWs3UwCwTWodj5TIldweqfKAb2o6gl4lVAdUeUsgBFqvWz3CDX9XB8vyhtuuFLd8V8RPPP9RAFb1MMUPut1kPzK/r8YRw9sVGTwMR8VuCiEHdly9NvvFdyuO/A5dsdWZzcZ7CMj1EUFYuUIIYc1OfP/gyPWEo4wPEZ9DykrrzlFPs8CR8P/PygAXtXbGtZXFMe81Jip7Q4GpSPUCeL2HtVXpgBwtZezUdLjw1DY/Ce8V91IPIjE+cLy36KrUp/3dR6ff7rMv6ScsZl3FY5ZY9V1vHuPtTWi1HS616IqB3BGhskMmkHcgjnn0g/sJxKo3E6bVGLGoj0u4DKlgAOzdRArniD1rFUKrihUpoxBc6VCOKbKpOlSeuG0gaiFJgHArjoru2qctFxTJ/DrAb5ExY4449RWWeWXdfQCDMzcLhD6fmJmmMEiZvv7Nj3Y/MS2aqi23yiy/YdOMnAZR8FJJ/OMHqAMR29sT8UfNdNIz1W1HHLcbf87pNqotNY5dxsT1Qfuk/0H5To0q9Iiv8AeUH17Zzj0cDJ5nJC88ZOST4xrwWrmnpP7DEeh3/U/CKqx7MAI3oe7FSkRrS92EGTSoYHWhVUwOsZbMBcGKLsxrcGKLowBHfScGOzesxema8JOzesnLpph2lZusfOYmaqHJkmbbRspmGO8whmAetNnKbWcYqYts4wUxlV6mbqZSplqmBrRKro9X1xN1MouT7o72gBich5TdQScDmeU0BhVkuSW7th5wAh10qBjOBiIb913yy+Q3xGt63fv4dnwnP3rjyiBBx8g0KhOcaCcjYoQMg+BB3nRcJGXVv+mP4Yg4g+Eb8J9do54M+FU/dpKPjpEMRTK4HWg3InHMjbzH9M/CE3Q3HlBq5xg9258owjttieFe29DRxG5XGAzrUH76Kx+Zae3tzx3TyL6UaWm9R/7ygvxVmH6iScIeEkstxTH/uW5cDveky1Bj90PFjduOeNvOHcEqhbmiT7pcU2/C+Ub5OYJUplGZDzRih81JB/KAfRFhXFREqDlUppU/1KD+su4ofsH/B/KI/Yyv0lhatnlQWmf3CU/wDzHnEQOif8Mfwi+4OCG7GG8UXIzWRuzrfHq/1jeu2VUdwiTiZANPc56TGASNXVbbb/AJtM/q/htVbbYZOOQ5/09Zng74qMCwyy+6OQA7PE7mYS3XTuSfLYfASkt0bq676WzjtI7R8JVKV0ymNqJ6sApIrqrrurAMp8DvD02EMYeV2rqmA1jC6pgNZpaANyYpujGVw0U3JiBReScIOA0l12zXhik5x4ycl4XVXuwyZJh6LZMkjTX2GqZoh601DbTFE7zVznNodocrQC2O0KRoyolTLVMHVpYrQIQDKKxy6Dxm4aU6s1B4AwUPBjSmulAPDfziy2Gp1Hj8hGVy+BAoW31SILypGF9cjfcRBc1skxZU4strQ3FRafZu7eQ5fPA9YVwV80/RB+sZeyVt1HrH9ptC/hXn8z8op4ScIc7ZbPkOyGIp/cHOIJcHIlrvkCD1mjpRSr7An8J8xy+WJ5h9Kv9rbt3pUHwZD+s9F14Zh3gMPTY/mPhPOPpSOWtj/mD+D+Um9qjhgxG4OCNwe4jcQ/jrA3DuOVUJWH/wAiK5+bNFgMYcR3p2z/AHqBT/66joP9umBvUvowuQ9iE7aVd0Pk2HH8RnYcSf7F/wAM8t+ii9xVuKBPvotVe7KHS38a/Cej8TqYov5fqI70n6FeqAvjEHF629I/9T8g0Ou64AHlEnFXz0P+Z+amZ/Vuyt3yoPhKLkZmlg+UHlLK8tJ17M3WqkaZ502I/dbcfqPSPtW04bgdwadxp7KikfvDcfIH4zs0fqxwldVoDWaF1mi+s0YBXLRVcND7losuDEC65POE8FZQpJ8YHcGAG7KAjOMyclYuna6TvEk4l705PWmJJuq17SW7bwdn2m1q+80QfUG2hKvAaT7S9XjSMV5YjwNXlqvACw8opNmox7gBMa5TbP1nPjBR/wALOXJ7lJ/SUcQ4ihIVQapfOkAkK+OenAyw/wAQGB3wVENT7POEYjWPvUxuV8iQAfWEU1CM9T9tzhT91F2RR3ADfHeYQE1VHdiDSRADg9Z2OfujBwT5cu3EX8QsKygNTpK2/WUVG147wDtOlQAHPM8h4DwkciFmxtbTcU6VOghBKoNRU7ZO5PxJiAHQ7r3OfzjPOk6hjPyMV36MXLqM5G4HMHvxHJoD1rDA8RNaj8/KLem7c7DabtWhSjVuerszp+O086+k6p1rYf5h/gE9BrVAUYDnjbznmv0mVdVWiO5Gb/UV/lIs6VHH+MZXLq1pbjWhZKlZSmoa1VtDKSvYudW/nFCtjymxPdygbofYm+6G/oMTgOxpN4hwVH+7T8J7Bxqpi3fxKj/cJ8/pVKsGU4KkMp7iDkT2jiHE1qWS1hjFQU28dyDj4w+F9CX7cj4CILniILpT7RUB+Rh19egqMHeLqXAqlxUSonUCtkuwOGHbgdsmQ7XZ8Kr5UDwhrvntH+oQCz4ctNcEltt9W/y5Syq1MDGAMd235S9J21ev0dRKm40Or+YBGflmegrUBXI5dk8pu7gA4UBUPPTsVPkdmXwne+z910lrTbOerpPmvVP5RQx9Z4BXeEVni+u8oglw8W3Dwu4eLqzxAJXPOcvxisVbadLVacpxuqqtvJyOEz12ydzJKjcrJJU9FeptL7R5JJog4pvtLleSSNKxXlyvMSQCwvB7J9mPexkkgoxtbjS3gRj8ptc3WT8pmSMo0FfEr+s5kkgbVq8yNZ5ECSSAA3tNQeu6g+Ctn4gQXoWI6hz3Z2kkiAC1p1GqFW6pAyQSCN/KcD9JKlLtUznTboT5nOf0kkheh9chIDJJJNuqliAN8kAdm52E9Z4D7PVPqa290dAVtaimwZgmdQBJBA3J5ZkklQqZ0eCW1NshWc5yOkOseg2HxhT3iDsx5AySQAO5vopr3ZMkkmnAussQBzJwPOelcHtVoUVprvjJYn9pzux+MkkWJ1vWeL67ySS0ltw8AqtJJEAjtOI9pj9pJJFTjn8ySSRKf//Z"
                        alt=""
                    />
                    <div className='pt-1 lg:block hidden'>
                        <h1>Yeremias NJ</h1>
                        <p>@notojoya</p>
                    </div>
                    {/* <h2 className="my-3 font-medium ">
        ✨penting gak penting yang <br /> penting posting✨
      </h2>

      <div className="flex justify-around text-base my-2 border-y-2 border-gray-700 py-2 ">
        <div>
          <h1>6,664</h1>
          <p>Following</p>
        </div>
        <div>
          <h1>6,664</h1>
          <p>Following</p>
        </div>
      </div> */}

                    {/* <h1 className="text-blue-400 mb-3 pb-3">My profile</h1> */}

                    <div className='md:-mt-9 lg:mt-0 -mt-2 text-xl md:text-base'>
                        <a className='active font-bold text-blue-400'>
                            <div className='flex border-l-4 border-blue-500 pb-2 bg-[#05141C] lg:mt-4 md:mt-2 md:pt-2 lg:pt-0'>

                                <div className='lg:ml-6 lg:mt-4 mx-auto lg:mx-0 md:mx-6 mt-2 md:mt-0'>
                                    <i class="bi bi-puzzle"></i>
                                </div>
                                <div className='lg:ml-4 lg:mt-4 hidden md:block  md: '>
                                    <h3>Dashboard</h3>
                                </div>

                            </div>
                        </a>
                        <a className=''>
                            <div className='flex pb-2  lg:mt-2 md:mt-2 md:pt-2 lg:pt-0 '>

                                <div className='lg:ml-6 lg:mt-4 mx-auto lg:mx-0 md:mx-6 mt-2 md:mt-0'>
                                    <i class="bi bi-bag"></i>
                                </div>
                                <div className='lg:ml-4 lg:mt-4 hidden md:block  md: '>
                                    <h3>Product</h3>
                                </div>

                            </div>
                        </a>
                        <a className=''>
                            <div className='flex pb-2  lg:mt-2 md:mt-2 md:pt-2 lg:pt-0 '>

                                <div className='lg:ml-6 lg:mt-4 mx-auto lg:mx-0 md:mx-6 mt-2 md:mt-0'>
                                    <i class="bi bi-envelope-open"></i>
                                </div>
                                <div className='lg:ml-4 lg:mt-4 hidden md:block  md: '>
                                    <h3>Mail</h3>
                                </div>

                            </div>
                        </a>
                        <a className=''>
                            <div className='flex pb-2  lg:mt-2 md:mt-2 md:pt-2 lg:pt-0 '>

                                <div className='lg:ml-6 lg:mt-4 mx-auto lg:mx-0 md:mx-6 mt-2 md:mt-0'>
                                    <i class="bi bi-flag"></i>
                                </div>
                                <div className='lg:ml-4 lg:mt-4 hidden md:block  md: '>
                                    <h3>Campaign</h3>
                                </div>

                            </div>
                        </a>
                        <a className=''>
                            <div className='flex pb-2  lg:mt-2 md:mt-2 md:pt-2 lg:pt-0 '>

                                <div className='lg:ml-6 lg:mt-4 mx-auto lg:mx-0 md:mx-6 mt-2 md:mt-0'>
                                    <i class="bi bi-calendar-event"></i>
                                </div>
                                <div className='lg:ml-4 lg:mt-4 hidden md:block  md: '>
                                    <h3>Calender</h3>
                                </div>

                            </div>
                        </a>
                        <a className=''>
                            <div className='flex pb-2  lg:mt-2 md:mt-2 md:pt-2 lg:pt-0 '>

                                <div className='lg:ml-6 lg:mt-4 mx-auto lg:mx-0 md:mx-6 mt-2 md:mt-0'>
                                    <i class="bi bi-person-lines-fill"></i>
                                </div>
                                <div className='lg:ml-4 lg:mt-4 hidden md:block  md: '>
                                    <h3>Contacts</h3>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className='mt-3 border-t-2 pt-4 pb-6 lg:mt-3 lg:pt-2'>
                    <a className=''>
                            <div className='flex pb-2  lg:mt-2 md:mt-2 md:pt-2 lg:pt-0 '>

                                <div className='lg:ml-6 lg:mt-4 mx-auto lg:mx-0 md:mx-6 mt-2 md:mt-0'>
                                    <i class="bi bi-bell"></i>
                                </div>
                                <div className='lg:ml-4 lg:mt-4 hidden md:block  md: '>
                                    <h3>Noification</h3>
                                </div>
                                {/* <div className='ml-12 mt-6 justify-end bg-green-300 text-sm px-1 rounded-3xl pt-0.5 font-bold text-black'>
                                    24
                                </div> */}

                            </div>
                        </a>
                        <a className=''>
                            <div className='flex pb-2  lg:mt-2 md:mt-2 md:pt-2 lg:pt-0 '>

                                <div className='lg:ml-6 lg:mt-4 mx-auto lg:mx-0 md:mx-6 mt-2 md:mt-0'>
                                    <i class="bi bi-chat-dots"></i>
                                </div>
                                <div className='lg:ml-4 lg:mt-4 hidden md:block  md: '>
                                    <h3>Chats</h3>
                                </div>
                                {/* <div className='ml-20 mt-6 justify-end bg-orange-400 text-sm px-1 rounded-3xl pt-0.5 font-bold text-black w-6'>
                                    8
                                </div> */}

                            </div>
                        </a>
                        <a className=''>
                            <div className='flex pb-2  lg:mt-2 md:mt-2 md:pt-2 lg:pt-0 '>

                                <div className='lg:ml-6 lg:mt-4 mx-auto lg:mx-0 md:mx-6 mt-2 md:mt-0'>
                                    <i class="bi bi-sliders"></i>
                                </div>
                                <div className='lg:ml-4 lg:mt-4 hidden md:block  md: '>
                                    <h3>Settings</h3>
                                </div>

                            </div>
                        </a>

                    </div>
                </div>




















































                {/* bottom side */}

                {/* <div className="bg-[#1B2730] p-6 rounded-lg mt-2 ">
      <h2 className="font-bold mb-5">who is to follow you</h2>

      <div className="flex gap-2 mb-5">
        <img
          className="object-cover rounded-full w-10"
          src="https://miro.medium.com/max/1400/1*ii5coEmEhfnjRQRWp8RjfQ.jpeg"
          alt=""
        />
        <div className='text-sm'>
          <h2>Product Hunt</h2>
          <p className='text-slate-500'>@Producthunt</p>
        </div>
        <button className="text-black bg-white px-3 rounded-full font-bold w-1/3 h-9 ml-2">
          follow
        </button>
      </div>
      <div className="flex gap-2 mb-5">
        <img
          className="object-cover rounded-full w-10"
          src="https://miro.medium.com/max/1400/1*ii5coEmEhfnjRQRWp8RjfQ.jpeg"
          alt=""
        />
        <div className='text-sm'>
          <h2>Product Hunt</h2>
          <p className='text-slate-500'>@Producthunt</p>
        </div>
        <button className="text-black bg-white px-3 rounded-full font-bold w-1/3 h-9 ml-2">
          follow
        </button>
      </div>
      <div className="flex gap-2 mb-5">
        <img
          className="object-cover rounded-full w-10"
          src="https://miro.medium.com/max/1400/1*ii5coEmEhfnjRQRWp8RjfQ.jpeg"
          alt=""
        />
        <div className='text-sm'>
          <h2>Product Hunt</h2>
          <p className='text-slate-500'>@Producthunt</p>
        </div>
        <button className="text-black bg-white px-3 rounded-full font-bold w-1/3 h-9 ml-2">
          follow
        </button>
      </div>
      <h2 className="text-blue-400 font-bold">Show More</h2>
    </div> */}
            </div></div>
    )
}

export default Newsidebar
