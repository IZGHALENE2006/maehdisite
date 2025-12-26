function Nav(){
    return(
        <div className="flex justify-between items-center p-4 ">

            <h1 className="text-[#FF7A00] text-2xl">Mahdi</h1>

            <ul>
               <ul class="flex gap-8 text-textgray">
    <li class="text-[#FF8C1A] cursor-pointer hover:text-[#FF7A00]">Home</li>
    <li class=" text-[#A1A1A1] hover:text-[#FF7A00] transition cursor-pointer">Skilles</li>
    <li class=" text-[#A1A1A1] hover:text-[#FF7A00] cursor-pointer">About me</li>
    <li class=" text-[#A1A1A1] hover:text-[#FF7A00] cursor-pointer">Project</li>
    <li class=" text-[#A1A1A1] hover:text-[#FF7A00] cursor-pointer">Contact me</li>
  </ul>
            </ul>

           
  <button class="bg-[#FF8C1A] hover:bg-[#FF7A00] px-6 py-2 rounded-lg text-white ">
    Hire Me
  </button>
        </div>
    )
}
export default Nav