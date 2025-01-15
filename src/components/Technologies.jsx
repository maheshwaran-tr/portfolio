import React from 'react'
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3, FaGithub, FaHtml5, FaJs, FaPython } from 'react-icons/fa';
import { RiJavaLine } from "react-icons/ri";
import { SiDatabricks, SiMysql, SiPostman } from 'react-icons/si';

const Technologies = () => {
  return (
    <div className='pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-7 text-6xl'>
            {/* Java */}
            <div className="relative group">
                <RiJavaLine className='text-[#007396]'/> {/* Java color */}
                <span className="absolute opacity-0 group-hover:opacity-100 text-center text-sm w-full top-14 left-0 transition-opacity duration-300">Java</span>
            </div>
            {/* PostgreSQL */}
            <div className='relative group'>
                <BiLogoPostgresql className='text-[#336791]'/> {/* PostgreSQL color */}
                <span className="absolute opacity-0 group-hover:opacity-100 text-center text-sm w-full top-14 left-0 transition-opacity duration-300">PostgreSQL</span>
            </div>
            {/* HTML5 */}
            <div className='relative group'>
                <FaHtml5 className='text-[#E34F26]'/> {/* HTML5 color */}
                <span className="absolute opacity-0 group-hover:opacity-100 text-center text-sm w-full top-14 left-0 transition-opacity duration-300">HTML5</span>
            </div>
            {/* CSS3 */}
            <div className='relative group'>
                <FaCss3 className='text-[#1572B6]'/> {/* CSS3 color */}
                <span className="absolute opacity-0 group-hover:opacity-100 text-center text-sm w-full top-14 left-0 transition-opacity duration-300">CSS3</span>
            </div>
            {/* JavaScript */}
            <div className='relative group'>
                <FaJs className='text-[#F7DF1E]'/> {/* JavaScript color */}
                <span className="absolute opacity-0 group-hover:opacity-100 text-center text-sm w-full top-14 left-0 transition-opacity duration-300">JavaScript</span>
            </div>
            {/* Python */}
            <div className='relative group'>
                <FaPython className='text-[#306998]'/> {/* Python color */}
                <span className="absolute opacity-0 group-hover:opacity-100 text-center text-sm w-full top-14 left-0 transition-opacity duration-300">Python</span>
            </div>
            {/* GitHub */}
            <div className='relative group'>
                <FaGithub className='text-[#eddfdf]'/> {/* GitHub color */}
                <span className="absolute opacity-0 group-hover:opacity-100 text-center text-sm w-full top-14 left-0 transition-opacity duration-300">GitHub</span>
            </div>
            {/* Postman */}
            <div className='relative group'>
                <SiPostman className='text-[#FF6C37]'/> {/* Postman color */}
                <span className="absolute opacity-0 group-hover:opacity-100 text-center text-sm w-full top-14 left-0 transition-opacity duration-300">Postman</span>
            </div>
            {/* MySQL */}
            <div className='relative group'>
                <SiMysql className='text-[#4479A1]'/> {/* MySQL color */}
                <span className="absolute opacity-0 group-hover:opacity-100 text-center text-sm w-full top-14 left-0 transition-opacity duration-300">MySQL</span>
            </div>
            {/* Databricks */}
            <div className='relative group'>
                <SiDatabricks className='text-[#FF3E00]'/> {/* Databricks color */}
                <span className="absolute opacity-0 group-hover:opacity-100 text-center text-sm w-full top-14 left-0 transition-opacity duration-300">Databricks</span>
            </div>
        </div>
    </div>
  )
}

export default Technologies;
