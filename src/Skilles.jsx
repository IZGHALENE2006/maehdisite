import Card from "./Cardskilles"
import { FaReact, FaCss3Alt, FaJs,FaHtml5 } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaLaravel } from "react-icons/fa";
import { SiMysql, SiMongodb } from "react-icons/si";

import {
  SiTailwindcss,SiExpress} from "react-icons/si";
function Skills(){

const [skills,setSkilles] = useState([

    {
    icon: FaHtml5,
    name: "Html",
   
  },
  {
    icon: FaCss3Alt,
    name: "CSS",
  
  },
  {
    icon: FaJs,
    name: "JavaScript",
 
  },
  
  {
    icon: FaReact,
    name: "React",
 
  },
    {
    icon: SiTailwindcss,
    name: "Tailwindcss",
   
  },
  
    {
    icon: SiExpress,
    name: "Express",
   
  },,
   {
    icon: FaLaravel,
    name: "Laravel",
    status: "Advanced"
  },
  {
    icon: SiMysql,
    name: "MySQL",
    status: "Advanced"
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    
    
    }
])
const front = [
   {
    icon: FaHtml5,
    name: "Html",
   
  },
  {
    icon: FaCss3Alt,
    name: "CSS",
  
  },
  {
    icon: FaJs,
    name: "JavaScript",
 
  },
  
  {
    icon: FaReact,
    name: "React",
 
  },
    {
    icon: SiTailwindcss,
    name: "Tailwindcss",
   
  }
]
const backend = [
   {
    icon: SiExpress,
    name: "Express",
   
  } ,
   {
    icon: FaLaravel,
    name: "Laravel",
    status: "Advanced"
  },
  {
    icon: SiMysql,
    name: "MySQL",
    status: "Advanced"
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    status: "Intermediate"
  }
]
const All = [
      {
    icon: FaHtml5,
    name: "Html",
   
  },
  {
    icon: FaCss3Alt,
    name: "CSS",
  
  },
  {
    icon: FaJs,
    name: "JavaScript",
 
  },
  
  {
    icon: FaReact,
    name: "React",
 
  },
    {
    icon: SiTailwindcss,
    name: "Tailwindcss",
   
  },
  
    {
    icon: SiExpress,
    name: "Express",
   
  },,
   {
    icon: FaLaravel,
    name: "Laravel",
    status: "Advanced"
  },
  {
    icon: SiMysql,
    name: "MySQL",
    status: "Advanced"
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    
    
    }
  
]

// gunction Get All Skilles
const [status,setStatus] = useState({all:true,front:false,back:false})

function HandleGetAllSkilles(){
setSkilles(All)
setStatus({all:true,front:false,back:false})

}
function HandleGetFrontSkilles(){
setSkilles(front)
setStatus({all:false,front:true,back:false})

}
function HandleGetBackSkilles(){
  setSkilles(backend)
setStatus({all:false,front:false,back:true})

}
return (
    <div className="
      flex flex-col
      bg-[#0B0B0B]
      justify-center
      items-center
      gap-10
      w-full
      pt-5
      px-4 md:px-0
      h-full
    ">

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#A1A1A1] text-center">
        <span className="text-[#FF8C1A]">My </span>Skilles
      </h1>

      <div className="flex flex-col items-center w-full">

        {/* FILTER BUTTONS */}
        <div className="
          flex flex-col
          sm:flex-row
          gap-4
          w-full
          sm:w-[420px]
          justify-center
        ">
          {/* All */}
          <button
            className="px-2 py-2 w-full sm:w-1/3 text-lg rounded-2xl border-2 border-[#FF8C1A] text-white bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF8C1A]/60"
            style={{
              background: status.all ? "#FF8C1A" : "",
              transform: status.all ? "scale(1.05)" : "",
              boxShadow: status.all ? "0 0px 30px rgba(255,140,26,0.6)" : "none",
              border: status.all ? "1px solid #FF8C1A" : "",
            }}
            onClick={HandleGetAllSkilles}
          >
            All
          </button>

          {/* Front */}
          <button
            className="px-2 py-2 w-full sm:w-1/3 text-lg rounded-2xl border-2 border-[#FF8C1A] text-white bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF8C1A]/60"
            style={{
              background: status.front ? "#FF8C1A" : "",
              transform: status.front ? "scale(1.05)" : "",
              boxShadow: status.front ? "0 0px 30px rgba(255,140,26,0.6)" : "none",
              border: status.front ? "1px solid #FF8C1A" : "",
            }}
            onClick={HandleGetFrontSkilles}
          >
            Front-End
          </button>

          {/* Back */}
          <button
            className="px-2 py-2 w-full sm:w-1/3 text-lg rounded-2xl border-2 border-[#FF8C1A] text-white bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF8C1A]/60"
            style={{
              background: status.back ? "#FF8C1A" : "",
              transform: status.back ? "scale(1.05)" : "",
              boxShadow: status.back ? "0 0px 30px rgba(255,140,26,0.6)" : "none",
              border: status.back ? "1px solid #FF8C1A" : "",
            }}
            onClick={HandleGetBackSkilles}
          >
            Back-End
          </button>
        </div>

        {/* CARDS */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-6
          mt-8
        ">
          {skills.map((t, i) => (
            <Card
              key={i}
              icon={t.icon}
              name={t.name}
              status={t.status}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
export default Skills