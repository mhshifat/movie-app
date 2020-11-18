import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components/layouts";
import {
  ActorDetails,
  Actors,
  Home,
  MovieDetails,
  ShowDetails,
  Shows,
} from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <div className="font-sans bg-gray-900 text-white">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/actors" component={Actors} />
          <Route exact path="/actors/:id" component={ActorDetails} />
          <Route exact path="/shows" component={Shows} />
          <Route exact path="/shows/:id" component={ShowDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
