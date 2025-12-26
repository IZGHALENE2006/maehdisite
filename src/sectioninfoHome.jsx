import { useEffect, useState } from "react"

function SectionInfoHome(){
  const [conter,setconter]  =  useState(null)
  const [status,setstatus] = useState(true)
useEffect(()=>{
 setTimeout(() => {
       setconter(conter+1)
 }, 100);
    if(conter ==30){
       setstatus(false)
    }
},[status?conter:null])

    return(
           <div className="bg-[#1f1f1fff] w-110 flex md:flex-row gap-7 p-3 rounded-lg mt-9  justify-center~ ">
                <div className="cursor-pointer ">
                    <h1 className="text-[#FF7A00] text-xl font-bold">2+</h1>
                    <h3 className="text-white">Experiences</h3>
                </div>
                <div className="w-[2px] bg-[#2A2A2A]"></div>
                      <div className="cursor-pointer">
                    <h1 className="text-[#FF7A00] text-xl font-bold">{conter}+</h1>
                    <h3 className="text-white">Project done</h3>
                </div>
                <div className="w-[2px] bg-[#2A2A2A]"></div>

                      <div>
                    <h1 className="text-[#FF7A00] text-xl font-bold">4+ </h1>
                    <h3 className="text-white">Happy Clients</h3>
                </div>
     </div>
    )
}
export default SectionInfoHome