"use client"
import store from "@lib/store";
import {Provider} from "react-redux";
import { SessionProvider } from "next-auth/react";
export default function Index({children}:any){
    return (
        <SessionProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </SessionProvider>
    )
}