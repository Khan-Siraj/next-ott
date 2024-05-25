import {
  Card,
  Button,
  Form
} from "@/tailwind";
import {useDispatch,useSelector} from "react-redux";
import {
  create
} from "../plans.action";

const index = ()=>{
  const fields = [
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
  const dispatch = useDispatch();
  const response = useSelector(response=>response);

  const onSubmit = (values:any,{resetForm}:any)=>{
    // @ts-ignore
    dispatch(create(values,resetForm));
  }

  const design = (
    <>
      <Card>
        <div className="p-3">
          <Form fields={fields} onSubmit={onSubmit} />
        </div>
      </Card>
    </>
  );

  return design;
}

export default index;
