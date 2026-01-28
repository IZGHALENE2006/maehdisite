import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

function Icons() {
  const socialLinks = [
    { icon: <FaGithub />, link: "#" },
    { icon: <FaLinkedin />, link: "#" },
    { icon: <FaEnvelope />, link: "#" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/maehdi.dev/?__pwa=1" },
  ];

  return (
    <div className="flex gap-6 mt-7 justify-center md:justify-start">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-1 pb-2 flex flex-col items-center"
        >
          {/* الـ Icon */}
          <div className="text-2xl text-[#A1A1A1] transition-all duration-300 group-hover:text-[#FF8C1A] group-hover:-translate-y-1">
            {item.icon}
          </div>

          {/* الـ Border السفلي الثابت (القديم) */}
          <div className="absolute bottom-0 w-full h-[2px] bg-[#A1A1A1]/30 rounded-full overflow-hidden">
            {/* الـ Border اللي كيدوز فوق منه (الجديد) */}
            <div className="w-0 h-full bg-[#FF8C1A] transition-all duration-500 ease-out group-hover:w-full shadow-[0_0_10px_#FF8C1A]"></div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Icons;