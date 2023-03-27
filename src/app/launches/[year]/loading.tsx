"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <>
    <h1>Launches</h1>
    <div>
        <Skeleton width="100%" height={240} />
    </div>
    </>
  );
}
