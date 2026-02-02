import { useRef } from "react";
import CardProject from "./cardproject";

function Project() {
  const scrollRef = useRef(null);

  const listProject = [
    { nom: "System gestion Complet", discription: "Gestion les produits, comptes et show les statistiques", linkto: "#", img: "./projectimg/img1.png" },
    { nom: "E-commerce App", discription: "Gestion les produits, comptes et show les statistiques", linkto: "#", img: "./projectimg/img5.png" },

  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 350;
    } else {
      current.scrollLeft += 350;
    }
  };

  return (
    <div className="bg-[#0B0B0B] py-20 px-10 relative">
      <div className="max-w-7xl mx-auto">
        
    {/* Container ديال العنوان والأسهم */}
<div className="relative mb-16 flex flex-col items-center gap-6 md:block">
  
  {/* العنوان - كيبقا ديما في الوسط */}
  <h1 className="text-center font-bold text-3xl md:text-4xl text-[#A1A1A1]">
    <span className="text-[#FF8C1A]">My </span>Project
  </h1>

  {/* الأسهم - في الموبايل كيجيو الوسط تحت العنوان، وفي الكبير كيمشيو لليمن absolute */}
  <div className="flex gap-4 md:absolute md:right-0 md:bottom-0">
    <button 
      onClick={() => scroll('left')} 
      className="p-3 border border-[#1f1f1f] rounded-full text-white hover:bg-[#FF8C1A] hover:border-[#FF8C1A] transition-all active:scale-95"
    >
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>
    
    <button 
      onClick={() => scroll('right')} 
      className="p-3 border border-[#1f1f1f] rounded-full text-white hover:bg-[#FF8C1A] hover:border-[#FF8C1A] transition-all active:scale-95"
    >
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
      </svg>
    </button>
  </div>
</div>

        {/* السلايدر */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-10"
          style={{ scrollbarWidth: 'none' }}
        >
          {listProject.map((t, index) => (
            <div key={index} className="min-w-[300px] md:min-w-[400px]">
              <CardProject {...t} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;