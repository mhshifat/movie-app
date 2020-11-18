import React from "react";
import CastCard from "./cards/CastCard";

interface Props {
  movie: any;
}

const MovieCast: React.FC<Props> = ({ movie }) => {
  return (
    <div className="movie-cast border-b border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Cast</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {movie?.credits?.cast
            ?.filter((_: any, ind: number) => ind < 5)
            .map((member: any) => (
              <CastCard key={member.credit_id} member={member} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCast;
