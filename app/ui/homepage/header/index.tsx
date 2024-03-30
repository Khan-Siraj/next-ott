import {
  Carousel,
  Button
} from "@/tailwind";

const index = ()=>{

  const data = [
    {
      image: "sanddust2.jpg",
      caption: <h1 className="text-white text-9xl">Movies</h1>
    },
    {
      image: "movie-abc.png",
      caption: <h1 className="text-white text-9xl">Movies</h1>
    },
    {
      image: "movie-xyz-.png",
      caption: <h1 className="text-white text-9xl">Movies</h1>
    }
  ];
  const design = (
    <>
      <div className="hidden sm:block">
        <Carousel data={data} height={600} counting={false} />
      </div>
      <div className="sm:hidden block">
        <Carousel data={data} height={300} counting={false} />
      </div>
    </>
  );
  return design;
}

export default index;
