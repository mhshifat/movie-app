import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShowCast, ShowImages, ShowInfo } from "../components";
import { MovieDbAPI } from "../services";

const ShowDetails = () => {
  const [show, setShow] = useState<any>(null);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const [show] = await Promise.all([
        MovieDbAPI.getShow(+params.id, controller),
      ]);
      show.genresAsString = show.genres
        .map((show: any) => show.name)
        .join(", ");
      setShow(show);
    })();
    return () => controller.abort();
  }, [params.id]);

  return show ? (
    <Fragment>
      <ShowInfo show={show} />
      <ShowCast show={show} />
      <ShowImages show={show} />
    </Fragment>
  ) : null;
};

export default ShowDetails;
