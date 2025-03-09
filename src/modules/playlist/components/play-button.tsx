import { PlayIcon } from "lucide-react";
import { FC } from "react";
import clsx from "clsx";

interface PlayButtonProps {
  size?: "md" | "lg";
}

export const PlayButton: FC<PlayButtonProps> = ({ size = "md" }) => {
  const className = clsx([
    size === "md" && "h-12 w-12",
    size === "lg" && "h-14 w-14",
  ]);

  return (
    <span
      className={`${className} bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black`}
    >
      <PlayIcon
        name="mdi:play"
        className={clsx([
          size === "md" && "h-8 w-8",
          size === "lg" && "h-10 w-10",
        ])}
        fill="bg-black"
      />
    </span>
  );
};
