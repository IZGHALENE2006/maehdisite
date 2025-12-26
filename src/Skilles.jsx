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
    return(
   <div className="flex flex-col md:flex-col bg-[#0B0B0B] justify-center md:pl-5 items-center gap-10 w-full pt-5 h-180">
            <h1 className="text-4xl font-bold text-[#A1A1A1] ">My <span>Skilles</span></h1>
            <div className="flex md:flex-col justify-center items-center ">
                <div className="flex md:flex-row gap-5 w-120   ">
<button
  className="
    px-2 py-2
    w-1/3
    text-lg
    rounded-2xl
    border-2 border-[#FF8C1A]
    text-white
    bg-transparent

    transition-all
    duration-300

    hover:scale-105
    hover:shadow-lg
    hover:shadow-[#FF8C1A]/60
    hover:border-[#FF8C1A]

  "
     style={{
    background: status.all ? "#FF8C1A" : "",
    transform: status.all ? "scale(1.05)" : "",
    boxShadow: status.all
      ? "0 0px 30px rgba(255,140,26,0.6)"
      : "none",
    border: status.all
      ? "1px solid #FF8C1A"
      : "",
    transition: "all 0.3s ease",
  }}
  onClick={HandleGetAllSkilles}
>
  
  All
</button>

<button
  className="
    px-2 py-2
    w-1/3
    text-lg
    rounded-2xl
    border-2 border-[#FF8C1A]
    text-white
    bg-transparent

    transition-all
    duration-300

    hover:scale-105
    hover:shadow-lg
    hover:shadow-[#FF8C1A]/60
    hover:border-[#FF8C1A]
  "
onClick={HandleGetFrontSkilles}
     style={{
    background: status.front ? "#FF8C1A" : "",
    transform: status.front ? "scale(1.05)" : "",
    boxShadow: status.front
      ? "0 0px 30px rgba(255,140,26,0.6)"
      : "none",
    border: status.front
      ? "1px solid #FF8C1A"
      : "",
    transition: "all 0.3s ease",
  }}
>
  Front-End
</button>

   <button className=" 
    px-2 py-2
    w-1/3
    text-lg
    rounded-2xl
    border-2 border-[#FF8C1A]
    text-white
    bg-transparent

    transition-all
    duration-300

    hover:scale-105
    hover:shadow-lg
    hover:shadow-[#FF8C1A]/60
    hover:border-[#FF8C1A]"
    onClick={HandleGetBackSkilles}
     style={{
    background: status.back ? "#FF8C1A" : "",
    transform: status.back ? "scale(1.05)" : "",
    boxShadow: status.back
      ? "0 0px 30px rgba(255,140,26,0.6)"
      : "none",
    border: status.back
      ? "1px solid #FF8C1A"
      : "",
    transition: "all 0.3s ease",
  }}
 >Back-End</button>
                </div>
                <div className="grid grid-cols-3 gap-7 mt-5 ">
                    {skills.map((t)=>{
                      return(
                          <Card
                        icon={t.icon}
                        name={t.name}
                        status={t.status}
                        />
                      )
                    })}
                </div>
            </div>
   </div>
    )
}
export default Skills