import Header from "./header";
import LatestMovies from "./latest-movies";
import TopTenMovies from "./top-ten-movies";
import TrendingMovies from "./trending-movies";
import UpcommingMovies from "./upcomming-movies";
const index = ()=>{
  const design = (
    <>
      <Header />
      <div className="bg-slate-800 p-8 sm:p-16">
        <div className="flex flex-col gap-8 sm:gap-16">
          <LatestMovies />
          <UpcommingMovies />
          <TopTenMovies />
          <TrendingMovies />
        </div>
      </div>
    </>
  );
  return design;
}

export default index;
