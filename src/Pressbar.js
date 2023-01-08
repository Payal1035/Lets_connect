import React from 'react'
import { CSSProperties } from './pressbar.css'

function pressbar() {
    return (
        <div className='h-1/3 w-1/3 mx-auto my-6'>
            <div className="box">
                <div className="percent">
                    <svg>
                        <circle cx="60" cy="60" r="50"></circle>
                        <circle cx="60" cy="60" r="50"></circle>
                    </svg>
                    <div className="number">
                        <h3 className="text-[#03a9f4] text-2xl font-medium -ml-3 -mt-4">75<span>%</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pressbar
