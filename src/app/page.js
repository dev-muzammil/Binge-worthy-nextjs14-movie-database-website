import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();
  if(!res.ok){
    console.log("Failed to fetch Data")
  }
  const results = data.results
  console.log(results)
  return <div>
    <Results resultss={results}/>
  </div>;
}
