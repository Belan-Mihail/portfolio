import React from 'react'

interface IProps {
    children: React.ReactNode;
  }

export default function MessageErrorBox({children}: IProps) {
  return (
    <div className="slider-container general px-4 w-[100%] h-[100vh]">
        <div className="wrapper flex justify-center items-center gap-8">
            <div className="flex flex-col gap-2 items-center">
                <div className='bg-red-400 w-[80vw] items-center text-center h-8 border-double border-2 border-red-500'>
                    <p className=' text-white'>{children}</p>
                </div>
                <p className='underline text-indigo-500 hover:text-indigo-800'><a  href="#feedback-section">notify about error&nbsp;<i className="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
    </div>
  )
}
