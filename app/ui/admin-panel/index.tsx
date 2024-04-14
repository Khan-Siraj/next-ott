"use client";
import Logo from "@/app/ui/logo";
import { IconButton } from "@/tailwind";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
export default function Index({ children }: any) {
  const [sidebar, setSidebar]: any = useState(null);
  const [section, setSection]: any = useState(null);
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (open) {
      return setSidebar("w-0 sm:w-2/12"), setSection("w-full sm:w-10/12");
    } else {
      return (
        setSidebar(
          "absolute sm:static top-0 left-0 z-10 w-8/12 min-h-screen sm:w-0"
        ),
        setSection("w-full")
      );
    }
  }, [open]);
  return (
    <>
      <div className="min-h-screen flex">
        <div
          className={`bg-white text-black shadow-2xl transition-width overflow-x-hidden ${sidebar}`}
        >
          Sidebar
        </div>
        <div className={`bg-slate-900 transition-width ${section}`}>
          <nav className="px-5 py-3 bg-gray-100 flex justify-between items-center">
            <Logo iconClass="text-black mt-1" />
            <div className="flex items-center gap-4">
              <IconButton
                theme="text-primary"
                size="sm"
                onClick={() => setOpen(!open)}
              >
                format_align_right
              </IconButton>

              <IconButton
                theme="secondary"
                size="sm"
                onClick={() => dispatch({ type: "OPEN_DIALOG" })}
              >
                add
              </IconButton>
            </div>
          </nav>
          <div className="p-5">{children}</div>
        </div>
      </div>
    </>
  );
}
