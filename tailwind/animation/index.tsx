"use client"
import {
  Icon
} from "..";
import { useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useGesture } from "react-use-gesture";

export const Carousel = ({data,height=720,arrow=true,dots=true,counting=true}:any)=>{
  const [count,setCount] = useState(0);
  const [move,setMove] = useState(0);

  useEffect(()=>{
  //let timer = setTimeout(next,5000);
    api.start({
      x: -move+"%"
    });
    return ()=>{
      //clearTimeout(timer);// cleanup function
    }
  },[move])

  const [springs,api] = useSprings(data.length,(index:any)=>({
    x: "0%"
  }));

  const prev = ()=>{
    if((count+1) > 1)
    {
      setCount(count-1);
      setMove(move-100);
    }
    else {
      setCount(data.length-1);
      setMove(100*(data.length-1))
    }
  }

  const next = ()=>{
    if((count+1) < data.length)
    {
      setCount(count+1);
      setMove(move+100);
    }
    else {
      setCount(0);
      setMove(0)
    }
  }

  const dotsControl = (index:any)=>{
    setCount(index);
    setMove(100*index);
  }

  const onDragEnd = (e:any)=>{
    let left = e.direction[0];
    if(left > 0)
    {
      prev();
    }
    else {
      next();
    }
  }

  const bind = useGesture({
    onDragEnd: onDragEnd
  });

  const Anim = ({styles,index}:any)=>{
    const a = (
      <>
        <animated.div
          className="flex items-center"
          {...bind()}
          style={{
          width: "100%",
          height: height,
          background: `url(${data[index].image})`,
          backgroundSize: "cover",
          ...styles
        }}>
          <div className="p-8 sm:p-16 w-full">
            {
              data[index].caption
            }
          </div>
        </animated.div>
      </>
    );
    return a;
  }
  const design = (
    <>
      <div className="overflow-hidden relative">
        <div className="flex" style={{
          width: `${100*data.length}%`
        }}>
          {
            springs.map((styles,index)=>{
              return <Anim key={index} styles={styles} index={index} />
            })
          }
        </div>

        <div className="absolute top-0 left-0 p-5 h-full flex flex-col justify-between">
          <label>{counting ? (count+1/data.length) : null}</label>
          {
            arrow ?
            <button onClick={prev}>
              <Icon className="text-white">arrow_back_ios</Icon>
            </button> : null
          }
          <label></label>
        </div>

        <div className="absolute top-0 right-0 p-5 h-full flex flex-col justify-between">
          <label></label>
          {
            arrow ?
            <button onClick={next}>
              <Icon className="text-white">arrow_forward_ios</Icon>
            </button> : null
          }

          <label></label>
        </div>

        {
          dots ? <div className="absolute bottom-0 left-0 p-5 w-full flex justify-center">
            <div className="flex gap-3">
              {
                data.map((item:any,index:any)=>{
                  return (
                    <button key={index} onClick={()=>dotsControl(index)} style={{
                      width: 50,
                      height: 5,
                      background: count === index ? "white" : "rgba(255,255,255,0.3)"
                    }}>
                    </button>
                  );
                })
              }
            </div>
          </div> : null
        }
      </div>
    </>
  );
  return design;
}
