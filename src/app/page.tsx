import { morePlaylists, playlists } from "@/lib";
import { Greetings } from "@/modules/greetings";
import { Header } from "@/modules/header";
import { PlaylistCard, PlaylistItemCard } from "@/modules/playlist";

const HomePage = () => (
  <div className="relative transition-all duration-1000 bg-context">
    <Header />
    <div className="relative z-10 px-6">
      <Greetings />
      <div className="grid gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-6">
        {playlists.map((playlist) => (
          <PlaylistItemCard playlist={playlist} key={playlist.id} />
        ))}
      </div>
    </div>
    <div className="px-6 relative z-10 mt-4">
      <h2 className="text-2xl font-bold">Made for you</h2>
      <div className="flex flex-wrap mt-6 gap-4">
        {morePlaylists.map((playlist) => (
          <PlaylistCard playlist={playlist} key={playlist.id} />
        ))}
      </div>
    </div>
  </div>
);

export default HomePage;
