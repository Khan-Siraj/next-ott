import {
  Icon
} from "@/tailwind";

const index = ({iconClass='text-white'}:any)=>{
  const design = (
    <>
      <div className="flex gap-2 items-center">
        <Icon outline={true} className={iconClass}>play_circle</Icon>
        <h1 className="text-red-500 font-bold text-xl">Streamwap</h1>
      </div>
    </>
  );
  return design;
}

export default index;
