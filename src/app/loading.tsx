"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div className="mt-14 ml-48 w-auto p-4 pb-12 m-4 bg-gray-800 rounded-xl flex flex-col gap-4">
      <Skeleton width={150} height={40} />
      <Skeleton height={400} />
      <Skeleton width={150} height={40} />
      <Skeleton height={20} count={3} />
    </div>
  );
}
