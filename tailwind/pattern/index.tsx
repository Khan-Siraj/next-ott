import Style from "./pattern.module.css";

export const PatternOne = ({children}:any)=>{
  const design = (
    <>
      <div className={Style.one}>
        {children}
      </div>
    </>
  );
  return design;
}

export const PatternTwo = ({children}:any)=>{
  const design = (
    <>
      <div className={Style.two}>
        {children}
      </div>
    </>
  );
  return design;
}
