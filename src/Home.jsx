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
  <div className="relative flex justify-center items-center w-full md:w-1/3 group ">
  {/* الـ Glow اللي في الخلفية - دابا كيتحرك وكينبض */}
  <div className="absolute w-72 h-72 bg-[#FF8C1A]/20 rounded-full blur-3xl pointer-events-none 
    animate-pulse group-hover:bg-[#FF8C1A]/40 transition-all duration-700"></div>

  {/* الحاوية الرئيسية للكارط */}
  <div className="relative bg-[#111111] h-80 w-64 overflow-hidden rounded-3xl 
    border border-[#2a2a2a] shadow-2xl transition-all duration-500 
    group-hover:scale-105 group-hover:-rotate-2 group-hover:border-[#FF8C1A]/50">
    
    {/* تأثير الإضاءة الفضي (Shine) اللي كيدوز فوق التصويرة */}
    <div className="absolute animate-float inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent 
      -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

    {/* التصويرة مع تأثير الزووم */}
    <img 
      src="img4.png" 
      alt="Hero" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" 
    />

    {/* إطار داخلي كيبان غير في الـ Hover كيعطي لمسة فنية */}
    <div className="absolute inset-4 border border-white/5 rounded-2xl pointer-events-none 
      group-hover:border-[#FF8C1A]/20 transition-colors duration-500"></div>
  </div>

  {/* عنصر إضافي: نقط (Decor) كيدوروا وراء الصورة */}
  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[radial-gradient(#FF8C1A_1px,transparent_1px)] [background-size:10px_10px] opacity-20 group-hover:opacity-50 transition-opacity"></div>
</div>

    </div>
  )
}

export default Home
