import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Home() {
    const [ishidden,setIshidden]=useState(false)
  return (
    <div className='m-0 p-0 bg-[#f3e6b8] text-lg font-bold  text-[#cca281] h-[90vh] relative'>
        <div className='flex justify-between items-center bg-[#1d1d27] h-[10vh] pl-2.5 pr-8 fixed top-0 left-0 right-0 z-50 '>
           <div className='font-serif text-3xl font-bolder ' 
           onClick={()=>setIshidden(!ishidden)}>
           <FiAlignJustify />
           </div>
           <div>
           <h1 className='text-2xl'>
           WINNERS ROOM
           </h1>
            <p className='text-sm font-thin'>Online studies for all</p>
           </div>

        <nav className={`bg-[#1d1d27] h-[100vh] w-[90%] fixed left-0 bottom-0 top-0
        flex flex-col justify-start items-start pl-3 ${ishidden?"block":"hidden"}`}>
          <button className='bg-[#fadda6] text-[gray] rounded-md p-2 w-[90%] m-3 text-3xl font-extrabold'
          onClick={()=>{
            setIshidden(!ishidden)
          }}><FiX /></button>
          <Link to={"/edci312"}  className='text-sm bg-[#fadda6] text-[gray] rounded-md p-1 w-[90%] m-1'>EDCI 312 </Link>
          <Link to={"/edci321"}  className='text-sm bg-[#fadda6] text-[gray] rounded-md p-1 w-[90%] m-1'>EDCI 321 </Link>
          <Link to={"/edci335"}  className='text-sm bg-[#fadda6] text-[gray] rounded-md p-1 w-[90%] m-1'>EDCI 335 </Link>
          <Link to={"/edci337"}  className='text-sm bg-[#fadda6] text-[gray] rounded-md p-1 w-[90%] m-1'>EDCI 337 </Link>
          <Link to={"/epsc331"}  className='text-sm bg-[#fadda6] text-[gray] rounded-md p-1 w-[90%] m-1'>EPSC 331 </Link>
          <Link to={"/kisw311"}  className='text-sm bg-[#fadda6] text-[gray] rounded-md p-1 w-[90%] m-1'>KISW 311</Link>
          <Link to={"/kisw310"}  className='text-sm bg-[#fadda6] text-[gray] rounded-md p-1 w-[90%] m-1'>KISW 310</Link>
          <Link to={"/geog322"}  className='text-sm bg-[#fadda6] text-[gray] rounded-md p-1 w-[90%] m-1'>GEOG 322</Link>
          <Link to={"/geog312"}  className='text-sm bg-[#fadda6] text-[gray] rounded-md p-1 w-[90%] m-1'>GEOG 312</Link>
          <Link to={"/about" }   className='text-sm bg-[#fadda6] text-[gray] rounded-md p-1 w-[90%] m-1'>About</Link>
        </nav>

        </div>
        <div className='h-[100vh]'>
            <img src='https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=600'
            className='h-[100vh] relative '></img>
        </div>
           <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[#cca281]
            text-[#cca281] p-1 rounded w-[90%] bg-transparent'>
            <h1 className='text-[#cca281] text-2xl font-bold text-center bg-[#24242b] rounded p-1'>Y3 S2 STUDY ZONE</h1>
            <p className='text-justify text-sm p-3 tracking-normal text-[#24242b] font-sans m-1'>
            This website is a dedicated study platform designed specifically for third-year Education students
            specializing in Geography and Kiswahili. It provides organized interactive study tools tailored to help students effectively prepare for their exams. With easy
            navigation and subject-specific resources, the platform supports self-paced learning and reinforces
            key concepts covered in the university curriculum.
            </p>
            <div className='flex justify-center items-center m-2'>
           <button className={`text-sm bg-[#24242b] text-[#f3e6b8] p-2 rounded-md`}
           onClick={
            ()=>setIshidden(!ishidden)
           }>View Units</button>
           </div>
           </div>
           
          
           
    </div>
  )
}

export default Home
