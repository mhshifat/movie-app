import React, { Fragment, useEffect, useState } from "react";
import { MovieDbAPI } from "../services";
import ActorCard from "./cards/ActorCard";

const AllActors = () => {
  const [actors, setActors] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      if (page > 0) {
        const actors = await MovieDbAPI.getActors(page);
        setActors(actors.results);
      }
    })();
  }, [page]);

  const goNext = () => {
    setPage((page) => page + 1);
  };

  const goPrevious = () => {
    setPage((page) => page - 1);
  };

  return (
    <Fragment>
      <div className="popular-actors mb-16">
        <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
          All Actors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {actors.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-16">
        <button onClick={goPrevious}>Previous</button>
        <button onClick={goNext}>Next</button>
      </div>
    </Fragment>
  );
};

export default AllActors;
