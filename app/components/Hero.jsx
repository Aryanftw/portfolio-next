import Image from "next/image"
import {inter,dmSans} from "@/app/layout.js"
import '../global.css'
export default function Hero(){
  return(
    <div className="h-[calc(100vh-3rem)] w-screen flex flex-col justify-center items-center gap-6">
      <Image src='/hero-image.jpg' alt="Hero Image" width={100} height={100} className="rounded-full"/>
      <div className={`${dmSans.className} text-white text-5xl font-bold`}>
         'Sup , Aryan this side !
      </div>
      <div className={`${inter.className} text-white text-md w-1/2 text-center`}>
        I am 19 almost 20 , just a curious mind building cool things on the web. If you don't find me coding, I'm prolly cheering for Real Madrid , vibing to good music, or lost into procrastinating about how the world's gonna end. If you're someone looking to ship your product, let's talk !!
      </div>
      <div className="flex space-x-4">
        <button className={`${inter.className} font-semibold border rounded-2xl w-32 h-12 bg-white text-black cursor-pointer`}>Book a meet</button>
        <button className={`${inter.className} font-semibold border rounded-2xl w-32 h-12 bg-white text-black cursor-pointer`}>Get in touch</button>
      </div>
    </div>
  )
}