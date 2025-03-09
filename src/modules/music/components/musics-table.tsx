import { songs } from "@/lib";
import { InlineArtists } from "@/modules/artists";
import { TimerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const MusicsTable = () => (
  <table className="table-auto text-left min-w-full divide-y-2 divide-gray-500/30">
    <thead>
      <tr className="text-gray-300">
        <th className="font-normal px-4 py-2 whitespace-nowrap">#</th>
        <th className="font-normal px-4 py-2 whitespace-nowrap">Title</th>
        <th className="font-normal px-4 py-2 whitespace-nowrap">Album</th>
        <th className="font-normal px-4 py-2 whitespace-nowrap text-right">
          <TimerIcon className="inline-block h-5 w-5" />
        </th>
      </tr>
    </thead>
    <tbody>
      {songs.map((song, index) => (
        <tr className="group hover:bg-gray-500/20" key={song.id}>
          <td className="whitespace-nowrap px-4 py-2">{index + 1}</td>
          <td className="whitespace-nowrap px-4 py-2 flex gap-3 items-center">
            <div className="h-10 w-10">
              <Image
                src={song.image}
                alt={song.title}
                className="rounded object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
                width={520}
                height={520}
              />
            </div>
            <div className="leading-none">
              <Link
                href="#"
                className="text-gray-300 group-hover:text-white hover:underline text-sm"
              >
                {song.title}
              </Link>
              <div className="text-sm text-gray-300 group-hover:text-white">
                <InlineArtists artists={song.artists} />
              </div>
            </div>
          </td>
          <td className="whitespace-nowrap px-4 py-2">
            <Link
              href="#"
              className="text-gray-300 group-hover:text-white hover:underline text-sm"
            >
              {song.album}
            </Link>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-right">
            {song.duration}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
