"use client";
import CreatePlan from "./create-plans";
import ShowPlans from "./show-plans";
const index = ()=>{
  const design = (
    <>
      <div className="flex flex-col gap-4">
        <CreatePlan />
        <ShowPlans />
      </div>
    </>
  );

  return design;
}

export default index;
