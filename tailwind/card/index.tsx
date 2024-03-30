const card = ({children,title=null,actions=null})=>{
  const design = (
    <>
      <div className="p-4 shadow-lg rounded-md border bg-white">
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
