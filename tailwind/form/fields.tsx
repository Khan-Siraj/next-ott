"use client"
import {
  Field,
  ErrorMessage
} from "formik";

export const Email = ({...rest})=>{
  const email = (
    <>
      <Field name="email" type="email" className="rounded-sm p-2" {...rest} />
      <ErrorMessage name="email" component="p" />
    </>
  );
  return email;
}

export const Password = ({...rest})=>{
  const password = (
    <>
      <Field name="password" type="password" className="rounded-sm p-2" {...rest} />
      <ErrorMessage name="password" component="p" />
    </>
  );
  return password;
}

export const Input = ({name,type="text",textarea=false,...rest}:any)=>{
  const input = (
    <>
      <Field {...rest} className="rounded-sm p-2" name={name} type={type} as={textarea ? "textarea" : null} />
      <ErrorMessage name={name} component="p" />
    </>
  );
  return input;
}

export const Select = ({name,data}:any)=>{
  const select = (
    <>
      <Field name={name} as="select">
        {
          data.map((item:any,index:any)=>{
            return <option key={index} value={item.value}>{item.label}</option>
          })
        }
      </Field>
      <ErrorMessage name={name} component="p" />
    </>
  );
  return select;
}

export const Radio = ({name,data}:any)=>{
  const radio = (
    <>
      {
        data.map((item:any,index:any)=>{
          return (
            <>
              <div className="flex gap-2 items-center" key={index}>
                <Field name={name} value={item.value} type="radio" />
                <label>{item.label}</label>
              </div>
            </>
          )
        })
      }
      <ErrorMessage name={name} component="p" />
    </>
  );
  return radio;
}

export const Checkbox = ({name,value,label,...rest}:any)=>{
  const checkbox = (
    <>
      <div className="flex gap-2 items-center">
        <Field type="checkbox" name={name} value={value} {...rest} />
        <label>{label}</label>
      </div>
      <ErrorMessage name={name} component="p" />
    </>
  );
  return checkbox;
}
