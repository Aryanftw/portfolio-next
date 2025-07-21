import {
  House,
  StickyNote,
  CodeXml,
  User,
  Tally1,
  Github,
  Twitter,
  Linkedin,
  Moon,
} from "lucide-react";
import Link from "next/link";
import { inter } from "../layout";

const navItems = [
  { icon: House, label: "Home", href: "/" },
  { icon: CodeXml, label: "Projects", href: "/projects" },
  { icon: User, label: "About", href: "/about" },
  { icon: Tally1, label: "Stats" },
  { icon: StickyNote, label: "Resume", href: "/resume" },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Aryanftw",
    external: true,
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://x.com/KageAy31039",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aryan-parmar-90b10a324/",
    external: true,
  },
  { icon: Tally1, label: "More" },
  { icon: Moon, label: "Dark Mode" },
];

export default function Navbar() {
  return (
    <div className={`bg-white/10 fixed top-8 left-1/2 -translate-x-1/2 backdrop-blur-lg h-12 w-1/2 flex justify-center items-center border border-white/40 rounded-full gap-6 px-4 ${inter.className}`}>
      {navItems.map((item, index) => {
        const Icon = item.icon;

        if (!item.href) {
          return (
            <div key={index}>
              <Icon
                size={20}
                className="transition-colors duration-200 hover:text-gray-200"
              />
            </div>
          );
        }

        const linkContent = (
          <div className="p-2 rounded-full transition-all duration-200 hover:bg-gray-300/30 cursor-pointer">
            <Icon
              size={20}
              className="transition-colors duration-200 hover:text-gray-200"
            />
          </div>
        );

        return (
          <div key={index} className="relative group">
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {linkContent}
              </a>
            ) : (
              <Link href={item.href}>{linkContent}</Link>
            )}
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gray-300 text-black text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
