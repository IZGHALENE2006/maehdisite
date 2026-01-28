import './animations.css'
function Aboute(){
    return(
    <div className="bg-[#0B0B0B] flex flex-col px-5 md:px-16 gap-14 min-h-screen relative">

  {/* Title */}
  <h1 className="text-4xl md:text-5xl font-bold text-[#A1A1A1] text-center pt-10">
    About <span className="text-[#FF8C1A]">Me</span>
  </h1>

  {/* Content */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-16 z-10">

    {/* Image Card */}
    <div className="
      relative
      w-72 h-96
      bg-[#1f1f1f]
      rounded-2xl
      overflow-hidden
      shadow-lg shadow-[#FF8C1A]
      border border-[#2a2a2a]
      hover: shadow-[#FF8C1A]
      transition
    "
      style={{
    animation: "floatGlow 4s ease-in-out infinite",
    border: "1px solid #FF8C1A"
  }}
    >
      <img
        src="abouteimg.png"
        alt=""
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
      />
    </div>

    {/* Text */}
    <div className="max-w-xl">
      <p className="text-[#A1A1A1] text-lg leading-relaxed">
        Passionné par la technologie et l'innovation, je suis un
        <span className="text-white font-semibold"> développeur Full Stack</span>.
        Ma formation et mon expérience m'ont permis de maîtriser
        les dernières technologies du développement web,
        me rendant polyvalent et compétent dans la réalisation
        de projets complexes.
        <br /><br />
        Mon profil allie
        <span className="text-[#FF8C1A] font-semibold"> rigueur</span>,
        <span className="text-[#FF8C1A] font-semibold"> créativité</span> et
        une forte capacité d’adaptation,
        des atouts essentiels pour relever les défis du secteur IT.
      </p>
    </div>

  </div>

  {/* Glow background */}
  <div className="absolute right-1/4 top-1/3 w-96 h-96 bg-[#FF8C1A]/10 rounded-full blur-3xl pointer-events-none"></div>
</div>

    )
}
export default Aboute