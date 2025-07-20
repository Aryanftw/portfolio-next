import { inter,dmSans } from "./layout"
import Home from "./components/Home"
export default function Page(){
   return(
    <div className={`${inter.className} bg-black h-screen w-screen text-white`}>
      <Home/>
    </div>
   )
}