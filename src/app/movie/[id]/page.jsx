import { Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  console.log(movie);
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              src={`https://image.tmdb.org/t/p/original/${
                movie.backdrop_path || movie.poster_path
              }`}
              width={500}
              height={300}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {movie.tagline}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {movie.name || movie.title || movie.original_title}
              </h1>
              <p className="leading-relaxed">{movie.overview}</p>

              <div className="flex justify-between">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Relased On: {movie.release_date || movie.first_air_date}
                </span>
                <Text
                  color="blue.600"
                  fontSize="xl"
                  className="flex gap-2 items-center"
                >
                  <FiThumbsUp />
                  {movie.vote_count}
                </Text>
              </div>
              <Text
                color="blue.800"
                fontSize="xm"
                className="flex gap-2 items-center"
              >
                Runtime: {movie.runtime} minutes
              </Text>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoviePage;
