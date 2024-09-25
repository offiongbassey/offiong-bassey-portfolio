const StrokeBackground = () => {
    return (
        <div className="absolute inset-0 z-[-1] grid grid-cols-5 md:grid-cols-10 grid-rows-10 md:grid-rows-10 md:rounded-full h-screen md:h-full animate-pulse overflow-hidden">

            {[...Array(100)].map((_, index) => (
                <div key={index} className="border-[0.2px] dark:border-zinc-800 border-zinc-400 md:border-zinc-500 opacity-50 rounded-3xl" />
            ))}
        </div>
    )
}

export default StrokeBackground;