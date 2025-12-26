
function Card(props){
    const {icon,name} = props
    const Icon = icon
  return(
    <>
               <div className="flex  border border-[#1f1f1f] py-6 w-72 rounded-xl flex-col justify-center items-center gap-5 shadow-lg shadow-[#FF8C1A]/20
               transition
                 hover:scale-105
    hover:shadow-lg
    hover:shadow-[#FF8C1A]/60
    hover:border-[#FF8C1A]
               ">
               <div>
                <Icon  className='text-white text-5xl '/>
               </div>
               <h3 className="text-white font-semibold text-lg">
   {name}
  </h3>
 
             </div>
    </>
  )
}
export default Card
