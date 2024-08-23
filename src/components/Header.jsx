import { useState } from 'react'
import appLogo from '../assets/bg/appLogo.png'
import { navItems } from '../Constants'
import { HeaderBtn } from './HeaderBtn'
export const Header=()=>{

    const [isOpen,setIsOpen]=useState(false)

    return(<>
        <nav className=" sticky top-8 z-50 py-3 backdrop-blur-sm border-b border-neutral-700  ">
            
            <div className="container relative text-sm  min-w-full ">
                    
                    <div className="flex flex-1 justify-between items-center gap-4 px-3 mx-2">
                        
                        
                        {/* first div */}
                        <a href="#home">
                        <div className="flex  items-center justify-  cursor-pointer ">
                            
                            <img src={appLogo} alt=""width={30} className='rounded-full  mr-2'  />
                            <span className='text-xl tracking-tight text-blue-500'>Virtual</span>
                            <span className="text-xl tracking-tight text-orange-500 ">R</span>
                            
                        </div>
                        </a>

                        {/* second div content */}
                        {/* hidden lg:flex */}
                        <ul className="space-x-12 max-md:hidden flex  ">
                            {navItems.map((item,index)=>
                                    <li key={index} className='hover:text-slate-gray'>
                                        <a href={item.href}>{item.label}</a>

                                    </li>
                        )}
                            </ul> 


                            {/* third div button  */}
                            <div className="flex  justify-center gap-8 items-center max-md:hidden">

                               <HeaderBtn label={"Sign in"} link="#"/>

                               <HeaderBtn label={"Create Account"} />

                            </div>

                            {/* fourth div hamburger or close icon */}

                            <div className='w-4 fill-blue-400 hidden max-md:block hover:fill-white ' >
                           
                           {isOpen? (<svg onClick={()=>setIsOpen(!isOpen)}  xmlns="http://www.w3.org/2000/svg" fill='white' className='cursor-pointer hover:fill-red-500' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> ):
                           ( <svg onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>)}
                           
                            </div>

                            </div>

                    </div>
            
        </nav>

<div className={`md:hidden fixed top-[5.5em] backdrop-blur-3xl bg-transparent transform ease-in-out transition-all duration-300 ${isOpen? `translate-x-0`:`translate-x-[50rem]`} overflow-hidden fixed z-20  bg-neutral-900 w-full py-12 flex flex-col justify-center items-center `}>
                                 
<ul className='flex flex-col items-center'>
   {navItems.map((item,index)=>(
       <li key={index} className='py-2 mb-2 cursor-pointer hover:text-blue-500'>
           <a href={item.href} className="">
               {item.label}
           </a>
           
       </li>
   ))}
   
</ul>

<div className=" flex flex-1 gap-4 justify-evenly">
    <HeaderBtn label="Sign in" link="#" />
    <HeaderBtn label="Create Account" link="#"/>
</div>

</div>
   </> )
}