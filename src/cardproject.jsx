function CardProject(props) {
  const { nom, discription, linkto, img } = props

  return (
    <div
      className="
        group
        flex flex-col
        bg-[#111111]
        rounded-2xl
        overflow-hidden
        border border-[#1f1f1f]
        transition-all duration-300
        shadow-lg
        shadow-[#FF8C1A]/10
        hover:scale-105
        hover:shadow-lg
        hover:shadow-[#FF8C1A]/40
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={nom}
          className="
            w-full h-48 object-cover
            transition-transform duration-500
            
          "
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-3 p-5">
        <h1 className="text-white text-xl font-semibold">
          {nom}
        </h1>

        <p className="text-[#A1A1A1] text-sm leading-relaxed">
          {discription}
        </p>

        <a href={linkto} target="_blank" rel="noreferrer">
          <button
            className="
              mt-2
              w-fit
              px-6 py-2
              bg-[#FF8C1A]
              text-white
              rounded-lg
              font-medium
              transition-all duration-300
              hover:bg-[#FF7A00]
              hover:shadow-md
              hover:shadow-[#FF8C1A]/50
            "
          >
            Show Project
          </button>
        </a>
      </div>
    </div>
  )
}

export default CardProject
