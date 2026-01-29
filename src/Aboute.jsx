import { motion } from 'framer-motion';
import './animations.css';

function Aboute() {
  return (
    <div className="bg-[#0B0B0B] flex flex-col px-5 md:px-16 gap-14 min-h-screen relative overflow-hidden">
      
      {/* Title - مع أنميشين الهبوط */}
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-[#A1A1A1] text-center pt-10"
      >
        About <span className="text-[#FF8C1A]">Me</span>
      </motion.h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 z-10">

        {/* Image Card - مع تأثير الدخول من اليسار والـ Floating */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-72 h-96 bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg shadow-[#FF8C1A]/20 border border-[#FF8C1A] group"
          style={{ animation: "floatGlow 4s ease-in-out infinite" }}
        >
          <img
            src="abouteimg.png"
            alt="About Me"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-110"
          />
        </motion.div>

        {/* Text - مع تأثير الدخول من اليمين */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
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
        </motion.div>

      </div>

      {/* Glow background - زدت ليه أنميشين النبض */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-1/4 top-1/3 w-96 h-96 bg-[#FF8C1A]/10 rounded-full blur-[100px] pointer-events-none"
      />
    </div>
  );
}

export default Aboute;  