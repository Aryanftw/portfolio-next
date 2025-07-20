import { inter,dmSans } from "./layout"
import Home from "./components/Home"
export default function Page(){
   return(
    <div className={`text-5xl ${inter.className}`}>
      <Home/>
    </div>
   )
}