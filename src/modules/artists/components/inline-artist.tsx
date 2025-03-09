import { Playlist } from "@/lib";
import { FC, Fragment } from "react";

interface InlineArtistsProps {
  artists: Playlist["artists"];
}

export const InlineArtists: FC<InlineArtistsProps> = ({ artists }) => {
  return artists.map((artist, index) => (
    <Fragment key={artist}>
      {artist}
      {index === artists.length - 1 ? " " : ", "}
    </Fragment>
  ));
};
