'use client'
import SweetAlert from 'react-bootstrap-sweetalert';
import {
  useSelector,
  useDispatch
} from "react-redux";

const index = ({title='',children}:any)=>{
  const dispatch = useDispatch();
  const DialogReducer:any = useSelector((response:any)=>response.DialogReducer);

  const design = (
    <>
      {/* @ts-ignore */}
      <SweetAlert onConfirm={()=>{}} title={title} show={DialogReducer.open} showConfirm={false} customClass="relative text-black">
        <button onClick={()=>dispatch({type:"CLOSE_DIALOG"})} className="text-xs absolute top-3 right-3">Close</button>
        {children}
      </SweetAlert>
    </>
  );
  return design;
}

export default index;
