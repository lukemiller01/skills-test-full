// This layout component will share UI across the component
"use client";
import React, { useEffect, useState } from "react";

import { useRouter, usePathname } from "next/navigation";

// With more time and thought to implement, one of the first steps I'd take is to not hard-code the years.
export default function LaunchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Setting router to change data
  const router = useRouter();

  // Using pathname to determine which button is "active"
  const pathname = usePathname();

  // Setting the active page. Active page is dependent on pathname.
  const activePage = parseInt(pathname.split("/")[2]);
  const [year, setYear] = useState(activePage ? activePage : 2020);

  // Setting a toggle for if the buttons are visible (in /launches/[year]) or if "Go Back" is visible (/launches/[year]/[month])
  const [toggle, setToggle] = useState(Number.isNaN(parseInt(pathname.split("/")[3])) ? true : false);

  useEffect(() => {
    if (Number.isNaN(parseInt(pathname.split("/")[3]))) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [pathname]);

  function handleYearChange(year: number) {
    switch (year) {
      case 2020:
        router.push("/launches/2020");
        setYear(2020);
        break;
      case 2021:
        router.push("/launches/2021");
        setYear(2021);
        break;
      case 2022:
        router.push("/launches/2022");
        setYear(2022);
        break;

      default:
        break;
    }
  }

  return (
    <section className="mt-14 ml-48 w-auto p-4 pb-12 m-4 bg-gray-800 rounded-xl flex flex-col gap-4">
      {children}
      <div className="flex flex-row justify-center gap-4">
        {toggle ? (
          <>
            <button
              onClick={() => handleYearChange(2020)}
              className=" text-white font-medium"
              style={year === 2020 ? { color: "rgba(0, 171, 255)" } : {}}
            >
              2020
            </button>
            <button
              onClick={() => handleYearChange(2021)}
              className=" text-white font-medium"
              style={year === 2021 ? { color: "rgba(0, 171, 255)" } : {}}
            >
              2021
            </button>
            <button
              onClick={() => handleYearChange(2022)}
              className=" text-white font-medium"
              style={year === 2022 ? { color: "rgba(0, 171, 255)" } : {}}
            >
              2022
            </button>
          </>
        ) : (
          <button
            onClick={() => router.back()}
            className=" text-white font-medium"
          >
            Go back
          </button>
        )}
      </div>
    </section>
  );
}
