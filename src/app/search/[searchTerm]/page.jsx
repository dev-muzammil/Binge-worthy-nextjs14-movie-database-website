import Results from "@/components/Results";
import React from "react";

const page = async ({ params }) => {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1`
  );
  const data = await res.json()
  const results = data.results
  return <div>

    {
        results && <Results resultss={results}/>
    }
  </div>;
};

export default page;
