import { House, StickyNote, CodeXml, User, Tally1, Github, Twitter, Linkedin, Moon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white/10 mt-8 backdrop-blur-lg h-12 w-1/2 flex justify-center items-center border border-white/40 rounded-full gap-6 px-4">
      <div className="p-2 rounded-full transition-all duration-200 hover:bg-gray-300/30 cursor-pointer">
        <House size={20} className="transition-colors duration-200 hover:text-gray-200" />
      </div>
      <div className="p-2 rounded-full transition-all duration-200 hover:bg-gray-300/30 cursor-pointer">
        <CodeXml size={20} className="transition-colors duration-200 hover:text-gray-200" />
      </div>
      <div className="p-2 rounded-full transition-all duration-200 hover:bg-gray-300/30 cursor-pointer">
        <User size={20} className="transition-colors duration-200 hover:text-gray-200" />
      </div>
      <div className="p-2 rounded-full transition-all duration-200 hover:bg-gray-300/30 cursor-pointer">
        <Tally1 size={20} className="transition-colors duration-200 hover:text-gray-200" />
      </div>
      <div className="p-2 rounded-full transition-all duration-200 hover:bg-gray-300/30 cursor-pointer">
        <StickyNote size={20} className="transition-colors duration-200 hover:text-gray-200" />
      </div>
      <div className="p-2 rounded-full transition-all duration-200 hover:bg-gray-300/30 cursor-pointer">
        <Github size={20} className="transition-colors duration-200 hover:text-gray-200" />
      </div>
      <div className="p-2 rounded-full transition-all duration-200 hover:bg-gray-300/30 cursor-pointer">
        <Twitter size={20} className="transition-colors duration-200 hover:text-gray-200" />
      </div>
      <div className="p-2 rounded-full transition-all duration-200 hover:bg-gray-300/30 cursor-pointer">
        <Linkedin size={20} className="transition-colors duration-200 hover:text-gray-200" />
      </div>
      <div className="p-2 rounded-full transition-all duration-200 hover:bg-gray-300/30 cursor-pointer">
        <Tally1 size={20} className="transition-colors duration-200 hover:text-gray-200" />
      </div>
      <div className="p-2 rounded-full transition-all duration-200 hover:bg-gray-300/30 cursor-pointer">
        <Moon size={20} className="transition-colors duration-200 hover:text-gray-200" />
      </div>
    </div>
  );
}
