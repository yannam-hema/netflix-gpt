const ViedoTitle=({title,overview})=>{
    return (
        <div className=" mt-36 w-1/2 pl-20 absolute p-[2%] md:p-[10%]">
         <h1 className=" font-semibold text-2xl md:font-bold md:text-5xl text-white ">{title}</h1>
         <p className="hidden md:inline-block py-6 text-lg text-white">{overview}</p>
         <div>
            <button className="bg-white text-black px-3 py-1 md:px-6 md:py-3 mx-2 rounded-lg text-lg bg-opacity-55 hover:bg-opacity-70">
             Play▶️
            </button>
            <button className=" hidden md:inline-block bg-white text-black px-6 py-3 mx-2 rounded-lg text-lg bg-opacity-55 hover:bg-opacity-70">
             More Info
            </button>
         </div>
        </div>
    )
}

export default ViedoTitle;