import { pricingOptions } from "../Constants"

export const Pricing = () => {
    return (
        <div className="mt-20"id="pricing">

            <div className="text-center ">
                <span className="text-5xl bg-gradient-to-r 
                from-blue-500 to-orange-500 rounded-full h-6  font-palanquin px-2 py-1 uppercase bg-clip-text text-transparent" >Pricing</span>

                <h2 className="font-montserrat text-slate-gray capitalize mt-10 lg:mt-15 text-5xl">Easily build
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">{" "}your code</span>
                </h2>

            </div>

            {/* second div */}

            <div className="flex flex-1 flex-wrap mt-10">
                {pricingOptions.map((item, index) => (


                    <div className="w-full sm:w-1/2 lg:w-1/3 p-2"
                        key={index}>

                        <div className="p-10 border border-neutral-700 rounded-xl">

                            <p className="text-4xl mb-8 font-palanquin">{item.title}
                                {item.title === "Pro" && (<span className="max-xl:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">{" "}(Most Popular)</span>)}
                            </p>

                            <p className="mb-8">
                                <span className="font-palanquin text-5xl mt-6 mr-2">{item.price}</span>
                                <span className="font-montserrat text-xl text-slate-gray ">/Month</span>
                            </p>

                            <ul>
                                {item.features.map((feature, index) => (
                                    <li className="mt-8 flex items-center " key={index}>


                                        <div className='bg-green-500 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} fill="#0a1128" viewBox="0 0 512 512">
                                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                        </div>

                                        <span className="ml-2">
                                            {feature}
                                        </span>
                                    </li>

                                ))}
                            </ul>


                            <div className="flex justify-center items-center mt-10" >
               
                <a href="#" className="hover:text-slate-gray font-palanquin rounded-md px-10 py-3 bg-gradient-to-r from-orange-500 to-red-500">
                    Subscribe</a>
            </div>




                        </div>

                    </div>
                ))}
            </div>




        </div>
    )
}