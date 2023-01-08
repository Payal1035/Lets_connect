import React from 'react'

function Promo() {
    return (
        <div className='w-[60%]'>
            <div className='w-full h-80 shadow-[-7px_7px_10px_2px_rgba(206,220,239,0.6)] bg-white mx-auto my-10 rounded-lg'>{/**rgba(206, 220, 239, 0.6) */}
                <div className='p-10'>
                    <div>
                        <div className='font-medium text-lg'>Apply Code</div>
                        <div className='flex'>
                            <input type="text" value="http://ww.short.url/c0opq" className='border w-[80%] h-10' />
                            <button className='bg-blue-400 uppercase font-bold px-4 text-white'>Done</button>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='font-medium text-lg'>Promo Code</div>
                        <div className='flex'>
                            <input type="text" value="4T7YHN67W" className='border w-[80%] h-10' />
                            <button className='bg-green-400 uppercase font-bold px-4 text-white'>Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo
