"use client"
import store from "@/app/lib/store";
import {Provider} from "react-redux";

export default function Index({children}:any){
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}