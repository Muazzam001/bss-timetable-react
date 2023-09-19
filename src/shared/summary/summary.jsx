import React from 'react';
import "./summary.scss"

const Summary = () => {
    return (
        <div className="p-4 min-w-[250px] w-[280px]">
            <div
                className="summary relative border border-gray-b-card bg-blue-bg-card hover:bg-blue-btn-normal px-4 pb-1">
                <div
                    className='flex justify-center items-center absolute -top-[60%] left-[35%] w-20 h-20 rounded-full bg-white shadow-xl'>
                    <h2 className="title-font font-medium text-2xl text-gray-900 font-primary">2.7K</h2>
                </div>
                <p className='font-primary mt-12 text-gray-b-input text-center'>No. of Students</p>
            </div>
        </div>
    )
}

export default Summary
