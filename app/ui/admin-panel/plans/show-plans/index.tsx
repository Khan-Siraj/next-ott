import useSWR from "swr";
import axios from "axios";
import {
  Card,
  Button,
  Dialog,
  IconButton,
  Form
} from "@/tailwind";
import {useDispatch} from "react-redux";
import {useState} from "react";
const index = ()=>{
  const dispatch = useDispatch();
  const [formData,setFormData] = useState({
    title: '',
    emi: '',
    amount: '',
    desc: '',
    _id: ''
  });
  const fields = [
    {
      component: "input",
      props: {
        name: "_id",
        type: "hidden"
      }
    },
    {
      component: "input",
      props: {
        name: "title",
        type: "text",
        label: "Enter plan name",
        placeholder: "Starter"
      }
    },
    {
      component: "input",
      props: {
        name: "emi",
        type: "text",
        label: "Emi name",
        placeholder: "Monthly"
      }
    },
    {
      component: "input",
      props: {
        name: "amount",
        type: "number",
        label: "Amount",
        placeholder: "1000"
      }
    },
    {
      component: "input",
      props: {
        name: "desc",
        type: "text",
        label: "Description",
        textarea: true
      }
    }
  ];
  const getData = async (url:string)=>{
    try {
        const response = await axios({
          method: "get",
          url,
        });
        return response.data;
    }
    catch(err:any)
    {
      return err.response.data;
    }
  }
  const {data,error} = useSWR("/api/plan",getData,{refreshInterval: 5000});

  const trash = async (id:string)=>{
    await axios({
      method: "delete",
      url: "/api/plan/"+id
    })
  }

  const edit = (item:any)=>{
    setFormData(item);
    dispatch({
      type: "OPEN_DIALOG"
    });
  }

  const ShowPlans = ({item}:any)=>{
    const plan = (
      <>
        <Card>
          <div className="p-3">
          <h1 className="text-2xl font-bold text-black">{item.title}</h1>
          <p className="text-gray-400">
            {item.desc}
          </p>
          <div className="flex flex-col my-1">
            <h1 className="text-6xl font-bold text-black">{item.amount}</h1>
            <p className="text-slate-900">
              {item.emi}/Emi
            </p>
          </div>

          <div className="flex gap-3 mt-3">
            <IconButton theme="secondary" onClick={()=>edit(item)}>edit</IconButton>
            <IconButton theme="warning" onClick={()=>trash(item._id)}>delete</IconButton>
          </div>
          </div>
        </Card>
      </>
    );
    return plan;
  }

  const update = async (values:any,{resetForm}:any)=>{
    const {_id} = values;
    await axios({
      method: "put",
      url: '/api/plan/'+_id,
      data: values
    });
    resetForm();
    dispatch({
      type: "CLOSE_DIALOG"
    })
  }

  const design = (
    <>
      <div className="grid sm:grid-cols-3 gap-4">
        {
          data instanceof Array ? data.map((item:any,index:number)=>{
            return <ShowPlans key={index} item={item} />
          }):null
        }
      </div>
      <Dialog title="Edit and save">
        <Form fields={fields} formData={formData} btnType="edit" onSubmit={update}/>
      </Dialog>
    </>
  );
  return design;
}

export default index;
