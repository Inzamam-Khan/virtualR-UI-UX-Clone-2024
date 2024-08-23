import { testimonials } from "../Constants"


export const Testimonials = () => {
    return (
        <div className="mt-10 " id="testimonials">


            <div className="text-center ">
                <span className="text-5xl bg-gradient-to-r 
                from-blue-500 to-orange-500 rounded-full h-6  font-palanquin px-2 py-1 
                uppercase bg-clip-text text-transparent" >customer's Review</span>
                </div>

                <div className="flex flex-wrap justify-center mt-5">

                    {testimonials.map((item,index)=>(

                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">

                            <div className="border border-slate-gray rounded-md p-6 text-md ">
                                    <p className="leading-normal font-montserrat text-sm">{item.text}</p>

                                <div className="mt-3  flex items-center justify-center gap-4">
                                    <img src={item.image}  className="w-10 h-10 rounded-full "   alt="" />
                                    <h2 className="font-palanquin text-slate-gray">{item.user}</h2>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

        </div>
    )
}