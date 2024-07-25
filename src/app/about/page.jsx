import React from "react";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-3 space-y-6 mt-6">
      <h1 className="text-4xl text-center font-bold text-emerald-600">
        <span className="text-4xl text-white bg-gradient-to-r from-pink-500 to-purple-700 py-1 px-2 rounded-xl">
          Binge
        </span>
        <span className="text-3xl">Worthy</span> - Your Ultimate Movie Companion
      </h1>
      <p className="font-semibold text-xl">
        ‎ ‎ ‎ ‎ ‎ Binge Worthy is your one-stop destination for everything movies.
        Inspired by the thrill of discovering the perfect binge-watch, we&apos;ve
        created a comprehensive platform that offers in-depth information,
        expert reviews, and personalized recommendations to help you find your
        next cinematic obsession.
      </p>
      <p className="font-semibold text-xl">
        Just like IMDb, but with a focus on the binge-worthy experience. We
        understand that choosing what to watch can be overwhelming, so we&apos;ve
        designed Binge Worthy to be your trusted guide through the vast world of
        cinema.
      </p>
      <UnorderedList className="text-xl">
        <h1 className="text-xl font-semibold text-emerald-600">
          Key Features:
        </h1>
        <ListItem>
          Discover a vast collection of movies, from classic blockbusters to
          independent gems.
        </ListItem>
        <ListItem>
          Explore detailed information about each movie, including plot
          summaries, cast and crew, trailers, ratings, and user reviews.
        </ListItem>
        <ListItem>
          Read professional and user-generated reviews to help you make informed
          decisions.
        </ListItem>
        <ListItem>
          Dive deeper into the world of filmmaking with exclusive interviews,
          featurettes, and making-of documentaries.
        </ListItem>
      </UnorderedList>
      <p className="font-semibold text-xl">
        Whether you&apos;re a casual moviegoer or a dedicated cinephile, Binge Worthy
        is your go-to resource for discovering and enjoying great films.
      </p>
      <p className="font-semibold text-xl text-center text-emerald-600">
        Join the Binge Worthy community and let us help you find your next
        obsession!
      </p>
    </div>
  );
};

export default About;
