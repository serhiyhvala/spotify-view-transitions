import { Playlist } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { PlayButton } from "./play-button";
import { ViewTransition } from "@/modules/view-transition";

interface PlaylistItemCardProps {
  playlist: Playlist;
}

export const PlaylistItemCard: FC<PlaylistItemCardProps> = ({ playlist }) => (
  <ViewTransition name={`playlist-item-card-${playlist.id}`}>
    <Link
      href={`/playlist/${playlist.id}`}
      className="playlist-item flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50"
    >
      <div className="h-20 w-20">
        <Image
          src={playlist.cover}
          alt={playlist.title}
          className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
          width={80}
          height={80}
        />
      </div>
      <div className="font-bold block">{playlist.title}</div>
      <div
        className={
          "absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }
      >
        <PlayButton />
      </div>
    </Link>
  </ViewTransition>
);
