import { ChevronLeft, Github } from "lucide-react";
import Link from "next/link";

export const Header = () => (
  <div className="relative z-10 py-4 px-6 flex justify-between">
    <Link
      href="/"
      className="bg-zinc-900 rounded-full inline-flex justify-center items-center h-8 w-8"
    >
      <ChevronLeft className="h-4 w-4 -ml-0.5" />
    </Link>
    <div className="flex items-center gap-3">
      <Link
        target="_blank"
        href="https://vercel.com/templates/astro/view-transitions"
        className="flex relative overflow-hidden group bg-gradient-to-br from-black/10 to-black/40 rounded-md px-2.5 h-7 text-gray-200 hover:text-white transition-colors gap-1 items-center"
      >
        <span className="text-xs">
          Deploy on <span className="font-bold">Vercel</span>
        </span>
      </Link>
      <Link
        target="_blank"
        href="https://github.com/igorm84/spotify-astro-transitions"
        className="text-gray-200 hover:text-white"
      >
        <Github className="h-5 w-5" />
      </Link>
    </div>
  </div>
);
