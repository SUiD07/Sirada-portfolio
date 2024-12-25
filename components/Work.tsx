import HeadSec from "./HeadSec";
import { workList } from "@/constants/workList";
import  githubprofile  from "/public/githubprofile.png";

import Image from "next/image";

export default function Work() {
  return (
    <>
      <HeadSec header="Work" />
      <div className="py-3">See my GitHub profile and my contributions here</div>
      <a
          href="https://github.com/SUiD07"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2 font-semibold text-white"
        >Click here</a>
      <Image src={githubprofile} alt="profile" className="my-3" />
      {/* <div className="text-xl font-bold">My work as a front-end developer</div>
      {workList.map((workItem, workIndex) => (
        <div className="shadow-md w-80 h-60 inline-block mx-4">
          <div className="py-3 font-bold text-center">{workItem.work}</div>
        </div>
      ))} */}
    </>
  );
}
