const card = ({children,title=null,actions=null, className=null}:any)=>{
  const design = (
    <>
      <div className={`shadow-lg rounded-md border bg-white ${className}`}>
        {
          title ? <h1 className="text-2xl mb-4 font-medium">{title}</h1> : null
        }
        <div>
          {children}
        </div>
        {
          actions ?
          <div className="flex gap-4 mt-5">{actions}</div>
          : null
        }
      </div>
    </>
  );
  return design;
}

export default card;
