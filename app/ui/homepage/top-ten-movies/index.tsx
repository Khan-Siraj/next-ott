"use client"
import {
  Slider
} from "@/tailwind";
import { useSelector } from "react-redux";

const index = ()=>{
  const data = [
    {
      thumbnail: "sanddust2.jpg",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "movie-abc.png",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "movie-xyz-.png",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "sanddust2.jpg",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "movie-abc.png",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "movie-xyz-.png",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "sanddust2.jpg",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "movie-abc.png",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "movie-xyz-.png",
      title: "Stream Wap",
      duration: "2:00:16"
    }
  ];
  const {AnimationReducer}:any = useSelector(response=>response);
  const {image} = AnimationReducer
  const design = (
    <>
       <div className="ease-in duration-300" style={{
        height: 600,
        background: `url(${image ? image : 'sanddust2.jpg'})`,
        backgroundSize: "cover"
      }}>
        <div className="h-full p-8" style={{
          background: "linear-gradient(to right,rgba(0,0,0,0.9),transparent)"
        }}>
          <h1 className="text-white text-3xl mb-4">Top 10 Movies</h1>
          <div className="overflow-hidden relative" style={{
            width: 330,
            height: 516
          }}>
            <Slider data={data} vertical={true} />
          </div>
        </div>
      </div>
    </>
  );
  return design;
}

export default index;
