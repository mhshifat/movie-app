import React, { useState } from "react";
import { MovieImgCard, ShowMovieImgModal } from ".";

interface Props {
  movie: any;
}

const MovieImages: React.FC<Props> = ({ movie }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="movie-cast border-b border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Images</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {movie?.images?.backdrops
            ?.filter((_: any, ind: number) => ind < 6)
            .map((img: any, i: number) => (
              <MovieImgCard
                key={i}
                src={img.file_path}
                onClick={() => setShowImage(true)}
              />
            ))}
        </div>
      </div>

      <ShowMovieImgModal
        open={showImage}
        movie={movie}
        onClose={() => setShowImage(false)}
      />
    </div>
  );
};

export default MovieImages;
