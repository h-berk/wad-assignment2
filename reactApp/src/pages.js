import React from "react";
import { useContext } from "react";
import { MoviesContext } from "./moviesContext";
import { ShowsContext } from "./showsContext";

export const PublicPage = () => {
  return <h2>Public page</h2>;
};

export const Movies = () => {
  const context = useContext(MoviesContext);
  return (
    <>
      <h2>Popular Movies </h2>
      <div>
        {context.movies.results.map((movie) => {
          return <div key={movie.id}>{`${movie.id} ${movie.title} `}</div>;
        })}
      </div>
    </>
  );
};

export const Shows = () => {
  const context = useContext(ShowsContext);
  return (
    <>
      <h2>Popular TV Shows</h2>
      <div>
        {context.shows.results.map((show) => {
          return <div key={show.id}>{`${show.id} ${show.name} `}</div>;
        })}
      </div>
    </>
  );
};

export const Profile = () => {
  return <h2>My Profile </h2>;
};
export const HomePage = () => {
  return <h2>Home page</h2>;
};
