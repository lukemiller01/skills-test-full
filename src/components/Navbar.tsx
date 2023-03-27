import Link from "next/link";

const Menu = () => (
  <>
    <h3>
      <Link href={"/"}>Launches</Link>
    </h3>
    <h3>
      <Link href={"/"}>Locations</Link>
    </h3>
    <h3>
      <Link href={"/"}>Customize</Link>
    </h3>
  </>
);

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-light-grey h-10 pr-4 flex items-center justify-between bg-black">
      <div className="border-r-[2px] w-44 h-full flex items-center justify-center">
        <h1 className=" font-bold">SpaceXM</h1>
      </div>
      <div className="flex flex-row gap-4">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;