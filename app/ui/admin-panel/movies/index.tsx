"use client"
import {
  Dialog,
  Form,
  Card,
  IconButton
} from "@/tailwind";
import useS3 from "@lib/hooks/userS3";
import {
  createJob
} from "./movies.action";
import {
  useEffect,
  useState
} from "react";
import {
  useDispatch,
  useSelector
} from "react-redux";
import useSwr from "swr";
import axios from "axios";
const index = ()=>{
  const [submit,setSubmit] = useState(false);
  const [filename,setFilename] = useState(null);
  const options = [
      {
        label: "Drama",
        value: "drama"
      },
      {
        label: "Action",
        value: "action"
      },
      {
        label: "Comedy",
        value: "comedy"
      }
  ];
  const fields = [
    {
      component: "upload",
      props: {
        name: "thumbnail",
        className: "bg-gray-100 rounded-sm border-0 py-3",
        label: "Thumbnail",
        accept: "image/*"
      }
    },
    {
      component: "upload",
      props: {
        name: "video",
        className: "bg-gray-100 rounded-sm border-0 py-3",
        label: "Video file",
        accept: ".mp4"
      }
    },
    {
      component: "input",
      props: {
        name: "desc",
        placeholder: "Movie description",
        textarea: true,
        className: "bg-gray-100 rounded-sm border-0 py-3",
        width: 'full'
      }
    },
    {
      component: "input",
      props: {
        name: "starring",
        placeholder: "Actors name",
        className: "bg-gray-100 rounded-sm border-0 py-3"
      }
    },
    {
      component: "select",
      props: {
        name: "category",
        className: "bg-gray-100 rounded-sm border-0 py-3",
        data: options,
        width: 'full'
      }
    },
    {
      component: "input",
      props: {
        name: "tags",
        placeholder: "Keywords",
        textarea: true,
        className: "bg-gray-100 rounded-sm border-0 py-3",
        width: 'full'
      }
    },
  ];

  const dispatch = useDispatch();
  const MoviesReducer = useSelector((response:any)=>response.MoviesReducer);
  const [progress,setProgress] = useState({
    thumbnail: 0,
    video: 0
  });
  // @ts-ignore
  useEffect(()=>{
    if(MoviesReducer.movie_success)
    {
      setSubmit(false);
    }
    return ()=>{}
  },[MoviesReducer]);

  const upload = async (fileProps:any,values:any)=>{
    const log = [];
    for(let data of fileProps)
    {
      const upload = useS3(values[data.name],data.key);

      const uploading = await upload();

      uploading.on('httpUploadProgress',(e)=>{
        let loaded = e.loaded;
        let total = e.total;
        let p = Math.floor((loaded*100)/total);
        setProgress((oldData)=>{
          return {
            ...oldData,
            [data.name]: p
          }
        });
      });

      try {
        const file = await uploading.promise();
        data.success = true;
        data.s3 = file;
        log.push(data);
      }
      catch(err)
      {
        data.success = false;
        data.err = err;
        log.push(data);
      }
    }
    return log;
  }

  const getVideoDuration = (file:File)=>{
    return new Promise((resolve,reject)=>{
      const url = URL.createObjectURL(file);
      const video = document.createElement("video");
      video.src = url;
      video.preload = "metadata";
      video.onloadedmetadata = ()=>resolve(video.duration);
    });
  }

  const onSubmit = async (values:any)=>{
    dispatch({
      type: "CLOSE_DIALOG"
    });
    setSubmit(true)
    values.title = values.video.name.toLowerCase().split(".")[0];
    values.duration = await getVideoDuration(values.video);
    setFilename(values.title);
    const videoName = values.video.name;
    let folder = videoName.split(".")[0];
    const fileProps = [
      {
        name: "thumbnail",
        key: "original/"+folder+"/"+folder+".png"
      },
      {
        name: "video",
        key: "original/"+folder+"/"+videoName
      }
    ];
    const log = await upload(fileProps,values);
    for(let data of fileProps)
    {
      values[data.name] = data.key
    }
    // @ts-ignore
    dispatch(createJob(values));
  }
  const getData = async (url:string)=>{
    try {
      const response = await axios({
        method: "get",
        url
      });
      return response.data;
    }
    catch(err:any)
    {
      return [];
    }
  }

  const {data,error} = useSwr("/api/movies",getData,{refreshInterval: 5000});

  useEffect(()=>{
    // console.log(data)
  },[data]);

  const MovieForm = ()=>{
    const design = (
      <>
        <h1 className="text-left text-2xl font-bold mb-4">New Movie</h1>
        <Form disabled={submit} fields={fields} grid={2} onSubmit={onSubmit} />
      </>
    );
    return design;
  }

  const Steps = ()=>{
    const step = (
      <>
        <Card title={filename}>
          <div className="grid grid-cols-4 gap-2 text-black">
            <div>
              <label className="flex mb-1">Thumbnail - {progress.thumbnail}%</label>
              <div className="bg-gray-200 h-1.5">
                <div className="bg-green-400 w-0 h-full" style={{
                  width: progress.thumbnail+"%"
                }}></div>
              </div>
            </div>
            <div>
              <label className="flex mb-1">Video - {progress.video}%</label>
              <div className="bg-gray-200 h-1.5">
                <div className="bg-green-400 w-0 h-full" style={{
                  width: progress.video+"%"
                }}></div>
              </div>
            </div>
            <div>
              <label className="flex mb-1">Job</label>
              <div className="bg-gray-200 h-1.5 overflow-hidden">
                <div className={`
                  bg-green-400
                  h-full
                  w-0
                  ${MoviesReducer.job_loading ? 'infinite' : null}
                  ${MoviesReducer.job_success ? 'w-full' : null}`
                }></div>
              </div>
            </div>
            <div>
              <label className="flex mb-1">Finalizing</label>
              <div className="bg-gray-200 h-1.5 overflow-hidden">
                <div className={`
                  bg-green-400
                  w-0
                  h-full
                  ${MoviesReducer.movie_loading ? 'infinite' : null}
                  ${MoviesReducer.movie_success ? 'w-full' : null}`
                }></div>
              </div>
            </div>
          </div>
        </Card>
      </>
    );
    return step;
  }

  const deleteMe = async (id:string)=>{
    await axios({
      method: "delete",
      url: "/api/movies/"+id
    });
  }

  const openDialog = ()=>{
    dispatch({
      type: "OPEN_DIALOG"
    })
  }

  const MovieList = ({item}:any)=>{
    const movie = (
      <>
        <Card>
          <div className="p-3">
          <img src="https://wallpaperaccess.com/full/2918041.jpg" width="100%" />
          <h1 className="text-lg font-bold capitalize text-black">{item.title}</h1>
          <p className="text-black">{item.desc.slice(0,100)}...</p>
          <p className="text-black">{item.category}</p>
          <p className="text-black">{item.keywords}</p>
          <div className="flex gap-2 mt-3">
            <IconButton theme="secondary" size="sm" onClick={openDialog}>edit</IconButton>
            <IconButton theme="error" size="sm" onClick={()=>deleteMe(item._id)}>delete</IconButton>
          </div>
          </div>
        </Card>
      </>
    );
    return movie;
  }

  const design = (
    <>
      {
        submit ? 
         <div className="mb-3">
          <Steps />
         </div>
         : null
      }
       <div className="grid sm:grid-cols-4 gap-6">
        {
          data && data.map((item:any,index:number)=>{
            return <MovieList key={index} item={item} />
          })
        }
      </div>
      <Dialog>
        <MovieForm />
      </Dialog>
    </>
  );
  return design;
}

export default index;
