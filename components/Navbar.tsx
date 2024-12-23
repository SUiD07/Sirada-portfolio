import { navLink } from "@/constants/navLink";
export default function Navbar() {
  return (
    <>
      <div className="bg-white shadow-md h-14 flex items-center">
        <div className="text-base font-bold mx-5 max-md:text-sm">
          My portfolio
        </div>
        <div className="flex">
          {navLink.map((item, index) => (
            <>
              <div
                key={index}
                className="hover:text-red-600 max-md:text-sm mx-1"
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
