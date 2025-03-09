import { Playlist } from "@/lib";
import { InlineArtists } from "@/modules/artists";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface MenuCardProps {
  playlist: Playlist;
}

export const MenuCard: FC<MenuCardProps> = ({ playlist }) => (
  <Link
    href={`/playlist/${playlist.id}`}
    className="flex group relative p-2 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none hover:bg-zinc-500/10 focus:bg-zinc-500/50"
  >
    <div className="h-12 w-12 flex-none">
      <Image
        src={playlist.cover}
        alt={playlist.title}
        className="object-cover rounded h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
        width={48}
        height={48}
      />
    </div>
    <div className="flex flex-auto flex-col truncate">
      <div className="font-semibold w-full flex-none truncate">
        {playlist.title}
      </div>
      <div className="text-gray-400 text-sm truncate flex-1">
        <InlineArtists artists={playlist.artists} />
      </div>
    </div>
  </Link>
);
