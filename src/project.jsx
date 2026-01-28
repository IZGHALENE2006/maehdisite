import CardProject from "./cardproject"

function Project(){
   const listProject= [
      {nom:"System gestion Complet",discription:"gestion les produit compte et  show les statistique ",linkto:"test",img:"./projectimg/img1.png"}
   ]
    return(
 <div className="bg-[#0B0B0B] flex flex-col pl-10 h-screen">
    <h1 className="text-center text-[#A1A1A1] font-bold text-4xl mt-4">Project</h1>
    <div className="flex flex-col md:flex-row gap-10 ">
        {listProject.map((t)=>{
         return(
             <CardProject
             nom={t.nom}
             discription={t.discription}
             linkto={t.linkto}
             img={t.img}
             />
         )
        })}
    </div>
 </div>
    )
}
export default Project