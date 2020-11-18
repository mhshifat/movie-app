import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
}

const MovieImgCard: React.FC<Props> = ({ src, ...restProps }) => {
  return (
    <div {...restProps} className="mt-8">
      <img
        src={"https://image.tmdb.org/t/p/w500" + src}
        alt="parasite"
        className="hover:opacity-75 transition ease-in-out duration-150"
      />
    </div>
  );
};

export default MovieImgCard;
