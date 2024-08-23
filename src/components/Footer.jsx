import { footerItems } from "../Constants"

export const Footer=()=>{
    return(
        
             <>
            <div className="mt-10 flex flex-1 flex-wrap max-sm:flex-col gap-4 justify-evenly border-t border-slate-gray p-10">


            {footerItems.map((item,index)=>(
                <div key={index} className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4  max-md:mt-20 ">
                
                <h2 className="font-palanquin text-center uppercase text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                {item.title }
                </h2>
                
                <ul className="flex flex-col  items-center gap-3 mt-3 text-slate-gray  ">
                        {
                            item.link.map((subitem,index)=>(
                                <li key={index} className="font-montserrat hover:text-white cursor-pointer">{subitem.text}</li>
                            ))
                        }
                </ul>
                </div>
                
            ))}
            
        

            
            

        </div>

        <div className=" flex flex-col items-center ">
                <h2 className=" text-2xl font-palanquin text-center 
                 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-red-500">
                    <p>Copyright. All rights reserved @ 2024</p>

                   
                    </h2>

                    <p className="font-montserrat cursor-pointer mt-5 text-slate-gray  text-center p-6 max-w-max">
                    Terms & Conditions.
                </p>
        </div>
        
        
        
        
        </>
    )
}