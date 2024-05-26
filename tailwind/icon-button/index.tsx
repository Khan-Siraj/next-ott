"use client"
import { Icon } from "..";
import { Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import Link from "next/link";
import {signOut} from "next-auth/react";
const btnSize: any = {
  sm: "w-10 h-10 rounded-full",
  md: "w-12 h-12 rounded-full",
  lg: "w-14 h-14 rounded-full",
  xl: "w-16 h-16 rounded-full",
};

const sample: any = {
  "o-primary": "border border-teal-600 text-teal-600 shadow-sm",
  "o-secondary": "border border-blue-600 text-blue-600 shadow-sm",
  "o-info": "border border-cyan-600 text-cyan-600 shadow-sm",
  "o-error": "border border-red-600 text-red-600 shadow-sm",
  "o-warning": "border border-orange-600 text-orange-600 shadow-sm",
  "o-success": "border border-green-600 text-green-600 shadow-sm",
  primary: "bg-teal-600 text-white shadow-sm",
  secondary: "bg-blue-600 text-white shadow-sm",
  info: "bg-cyan-600 text-white shadow-sm",
  error: "bg-red-600 text-white shadow-sm",
  warning: "bg-orange-600 text-white shadow-sm",
  success: "bg-green-600 text-white shadow-sm",
  "text-primary": "text-teal-600 rounded-sm",
  "text-secondary": "text-blue-600 rounded-sm",
  "text-info": "text-cyan-600 rounded-sm",
  "text-error": "text-red-600 rounded-sm",
  "text-warning": "text-orange-600 rounded-sm",
  "text-success": "text-green-600 rounded-sm",
};
const button = ({
  dropdown = false,
  dropdownMenu = [],
  className = null,
  classForIcon = null,
  children,
  theme = "text-primary",
  onClick = null,
  onMouseOver = null,
  size = "md",
}: any) => {
  const [toggle, setToggle] = useState(false);

  const Menu = ({ item }:any) => {
    return (
      <>
        <Link href={item.href}>
          <div
            // @ts-ignore
            onClick={item.logout ? () => signOut() : null}
            className="flex items-center gap-3 w-full text-black pl-4 py-2 capitalize hover:bg-red-500 hover:text-white"
          >
            <Icon>{item.icon}</Icon>
            {item.label}
          </div>
        </Link>
      </>
    );
  };

  const Dropdown = () => {
    return (
      <>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          show={toggle}
        >
          <div
            className="absolute top-0 right-0 z-50 bg-white flex flex-col"
            style={{ marginTop: "63px", minWidth: "180px" }}
          >
            {dropdownMenu.map((item:any, index:number) => {
              return <Menu key={index} item={item} />;
            })}
          </div>
        </Transition>
      </>
    );
  };
  const design = (
    <>
      <button
        className={
          "sm:relative flex items-center justify-center " +
          sample[theme] +
          " " +
          className +
          " " +
          btnSize[size]
        }
        onClick={dropdown ? ()=>setToggle(!toggle) : onClick}
        onMouseOver={onMouseOver}
      >
        <Icon className={classForIcon}>{children}</Icon>
        {dropdown ? <Dropdown /> : null}
      </button>
    </>
  );
  return design;
};

export default button;
