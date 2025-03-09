import { Playlist } from "@/lib";
import { FC, Fragment } from "react";

interface InlineArtistProps {
  artists: Playlist["artists"];
}

export const InlineArtist: FC<InlineArtistProps> = ({ artists }) => {
  return artists.map((artist, index) => (
    <Fragment key={artist}>
      {artist}
      {index === artists.length - 1 ? " " : ", "}
    </Fragment>
  ));
};
