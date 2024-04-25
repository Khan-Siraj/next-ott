"use client"
import {
  Formik,
  Form
} from "formik";
import {
  Button
} from "../";
import * as yup from "yup";
import {
  Input,
  UploadInput,
  Select,
  Email
} from "./fields";
const form = ({disabled=false,fields,grid=1,gap=4,...rest}:Readonly<any>)=>{
  const schema:any = {
    email: yup.string().required("This field is required").email("Enter a valid email"),
    password: yup.string().required("This field is required"),
    fullname: yup.string().required("This field is required"),
    message: yup.string().required("This field is required"),
    mobile: yup.string().required("This field is required"),
    title: yup.string().required("This field is required"),
    desc: yup.string().required("This field is required"),
    duration: yup.string().required("This field is required"),
    starring: yup.string().required("This field is required"),
    thumbnail: yup.string().required("This field is required"),
    video: yup.string().required("This field is required"),
    category: yup.string().required("This field is required"),
    tags: yup.string().required("This field is required")
  };
  const defaultValues:any = {};
  const validation:any = {};

  fields.map((item:any)=>{
    const {props} = item;
    let {name} = props;
    defaultValues[name] = '';
    validation[name] = schema[name]
  });

  const Fields = ({formik}:Readonly<any>)=>{
    const allFields = fields.map((item:any,index:any)=>{
      const {component,props} = item;
      switch(component)
      {
        case "input"  : return <Input key={index} {...props} />
        case "email"  : return <Email key={index} {...props} />
        case "upload" : return <UploadInput formik={formik} key={index} {...props} />
        case "select" : return <Select key={index} {...props} />
        default : return null;
      }
    });
    return allFields;
  }

  const design = (
    <>
     {/* @ts-ignore */}
      <Formik
        initialValues={defaultValues}
        validationSchema={yup.object(validation)}
        {...rest}
      >
        {
          (formik)=>{
            return (
              <Form className={`grid gap-${gap}`}>
                <div className={`grid grid-cols-${grid} gap-${gap}`}>
                  <Fields formik={formik} />
                </div>
                <Button disabled={disabled} type="submit" theme={`${disabled ? 'disabled' : 'error'}`} className="w-fit">SUBMIT</Button>
              </Form>
            );
          }
        }
      </Formik>
    </>
  );
  return design;
}

export default form;

