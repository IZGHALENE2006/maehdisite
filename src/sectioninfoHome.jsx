import { useEffect, useState } from "react"

function SectionInfoHome() {
  const [conter, setconter] = useState(0)
  const [conterExp, setconterExp] = useState(0)
  const [status, setstatus] = useState(true)
  const [statusExp, setstatuExps] = useState(true)

  useEffect(() => {
    if (!status) return

    const timer = setTimeout(() => {
      setconter(conter + 1)
    }, 100)

    if (conter === 11) {
      setstatus(false)
    }

    return () => clearTimeout(timer)
  }, [conter, status])
  useEffect(() => {
    if (!statusExp) return

    const timer = setTimeout(() => {
      setconterExp(conterExp + 1)
    }, 100)

    if (conter === 2) {
      setstatuExps(false)
    }

    return () => clearTimeout(timer)
  }, [conter, statusExp])
  return (
    <div className="bg-[#1f1f1fff] w-full md:w-110 flex flex-col md:flex-row gap-6 p-4 rounded-lg mt-9 justify-center items-center">
      
      <div className="text-center cursor-pointer">
        <h1 className="text-[#FF7A00] text-xl font-bold">{conterExp}+</h1>
        <h3 className="text-white">Experiences</h3>
      </div>

      <div className=" md:h-15 md:w-[2px] w-42 h-[2px] [2px] bg-[#2A2A2A]"></div>

      <div className="text-center cursor-pointer">
        <h1 className="text-[#FF7A00] text-xl font-bold">{conter}+</h1>
        <h3 className="text-white">Project done</h3>
      </div>

      <div className=" md:h-15 md:w-[2px] w-42 h-[2px] [2px] bg-[#2A2A2A]"></div>

      <div className="text-center">
        <h1 className="text-[#FF7A00] text-xl font-bold">4+</h1>
        <h3 className="text-white">Happy Clients</h3>
      </div>

    </div>
  )
}
export default SectionInfoHome