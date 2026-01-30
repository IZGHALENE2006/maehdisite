function Card({ icon: Icon, name }) {
  return (
    <div className="group relative flex flex-col justify-center items-center gap-6 
                    w-72 py-8 px-4 rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a]
                    transition-all duration-300 ease-out
                    hover:border-[#FF8C1A] hover:-translate-y-2
                    shadow-lg shadow-[#FF8C1A]/40
                    overflow-hidden">
      
      {/* تأثير الإضاءة الخلفية (Glow effect) كيبان غير فاش كيدوز الماوس */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C1A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Container ديال الأيقونة */}
      <div className="relative z-10 p-4 rounded-full bg-[#161616] text-[#A1A1A1] 
                      group-hover:text-[#FF8C1A] group-hover:scale-110 
                      transition-all duration-300 shadow-inner">
        <Icon className="text-5xl" />
      </div>

      {/* العنوان */}
      <h3 className="relative z-10 text-white font-bold text-xl tracking-wide group-hover:text-white transition-colors">
        {name}
      </h3>

      {/* الخط الصغير اللي كيبان لتحت فاش كيدوز الماوس */}
      <div className="absolute bottom-0 left-0 h-1 bg-[#FF8C1A] w-0 group-hover:w-full transition-all duration-500" />
    </div>
  );
}

export default Card;