import Icons from "./iconsHome"
import './animations.css'
import SectionInfoHome from "./sectioninfoHome"
function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row grow items-center gap-10">

      {/* LEFT CONTENT */}
      <div className="w-full md:w-2/3  text-center md:text-left">
        <h5 className="text-[#A1A1A1] tracking-widest">
          Hi I am
        </h5>

        <h3 className="mt-1 text-[#A1A1A1] text-2xl  text-center tracking-widest typing-loop">
          Mahdi Izghalene
        </h3>

        <h1
          className="text-[#FF8C1A] text-4xl md:text-6xl font-extrabold mt-6 transition"
          style={{
            textShadow: "0 0 20px rgba(255,140,26,0.25)",
          }}
        >
          Full-Stack Developer
        </h1>

        <Icons />

        {/* BUTTONS */}
        <div className="pt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-96 mx-auto md:mx-0">
          <button className="group relative overflow-hidden bg-[#FF8C1A] px-4 py-2 rounded-lg text-white w-full sm:w-1/3 font-medium transition">
            <span className="relative z-10">Hire me</span>
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
          </button>

          <button className="relative overflow-hidden border-2 border-[#A1A1A1] text-[#A1A1A1] px-4 py-2 rounded-lg w-full sm:w-2/3 font-medium transition-all duration-300
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#A1A1A1]
            before:-translate-x-full before:transition-transform before:duration-300
            hover:before:translate-x-0 hover:text-white">
            <span className="relative z-10">Download CV</span>
          </button>
        </div>

        <SectionInfoHome />
      </div>
            <div className="absolute w-1/2 h-100 bg-[#FF8C1A]/10 rounded-full blur-3xl pointer-events-none"></div>
 
      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center items-center w-full md:w-1/3">
        <div className="absolute w-72 h-72 bg-[#FF8C1A]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative bg-[#1f1f1f] h-80 w-64 overflow-hidden shadow-[0px_10px_10px_9px_rgba(31,31,31,1)] rounded-3xl">
          <img src="img4.png" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  )
}

export default Home
