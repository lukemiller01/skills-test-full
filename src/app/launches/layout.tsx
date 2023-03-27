// This layout component will share UI across the component
'use client';
import React, {useState} from "react";

import { useRouter } from 'next/navigation';

// With more time and thought to implement, one of the first steps I'd take is to not hard-code the years.
export default function LaunchesLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {

    // Setting router to change data
    const router = useRouter();

    // For the scope of this project, only using data from 2020-2022
    const [ year, setYear ] = useState(2020);

    function handleYearChange(year: number) {
      switch (year) {
        case 2020:
          router.push('/launches/2020');
          setYear(2020)
          break;
        case 2021:
          router.push('/launches/2021');
          setYear(2021)
          break;
        case 2022:
          router.push('/launches/2022');
          setYear(2022);
          break;
      
        default:
          break;
      }
    }


    return (
      <section>
        {children}
        <button onClick={() => handleYearChange(2020)} className=" text-white">2020</button>
        <button onClick={() => handleYearChange(2021)} className=" text-white">2021</button>
        <button onClick={() => handleYearChange(2022)} className=" text-white">2022</button>
      </section>
    );
  }