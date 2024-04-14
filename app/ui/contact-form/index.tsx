import {
  Form
} from "@/tailwind";

const index = ()=>{
  const fields = [
    {
      component: "input",
      props: {
        name: "fullname",
        placeholder: "Your name"
      }
    },
    {
      component: "input",
      props: {
        name: "mobile",
        placeholder: "Mobile",
        type: "number"
      }
    },
    {
      component: "email",
      props: {
        name: "email",
        placeholder: "Email"
      }
    },
    {
      component: "input",
      props: {
        name: "message",
        placeholder: "Message",
        textarea: true
      }
    },
  ];
  const design = (
    <>
      <Form fields={fields} />
    </>
  );
  return design;
}

export default index;
