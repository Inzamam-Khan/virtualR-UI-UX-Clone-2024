import { Features } from "./components/Features"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { Pricing } from "./components/Pricing"
import { Testimonials } from "./components/Testimonials"
import { Workflow } from "./components/Workflow"



function App() {

  


  return (
   <>
   <Header/>
   <div className="max-w-7xl mx-auto mt-[2rem]  px-6">
   <HeroSection/>
   <Features/>
   <Workflow/>
   <Pricing/>
   <Testimonials/>
   <Footer/>
   </div>
   
  </>
  
  )
}

export default App
