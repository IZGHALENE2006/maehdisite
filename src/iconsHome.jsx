import { FaGithub, FaLinkedin, FaEnvelope,FaInstagram  } from "react-icons/fa";

function Icons(){
    return(
    <div className="flex gap-6 mt-7 justify-center md:justify-start">
        <div className="border-b-2 border-[#A1A1A1] p-1 transition ">
    <FaGithub className=" text-[#A1A1A1] hover:text-[#FF8C1A] transition cursor-pointer  text-2xl " />

        </div>
    <div className="border-b-2 border-[#A1A1A1] p-1 transition ">
      <FaLinkedin className=" text-[#A1A1A1] hover:text-[#FF8C1A] transition cursor-pointer text-2xl" />

        </div>
   <div className="border-b-2 border-[#A1A1A1] p-1 ">
      <FaEnvelope className=" text-[#A1A1A1] hover:text-[#FF8C1A] transition cursor-pointer text-2xl" />

        </div>
           <div className="border-b-2 border-[#A1A1A1] p-1  ">
<a href="https://www.instagram.com/maehdi.dev/?__pwa=1" target="_blank">      <FaInstagram className=" text-[#A1A1A1] hover:text-[#FF8C1A] transition cursor-pointer text-2xl" />
</a>
        </div>
    </div>
    )
}
export default Icons