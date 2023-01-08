import React from 'react'
import { CSSProperties } from './progress.css'

function progess() {
    return (
        <div className='bg-blue-700 p-6'>
        <div className='body border-2 rounded-3xl p-4 w-52 bg-white'>
            <div className="circle-container ml-3">
                <div className="circle bg-white">
                    <div className="item layer-1">
                        <div className="fill"></div>
                    </div>
                    <div className="item layer-2">
                        <div className="fill"></div>
                    </div>
                    <div className="inside-content text-[#2f668f]">25%</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default progess
