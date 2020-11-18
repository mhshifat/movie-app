import React from "react";
import { Link } from "react-router-dom";

interface Props {
  member: any;
}

const CastCard: React.FC<Props> = ({ member }) => {
  return (
    <div className="mt-8">
      <Link to={"/actors/" + member.id}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + member.profile_path}
          alt="parasite"
          className="hover:opacity-75 transition ease-in-out duration-150"
        />
      </Link>
      <div className="mt-2">
        <Link to="/" className="text-lg mt-2 hover:text-gray:300">
          {member.name}
        </Link>
        <div className="text-gray-400 text-sm">{member.character}</div>
      </div>
    </div>
  );
};

export default CastCard;
