"use client"
import {
  Formik,
  Form
} from "formik";
import {
  Button
} from "..";
import * as yup from "yup";

const form = ({children,...rest}:any)=>{
  const schema = yup.object({
    email: yup.string().required("This field is required").email("Enter a valid email"),
    password: yup.string().required("This field is required"),
    fullname: yup.string().required("This field is required"),
    mobile: yup.string().required("This field is required")
  });

  const defaultValues = {
    email: '',
    password: ''
  }

  const design = (
    <>
      <Formik
        initialValues={defaultValues}
        validationSchema={schema}
        {...rest}
      >
        {
          (formik:any)=>{
            return (
              <Form>
                {children}
                <Button type="submit" theme="error">SUBMIT</Button>
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
