import { sidebarPlaylists } from "@/lib";
import { MenuItem } from "./components";
import { MenuCard } from "./components/menu-card";

export const Sidebar = () => (
  <div className="flex flex-col flex-1 gap-2">
    <div className="bg-zinc-900 rounded-lg">
      <ul>
        <MenuItem href="/" icon="home">
          Home
        </MenuItem>
        <MenuItem href="#" icon="search">
          Search
        </MenuItem>
      </ul>
    </div>

    <div className="bg-zinc-900 rounded-lg flex-1">
      <ul>
        <MenuItem href="#" icon="disc-3">
          Your library
        </MenuItem>
      </ul>
      <ul className="pl-2">
        {sidebarPlaylists.map((playlist) => (
          <MenuCard playlist={playlist} key={playlist.id} />
        ))}
      </ul>
    </div>
  </div>
);
