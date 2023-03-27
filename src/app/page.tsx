// Chrome stops autoplay of all video that don't have the muted property.

import Image from "next/image";
import world from "../../public/world.png";

const Alerts = () => (
  <>
    <table className=" mx-4">
      <tbody>
        <tr>
          <td className="font-semibold">Daily health check completed</td>
          <td className=" text-gray-400">3/26/23 daily health check completed with 0 errors, 1 warning, and 40 logs.</td>
        </tr>
        <tr>
          <td className="font-semibold">Ran diagnostics on SH-A2.</td>
          <td className=" text-gray-400">ERRNO5: Consider re-running SH-A2 test compiler.</td>
        </tr>
        <tr>
          <td className="font-semibold">Uptime Report 2/2023</td>
          <td className=" text-gray-400">Summary</td>
        </tr>
      </tbody>
    </table>
  </>
);

// TODO: componentize this (pattern of divs inside parent wrapper).
export default function Page() {
  return (
    <div className="mt-14 ml-48 w-auto p-4 pb-12 m-4 bg-gray-800 rounded-xl flex flex-col gap-4">
      <div className="flex flex-col mb-4 gap-4">
        <h1>Orbit View</h1>
        <div className="flex justify-center">
          <Image src={world} alt="world map" priority></Image>
        </div>
      </div>
      <div className="flex flex-col mb-4 gap-4">
        <h1>System Events</h1>
        <Alerts />
      </div>
    </div>
  );
}
