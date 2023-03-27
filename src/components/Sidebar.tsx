"use client";

import { useState } from "react";
import { useRouter, usePathname } from 'next/navigation';

// Menu containing all the Links and their logic
const Menu = () => {
    
    const router = useRouter();
    const pathname = usePathname();
    const regex = /\/(.*?)\//; // Get first element between slash
    const matched = regex.exec(pathname);
    const activePage = matched? `/${matched[1]}` : pathname
    const [active, setActive] = useState(`${activePage}`);
    
    function changePage(path: string) {
        switch (path) {
            case '/':
                router.push("/");
                setActive('/')
                break;
            case '/launches':
                router.push("/launches");
                setActive('/launches')
                break;
            case '/vehicles':
                router.push("/vehicles");
                setActive('/vehicles')
                break;
            case '/images':
                router.push("/images");
                setActive('/images')
                break;
        
            default:
                break;
        }
    }

  return (
    <>
      <li
      className=" cursor-pointer select-none"
        style={
          active === "/"
            ? {
                backgroundColor: "rgba(0, 171, 255, .25)",
                borderRight: "2px solid rgba(0, 171, 255)",
                marginRight: "-2px",
              }
            : {}
        }
        onClick={() => changePage('/')}
      >
        Home
      </li>
      <li
      className=" cursor-pointer select-none"
        style={
          active === "/launches"
            ? {
                backgroundColor: "rgba(0, 171, 255, .25)",
                borderRight: "2px solid rgba(0, 171, 255)",
                marginRight: "-2px",
              }
            : {}
        }
        onClick={() => changePage('/launches')}
      >
        Launches
      </li>
      <li
      className=" cursor-pointer select-none"
        style={
          active === "/vehicles"
            ? {
                backgroundColor: "rgba(0, 171, 255, .25)",
                borderRight: "2px solid rgba(0, 171, 255)",
                marginRight: "-2px",
              }
            : {}
        }
        onClick={() => changePage('/vehicles')}
      >
        Vehicles
      </li>
      <li
      className=" cursor-pointer select-none"
        style={
          active === "/images"
            ? {
                backgroundColor: "rgba(0, 171, 255, .25)",
                borderRight: "2px solid rgba(0, 171, 255)",
                marginRight: "-2px",
              }
            : {}
        }
        onClick={() => changePage('/images')}
      >
        Images
      </li>
    </>
  );
};

// Sidebar component containing styling & menu.
const Sidebar = () => {
  return (
    <div className="flex w-40 mx-4 pt-4 fixed top-10 bottom-0 border-r-[2px]">
      <ol className="flex flex-col w-full">
        <Menu />
      </ol>
    </div>
  );
};

export default Sidebar;
