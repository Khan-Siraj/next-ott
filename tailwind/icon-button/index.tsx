import {
  Icon
} from "..";

const btnSize:any = {
  sm: "w-10 h-10 rounded-full",
  md: "w-12 h-12 rounded-full",
  lg: "w-14 h-14 rounded-full",
  xl: "w-16 h-16 rounded-full"
}

const sample:any = {
  "o-primary": "border border-teal-600 text-teal-600 shadow-sm",
  "o-secondary": "border border-blue-600 text-blue-600 shadow-sm",
  "o-info": "border border-cyan-600 text-cyan-600 shadow-sm",
  "o-error": "border border-red-600 text-red-600 shadow-sm",
  "o-warning": "border border-orange-600 text-orange-600 shadow-sm",
  "o-success": "border border-green-600 text-green-600 shadow-sm",
  "primary": "bg-teal-600 text-white shadow-sm",
  "secondary": "bg-blue-600 text-white shadow-sm",
  "info": "bg-cyan-600 text-white shadow-sm",
  "error": "bg-red-600 text-white shadow-sm",
  "warning": "bg-orange-600 text-white shadow-sm",
  "success": "bg-green-600 text-white shadow-sm",
  "t-primary": "text-teal-600 rounded-sm",
  "t-secondary": "text-blue-600 rounded-sm",
  "t-info": "text-cyan-600 rounded-sm",
  "t-error": "text-red-600 rounded-sm",
  "t-warning": "text-orange-600 rounded-sm",
  "t-success": "text-green-600 rounded-sm",
}
const button = ({
  className=null,
  classForIcon=null,
  children,
  theme="t-primary",
  onClick=null,
  onMouseOver=null,
  size="md"
  }:any)=>{
  const design = (
    <>
      <button
        className={"flex items-center justify-center "+sample[theme]+" "+className+" "+btnSize[size]}
        onClick={onClick}
        onMouseOver={onMouseOver}
      >
      <Icon className={classForIcon}>{children}</Icon>
      </button>
    </>
  );
  return design;
}

export default button;
