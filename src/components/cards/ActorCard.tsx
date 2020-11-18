import React from "react";
import { Link } from "react-router-dom";

interface Props {
  actor: any;
}

const ActorCard: React.FC<Props> = ({ actor }) => {
  const knownFor = actor.known_for
    .map((item: any) => (item?.title ? item.title : item?.name))
    .filter((item: any) => item !== undefined)
    .join(", ");

  return (
    <div className="actor mt-8">
      <Link to={"/actors/" + actor.id}>
        <img
          src={
            actor?.profile_path
              ? "https://image.tmdb.org/t/p/w235_and_h235_face" +
                actor.profile_path
              : "https://ui-avatars.com/api/?size=235&name=" + actor.name
          }
          alt="profile img"
          className="hover:opacity-75 transition ease-in-out duration-150"
        />
      </Link>
      <div className="mt-2">
        <Link to="/" className="text-lg hover:text-gray-300">
          {actor.name}
        </Link>
        <div className="text-sm truncate text-gray-400">{knownFor}</div>
      </div>
    </div>
  );
};

export default ActorCard;
