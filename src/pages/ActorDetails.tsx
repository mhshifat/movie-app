import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ActorInfo } from "../components";
import { MovieDbAPI } from "../services";

const ActorDetails = () => {
  const [actor, setActor] = useState<any>(null);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const [actor, socialInfo] = await Promise.all([
        MovieDbAPI.getActor(+params.id, controller),
        MovieDbAPI.getActorSocialInfo(+params.id, controller),
      ]);
      actor.facebook_id = socialInfo.facebook_id;
      actor.twitter_id = socialInfo.twitter_id;
      actor.instagram_id = socialInfo.instagram_id;
      setActor(actor);
    })();
    return () => controller.abort();
  }, [params.id]);

  return true ? (
    <Fragment>
      <ActorInfo actor={actor} />

      <div className="credits border-b border-gray-800">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-semibold">Credits</h2>

          <ul className="list-disc leading-loose pl-5 mt-8">
            {actor?.credits?.cast
              ?.filter((_: any, ind: number) => ind < 20)
              .reverse()
              .map((item: any) => (
                <li key={item.credit_id}>
                  {item.release_date
                    ? new Date(item.release_date).getFullYear()
                    : "Future"}{" "}
                  &middot; {"  "}
                  <strong>
                    <Link to={"/movies/" + item.id} className="hover:underline">
                      {item?.title} {"  "}
                    </Link>
                  </strong>
                  {item?.character ? "as " + item?.character : ""}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Fragment>
  ) : null;
};

export default ActorDetails;
