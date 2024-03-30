const sample:any = {
  "o-primary": "border border-teal-600 px-4 py-2 text-teal-600 rounded-sm shadow-sm",
  "o-secondary": "border border-blue-600 px-4 py-2 text-blue-600 rounded-sm shadow-sm",
  "o-info": "border border-cyan-600 px-4 py-2 text-cyan-600 rounded-sm shadow-sm",
  "o-error": "border border-red-600 px-4 py-2 text-red-600 rounded-sm shadow-sm",
  "o-warning": "border border-orange-600 px-4 py-2 text-orange-600 rounded-sm shadow-sm",
  "o-success": "border border-green-600 px-4 py-2 text-green-600 rounded-sm shadow-sm",
  "primary": "bg-teal-600 px-4 py-2 text-white rounded-sm shadow-sm",
  "secondary": "bg-blue-600 px-4 py-2 text-white rounded-sm shadow-sm",
  "info": "bg-cyan-600 px-4 py-2 text-white rounded-sm shadow-sm",
  "error": "bg-red-600 px-4 py-2 text-white rounded-sm shadow-sm",
  "warning": "bg-orange-600 px-4 py-2 text-white rounded-sm shadow-sm",
  "success": "bg-green-600 px-4 py-2 text-white rounded-sm shadow-sm",
  "t-primary": "px-4 py-2 text-teal-600 rounded-sm",
  "t-secondary": "px-4 py-2 text-blue-600 rounded-sm",
  "t-info": "px-4 py-2 text-cyan-600 rounded-sm",
  "t-error": "px-4 py-2 text-red-600 rounded-sm",
  "t-warning": "px-4 py-2 text-orange-600 rounded-sm",
  "t-success": "px-4 py-2 text-green-600 rounded-sm",
}
const button = ({
  className=null,
  children,
  theme="t-primary",
  ...rest
  }:any)=>{
  const design = (
    <>
      <button
        className={sample[theme]+" "+className}
        {...rest}
      >{children}</button>
    </>
  );
  return design;
}

export default button;
