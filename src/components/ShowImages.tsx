import React, { useState } from "react";
import { MovieImgCard, ShowMovieImgModal } from ".";

interface Props {
  show: any;
}

const ShowImages: React.FC<Props> = ({ show }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="show-cast border-b border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Images</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {show?.images?.backdrops
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
        movie={show}
        onClose={() => setShowImage(false)}
      />
    </div>
  );
};

export default ShowImages;
