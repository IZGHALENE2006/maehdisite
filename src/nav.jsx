function Nav(){
    return(
    <div className="flex justify-center items-center p-4">

  {/* LOGO */}

  {/* NAV LINKS – مخفية فـ mobile */}
  <ul className="hidden md:flex gap-8 text-textgray">
    <li className="text-[#FF8C1A] cursor-pointer hover:text-[#FF7A00]">Home</li>
    <li className="text-[#A1A1A1] hover:text-[#FF7A00] transition cursor-pointer">Skilles</li>
    <li className="text-[#A1A1A1] hover:text-[#FF7A00] cursor-pointer">About me</li>
    <li className="text-[#A1A1A1] hover:text-[#FF7A00] cursor-pointer">Project</li>
    <li className="text-[#A1A1A1] hover:text-[#FF7A00] cursor-pointer">Contact me</li>
  </ul>

  {/* BUTTON – مخفي فـ mobile */}
  {/* <button className="hidden md:block bg-[#FF8C1A] hover:bg-[#FF7A00] px-6 py-2 rounded-lg text-white">
    Hire Me
  </button> */}

</div>

    )
}
export default Nav