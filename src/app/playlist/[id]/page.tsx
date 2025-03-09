import { allPlaylists } from "@/lib";
import { InlineArtists } from "@/modules/artists";
import { Header } from "@/modules/header";
import { MusicsTable } from "@/modules/music";
import { PlayButton } from "@/modules/playlist";
import { ViewTransition } from "@/modules/view-transition";
import Image from "next/image";

type PlaylistPageProps = Promise<{ id: string }>;

const PlaylistPage = async ({ params }: { params: PlaylistPageProps }) => {
  const { id } = await params;

  const playlist = allPlaylists.find((playlist) => playlist.id === id);

  return (
    <ViewTransition name={`playlist-page-${playlist?.id}`}>
      <div className="relative bg-zinc-900 min-h-full flex flex-col overflow-x-hidden rounded-lg">
        <Header />
        <div className="flex flex-col items-center md:flex-row md:items-stretch gap-8 px-6 z-[2]">
          <div className="h-52 w-52 flex-none">
            <Image
              src={playlist?.cover ?? ""}
              alt={playlist?.title ?? ""}
              className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
              width={520}
              height={520}
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-1 items-end">Playlist</div>
            <div>
              <h1 className="title-clamp font-bold block">{playlist?.title}</h1>
            </div>
            <div className="flex-1 flex items-end">
              <div className="text-sm">
                <InlineArtists artists={playlist?.artists || []} />
                <div className="mt-1">
                  <span className="font-semibold">58 likes</span>, 83 musics,{" "}
                  <span className="text-gray-300">about 3h 15min</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/30 mt-6 flex-1 p-6 blur-100 z-[2]">
          <div className="flex gap-1 items-center">
            <PlayButton size="lg" />
            <div className="ml-4"></div>
            {/* <LikeButton /> */}
            {/* <DotsButton /> */}
          </div>
          <div className="px-6 pt-4">
            <MusicsTable />
          </div>
        </div>
        <div className="absolute h-screen inset-0 bg-gradient-to-b from-context">
          <Image
            src={playlist?.cover ?? ""}
            alt={playlist?.title ?? ""}
            className="el-to-fade transition-all duration-500 z-[1] absolute inset-0 mix-blend-overlay opacity-20 scale-90 w-full h-full object-cover blur-md"
            width={800}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t via-transparent from-zinc-900"></div>
        </div>
      </div>
    </ViewTransition>
  );
};

export default PlaylistPage;
