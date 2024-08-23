import code from '../assets/bg/code.jpg'
import { checklistItems } from '../Constants'


export const Workflow=()=>{
    return(
        <div className="mt-10 "id="workflow">
            <h1 className="text-slate-gray px-2 py-1 font-palanquin text-5xl text-center capitalize">Accelerate your {" "} 
                <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                coding workflow</span></h1>

                <div className="flex  max-md:flex-col items-start gap-8 mt-10">


                {/* image part left side */}

                <div className="p-2 w-full lg:w-1/2 ">
                    <img src={code} alt=""className='rounded-3xl'/></div>
                


                <div className="pt-12 w-full lg:w-1/2 ">
                {checklistItems.map((item,index)=>(

                    <div className="flex mb-12 " key={index}>

                            {/* icon */}
                        

                        {/* heading and description */}

                        <div className="text-center  p-2 py-3 ">

                        <div className='flex items-center justify-start gap-3'>

                            {/* icon */}
                        <div className='fill-green-500'> 
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 512 512">
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                        </div>

                        <h1 className='font-palanquin text-2xl '>{item.title}</h1>
                       
                        </div>

                           
                            <p className='bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text  font-montserrat tracking-wide text-slate-gray mt-3'>{item.description}</p>
                        </div>
                    </div>
                ))}
                </div>
        </div>
        </div>
    )
}