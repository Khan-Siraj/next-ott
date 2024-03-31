import {
  Carousel,
  Button,
  Icon
} from "@/tailwind";

const index = ()=>{

  const Caption = ({data}:any)=>{
    const design = (
      <>
        <div className="flex flex-col gap-4 sm:gap-10 px-5">
          <div>
            <h1 className="text-white font-bold text-3xl sm:text-8xl mb-3">{data.title}</h1>
            <div className="flex gap-16 items-center">
              <div>
                {
                  Array(data.rating).fill(0).map((item,index)=>{
                    return <Icon className="text-red-600" key={index}>star</Icon>;
                  })
                }
                {
                  Array(5-data.rating).fill(0).map((item,index)=>{
                    return <Icon className="text-red-600" key={index}>star_outline</Icon>;
                  })
                }
              </div>
              <p className="text-white text-lg"><span className="text-red-600 font-bold">Duration</span> : {data.duration}</p>
            </div>
          </div>
          <div className="flex flex-col text-white gap-0 sm:gap-2 text-lg">
            <p><span className="text-red-600 font-bold">Starring</span> : {data.starring}</p>
            <p><span className="text-red-600 font-bold">Category</span> : {data.category}</p>
            <p><span className="text-red-600 font-bold">Tags</span> : {data.tags}</p>
          </div>
          <div>
            <Button theme="error" className="flex gap-2 py-3.5 px-6">
              <Icon>play_circle</Icon>
              PLAY NOW
            </Button>
          </div>
        </div>
      </>
    );
    return design;
  }

  const data = [
    {
      image: "sanddust2.jpg",
      caption: <Caption
        data={{
          title: "STREAM WAP",
          rating: 4,
          duration: "02:00:16",
          starring: "Wap Students",
          category: "Drama, Action, Comedy",
          tags: "Drama, Action, Comedy"
        }}
      />
    },
    {
      image: "movie-abc.png",
      caption: <Caption
        data={{
          title: "STREAM WAP NEW",
          rating: 3,
          duration: "02:00:16",
          starring: "Wap Students",
          category: "Drama, Action, Comedy",
          tags: "Drama, Action, Comedy"
        }}
      />
    },
    {
      image: "movie-xyz-.png",
      caption: <Caption
        data={{
          title: "LATEST STREAM WAP",
          rating: 2,
          duration: "02:00:16",
          starring: "Wap Students",
          category: "Drama, Action, Comedy",
          tags: "Drama, Action, Comedy"
        }}
      />
    }
  ];
  const design = (
    <>
      <div className="hidden sm:block">
        <Carousel data={data} height={600} counting={false} />
      </div>
      <div className="sm:hidden block">
        <Carousel data={data} height={300} counting={false} dots={false} />
      </div>
    </>
  );
  return design;
}

export default index;
