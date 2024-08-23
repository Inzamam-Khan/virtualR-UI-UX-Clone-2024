
import { features } from "../Constants"
import ai_bg from '../assets/bg/ai_bg.jpg'

export const Features=()=>{

    return(
        <div className="relative mt-20 " id="features">
           
            <div className="text-center ">
                <span className="text-5xl bg-gradient-to-r 
                from-blue-500 to-orange-500 rounded-full h-6  font-palanquin px-2 py-1 uppercase bg-clip-text text-transparent" >Features</span>

                <h2 className="font-montserrat text-slate-gray capitalize mt-10 lg:mt-15 text-5xl">Easily build 
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">{" "}your code</span>
                </h2>

            </div>


            {/* second box */}

            <div className="flex flex-wrap mt-10 lg:mt-20 ">
                {features.map((item,index)=>(


                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3  ">

                        <div className="flex items-start " >

                                {/* icon */}
                            <div className="flex mx-6 h-10 w-10 p-2 bg-slate-gray fill-orange-700 justify-center items-center rounded-full">
                                {item.icon}
                            </div>

                            <div className="">
                                <h5 className=" font-palanquin mt-1 mb-6 text-xl">
                                    {item.text}
                                </h5>

                                <p className="mb-20 font-montserrat text-slate-gray">{item.description}</p>
                            </div>



                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}