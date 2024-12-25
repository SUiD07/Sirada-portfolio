import { navLink } from "@/constants/navLink";
export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md h-14 flex items-center">
        <div className="text-base font-bold mx-5 max-md:text-sm text-white">
          My portfolio
        </div>
        <div className="flex">
          {navLink.map((item, index) => (
            <>
              <div
                key={index}
                className="hover:font-bold max-md:text-sm mx-4 text-white"
              >
                <a href={item.id}>{item.sec}</a>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
