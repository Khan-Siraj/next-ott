"use client"
import {
  Icon,
  Button
} from "..";
import { useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useGesture, useDrag } from "react-use-gesture";
import Style from "./animation.module.css";
import useMeasure from "react-use-measure";
import { useDispatch } from "react-redux";
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
          {...bind()}
          style={{
          width: "100%",
          height: height,
          background: `url(${data[index].image})`,
          backgroundSize: "cover",
          ...styles
        }}>
        <div className={`flex items-center h-full ${Style['caption-bg']}`}>
          <div className="p-8 sm:p-16 w-full">
            {
              data[index].caption
            }
          </div>
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


export const Slider = ({data,vertical=false}:any)=>{
  const dispatch = useDispatch()
  const [springs,api] = useSprings(data.length,(index)=>({
    x: 0,
    y: 0
  }));
  const [count,setCount] = useState(0);
  const [move,setMove] = useState(0);
  const [image,imageBound] = useMeasure();
  const [main,mainBound] = useMeasure();

  const handleDrag = ({offset}:any)=>{
    vertical ?
    api.start({
      y: offset[1]
    })
     :
    api.start({
      x: offset[0]
    })
  }

  const bind = useDrag(handleDrag,{
    bounds: {
      left: -((imageBound.width*data.length)-(mainBound.width-(imageBound.width/2))),
      right: 0,
      top: -(imageBound.height*data.length-(516-imageBound.height)),
      bottom: 0
    }
  });

  const next = ()=>{
    if(count < data.length-4)
    {
      setCount(count+1);
      vertical ? setMove(move+imageBound.height) : setMove(move+imageBound.width);
    }
    else {
      return null;
    }
  }

  const prev = ()=>{
    if(count > 0)
    {
      setCount(count-1);
      vertical ? setMove(move-imageBound.height) : setMove(move-imageBound.width);
    }
    else {
      return null;
    }
  }

  useEffect(()=>{
    api.start({
      x: vertical ? null : -move,
      y: vertical ? -move : null
    });
  },[move]);

  const view:any = (vertical:any,index:any)=>{
    if(!vertical) return false
    let payload = data[index];
    dispatch({
      type: "PREVIEW_IMAGE",
      payload: payload
    });
  }

  const Anim = ({styles,index}:any)=>{
    const anim = (
      <>
        <animated.div
          onClick={()=>view(vertical,index)}
          className={Style.noSelect}
          {...bind()}
          ref={image}
          style={{
          ...styles,
          width: vertical ? "100%" : "25%",
          height: 181,
          background: `url(${data[index].thumbnail})`,
          backgroundSize: "cover"
        }}>
        <div className={`h-full ${Style['caption-bg']} flex items-center`}>
          <div className="text-white px-4">
            <h1 className="text-xl">{data[index].title}</h1>
            <p>{data[index].duration}</p>
            <Button theme="error" className="flex items-center gap-2 mt-3 text-xs px-3">
              <Icon>play_circle</Icon>
              PLAY NOW
            </Button>
          </div>
        </div>
        </animated.div>
      </>
    );
    return anim;
  }

  const design = (
    <>
      <div className={`overflow-hidden ${vertical ? null : 'relative'}`} ref={main}>
        <div className={`flex gap-4 ${vertical ? 'flex-col' : 'flex-row'}`} style={{
          width: vertical ? "100%" : (25*data.length)+"%"
        }}>
          {
            springs.map((styles,index)=>{
              return <Anim key={index} styles={styles} index={index} />
            })
          }
        </div>

        <div className={
          `
           flex absolute
           ${vertical ? 'w-full justify-center top-0 left-0' : 'h-full items-center top-0 left-0'}
          `
        }>
          <button style={{background:"rgba(0,0,0,0.8)"}} className={vertical ? 'px-4 pt-2' : 'py-3 px-2'} onClick={prev}>
            <Icon className="text-white">
              {vertical ? 'arrow_upward' : 'arrow_back_ios'}
            </Icon>
          </button>
        </div>

        <div className={
          `
           flex absolute
           ${vertical ? 'w-full justify-center bottom-0 left-0' : 'h-full items-center top-0 right-0'}
          `
        }>
          <button style={{background:"rgba(0,0,0,0.8)"}} className={vertical ? 'px-4 pt-2' : 'py-3 px-2'} onClick={next}>
            <Icon className="text-white">
              {vertical ? 'arrow_downward' : 'arrow_forward_ios'}
            </Icon>
          </button>
        </div>
      </div>
    </>
  );
  return design;
}