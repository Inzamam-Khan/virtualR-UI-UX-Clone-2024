import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'


export const HeroSection=()=>{
    return (
        <div className="flex flex-col item-center mt-6 lg:mt-18 flex-1" id="home">

                <div className="flex justify-center flex-col items-center">

            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide  max-w-[900px] font-palanquin">
                VirtualR build tools 
                <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-red-800 text-transparent" >
                    {" "}for Developers
                </span>
            </h1>

            <p className=" max-w-[700px] font-montserrat bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text p-4">
            Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
            </p>
            </div>


            <div className="flex justify-center items-center my-10 gap-6" >
                <a href="#" className=" font-palanquin rounded-md px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500">
                    Start for Free</a>


                   <div className=" rounded-md px-1 py-3 bg-gradient-to-tr from-red-500 to-blue-500 ">
                   <a href="#" className=" rounded-md px-3 py-2  hover:text-slate-gray bg-[#0a1128]   ">
                    Documentation
                </a></div> 
                
            </div>

            {/* video tags */}
            <div className="flex justify-evenly mt-8 max-sm:flex-col max-sm:gap-8"> 
                <video autoPlay loop muted className="rounded-lg sm:w-1/3  ">
                <source  src={video1} type="video/mp4"/>
                
                </video>

                <video autoPlay loop muted className="rounded-lg sm:w-1/3 ">
               
                <source src={video2} type="video/mp4"/>
                </video>

            </div>

            
        </div>
    )
}