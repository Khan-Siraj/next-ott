'use client'
import {
  Navbar,
  IconButton,
  Footer
} from "@/tailwind";
import Logo from "../logo";
import {useSession} from "next-auth/react";
const index = ({children}:any)=>{
  const {data,status}:any = useSession();
  // consts
  const menus = {
      brand: <Logo />,
      link: [
        {
          label: "HOME",
          href: "/"
        },
        {
          label: "MOVIES",
          href: "/movies"
        },
        {
          label: "VIDEOS",
          href: "/videos"
        },
        {
          label: "BLOG",
          href: "/blog"
        },
        {
          label: "CONTACT",
          href: "/contact"
        }
      ]
  };
  const beforeLogin = [
    {
      label: "register",
      href: "/register",
      icon: "person"
    },
    {
      label: "login",
      href: "/login",
      icon: "login"
    }
  ];
  const afterLogin = [
    {
      label: data && data.user.name,
      href: "/profile",
      icon: "person"
    },
    {
      label: "logout",
      href: "/api/auth/signout",
      icon: "login",
      logout: true
    }
  ];
  const toolbar = [
    {
      label: <IconButton size="sm" classForIcon="text-white">search</IconButton>
    },
    {
      label: <IconButton dropdown dropdownMenu={
        status === "authenticated" ? afterLogin : beforeLogin
      } theme="error" size="sm">
      {
        status === "authenticated" ? <img src={data && data.user.image ? data.user.image : 'https://www.nicepng.com/png/full/186-1866063_dicks-out-for-harambe-sample-avatar.png'} className="rounded-full" /> : 'person'
      }
      </IconButton>
    }
  ]

  // markup
  const design = (
    <>
      <Navbar menu={menus} theme="dark" toolbar={toolbar} variant="three" />
        <div>
          {children}
        </div>
      <Footer />
    </>
  );
  return design;
}

export default index;
