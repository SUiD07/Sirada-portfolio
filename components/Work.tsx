import HeadSec from "./HeadSec";
import { workList } from "@/constants/workList";
import githubprofile from "/public/githubprofile.png";

import Image from "next/image";

export default function Work() {
  return (
    <>
      <HeadSec header="Work" />
      <div className="inline-block">
        <div className="py-3">
          See my GitHub profile here
        </div>
        <a
          href="https://github.com/SUiD07"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2 font-semibold text-white"
        >
          Click here
        </a>
      </div>
      <Image src={githubprofile} alt="profile" className="hover:w-1/2 max-md:hover:w-5/6 duration-1000 my-1 inline-block w-96" />
      {/* <div className="text-xl font-bold">My work as a front-end developer</div>
      {workList.map((workItem, workIndex) => (
        <div className="shadow-md w-80 h-60 inline-block mx-4">
          <div className="py-3 font-bold text-center">{workItem.work}</div>
        </div>
      ))} */}
    </>
  );
}
