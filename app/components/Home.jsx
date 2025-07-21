import Navbar from "./Navbar"
import Hero from "./Hero"
export default function Home(){
  return(
    <div className="h-full w-full flex flex-col justify-center">
      <Navbar/>
      <Hero/>
    </div>
  )
}