"use client"
import {
  Field,
  ErrorMessage
} from "formik";
import {useState} from "react";
import {
  Icon
} from "../../tailwind";
import clsx from "clsx";

export const Email = ({label=null,...rest})=>{
  const email = (
    <>
      <div className={`flex flex-col col-span-${rest.width}`}>
        {
          label ? <label className="font-bold text-sm mb-2 text-left">{label}</label> : null
        }
        <Field name="email" type="email" className="rounded-sm" {...rest} />
        <ErrorMessage name="email" component="p" className="text-left text-red-500 text-sm font-bold p-0 m-0" />
      </div>
    </>
  );
  return email;
}

export const Password = ({...rest})=>{
  const password = (
    <>
      <Field name="password" type="password" className="rounded-sm" {...rest} />
      <ErrorMessage name="password" component="p" className="text-red-500 text-sm font-bold p-0 m-0" />
    </>
  );
  return password;
}

export const Input = ({label=null,name,type="text",textarea=false,...rest}:Readonly<any>)=>{
  const input = (
    <>
      <div className={clsx('flex flex-col', rest.width && `col-span-${rest.width}`)}>
        {
          label ? <label className="font-bold text-sm mb-2 text-left">{label}</label> : null
        }
        <Field {...rest} name={name} type={type} as={textarea ? "textarea" : null} />
        <ErrorMessage name={name} component="p" className="text-red-500 text-left text-sm font-bold p-0 m-0" />
      </div>
    </>
  );
  return input;
}

export const UploadInput = ({label=null,formik,...rest}:Readonly<any>)=>{
  const handleFile = (e:any)=>{
    let name = e.target.name;
    let multiple = e.target.multiple;
    let files = multiple ? e.target.files : e.target.files[0];
    formik.setFieldValue(name,files);
  }
  const input = (
    <>
      <div className="flex flex-col">
        {
          label ? <label className="font-bold text-sm mb-2 text-left">{label}</label> : null
        }
        <input type="file" {...rest} onChange={handleFile} />
        <ErrorMessage name={rest.name} component="p" className="text-left text-red-500 text-sm font-bold p-0 m-0" />
      </div>
    </>
  );
  return input;
}

export const Select = ({label=null,name,data,...rest}:Readonly<any>)=>{
  const select = (
    <>
      <div className={`flex flex-col col-span-${rest.width}`}>
        {
          label ? <label className="font-bold text-sm mb-2 text-left">{label}</label> : null
        }
        <Field name={name} as="select" {...rest}>
          {
            data.map((item:any,index:any)=>{
              return <option key={index} value={item.value}>{item.label}</option>
            })
          }
        </Field>
        <ErrorMessage name={name} component="p" className="text-left text-red-500 text-sm font-bold p-0 m-0" />
      </div>
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
      <ErrorMessage name={name} component="p" className="text-red-500 text-sm font-bold p-0 m-0" />
    </>
  );
  return radio;
}

export const Checkbox = ({name,value,label,...rest}:Readonly<any>)=>{
  const checkbox = (
    <>
      <div className="flex gap-2 items-center">
        <Field type="checkbox" name={name} value={value} {...rest} />
        <label>{label}</label>
      </div>
      <ErrorMessage name={name} component="p" className="text-red-500 text-sm font-bold p-0 m-0" />
    </>
  );
  return checkbox;
}
