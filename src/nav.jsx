const Nav = () => {
  const navLinks = [
    { name: "Home", active: true },
    { name: "Skills", active: false },
    { name: "About me", active: false },
    { name: "Project", active: false },
    { name: "Contact me", active: false },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        
        {/* LOGO - تقدر تزيد اللوغو هنا */}
        <div className="text-2xl font-bold text-[#FF8C1A] cursor-pointer">
          MAEHDIDEV<span className="text-white">.</span>
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`text-sm font-medium transition-all duration-300 cursor-pointer hover:text-[#FF8C1A] ${
                link.active ? "text-[#FF8C1A]" : "text-[#A1A1A1]"
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* HIRED BUTTON */}
        <button className="hidden md:block bg-[#FF8C1A] hover:bg-[#FF7A00] transition-colors px-6 py-2 rounded-full text-white font-semibold text-sm">
          Hire Me
        </button>

        {/* MOBILE ICON (Optional) - يمكن تزيد هنا أيقونة Menu للموبايل */}
        <div className="md:hidden text-[#FF8C1A]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </div>
      </div>
    </nav>
  );
};

export default Nav;