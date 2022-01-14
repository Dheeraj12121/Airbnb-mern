import Image from "next/image";

const Banner = () => {
    return (
        <div className="relative  h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
                src={`https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg text-white">Not sure where to go? Perfect.</p>
                 
                 <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-lg
                 active:scale-90 transition duration-150 hover:shadow-white">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner;
