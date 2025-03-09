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
    <Link
      target="_blank"
      href="https://github.com/serhiyhvala/spotify-view-transitions"
      className="text-gray-200 hover:text-white"
    >
      <Github className="h-5 w-5" />
    </Link>
  </div>
);
