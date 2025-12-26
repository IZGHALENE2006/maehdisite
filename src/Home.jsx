import Icons from "./iconsHome"
import './animations.css'
import SectionInfoHome from "./sectioninfoHome"

function Home(){
    return(
        <div className=" flex flex-col  grow items-center md:flex-row" > 
            <div className="w-1/2 ">
                <h5  className="text-[#A1A1A1]  tracking-widest ">Hi I am</h5>
                <h3 className="text-textgray mt-1 text-[#A1A1A1]  text-2xl tracking-widest typing-loop">Mahdi Izghalene</h3>
                <h1 className="text-[#FF8C1A] text-6xl font-extrabold mt-6 transition"
                  style={{
    textShadow: "0 0 20px rgba(255,140,26,0.25)",
  }}
                >Full-Stack  Developer </h1>
  <Icons/>
     <div className="pt-6 flex  flex-col md:flex-row gap-4 w-96">
<button
  className="group relative overflow-hidden bg-[#FF8C1A] px-4 py-2 rounded-lg text-white w-1/2 md:w-1/3 font-medium transition"
>
  <span className="relative z-10">
    Hire me
  </span>

  <span
    className="
      absolute
      inset-0
      bg-white/20
      -translate-x-full
      group-hover:translate-x-0
      transition
      duration-300
    "
  ></span>
</button>

<button
  className="
    relative
    overflow-hidden
    border-2 border-[#A1A1A1]
    text-[#A1A1A1]
    px-4 py-2
    rounded-lg
   md:w-2/3
   w-1/2
    font-medium
    transition-all
    duration-300

    before:content-['']
    before:absolute
    before:top-0
    before:left-0
    before:w-full
    before:h-full
    before:bg-[#A1A1A1]
    before:-translate-x-full
    before:transition-transform
    before:duration-300

    hover:before:translate-x-0
    hover:text-white
    hover:border-#A1A1A1
  "
>
  <span className="relative z-10">
    Download CV
  </span>
</button>


     </div>
  <SectionInfoHome/>
            </div>
            <div className="absolute w-1/2 h-72 bg-[#FF8C1A]/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="relative flex justify-center items-center w-1/2">

  {/* الدائرة */}
  {/* <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute w-[460px] top-5 "
    
  >
    <path
      fill="#1f1f1fff"
      d="M71.4,-24.3C80.3,4.1,66.8,38.8,41.7,57C16.5,75.2,-20.3,76.9,-44.6,59.7C-68.9,42.5,-80.6,6.2,-71.1,-23.1C-61.6,-52.4,-30.8,-74.9,0.2,-74.9C31.3,-75,62.5,-52.7,71.4,-24.3Z"
      transform="translate(100 100)"
     
    />
  </svg> */}

  {/* container ديال الصورة */}
  <div className="relative  bg-[#1f1f1fff]  h-100 w-64 overflow-hidden shadow-[0px_10px_10px_9px_rgba(31,31,31,1)] rounded-4xl">
    <img
      src="img4.png"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </div>
    )
}
export default Home 