import HeadSec from "./HeadSec";
import { workList } from "@/constants/workList";
import githubprofile from "/public/githubprofile.png";
import webpreview from "/public/webpreview.png";
import Image from "next/image";

const slideindex = 0;

export default function Work() {
  return (
    <>
      <HeadSec header="Work" />
      <div className="overflow-x-auto flex">
        <div className="shadow-md p-5 border-2 border-gray-200 rounded-md w-96 min-w-96 inline-block">
          <div className="inline-block">
            <div className="py-3 font-bold">My GitHub profile</div>
            <a
              href="https://github.com/SUiD07"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2 font-semibold text-white"
            >
              Click here
            </a>
          </div>
          <Image
            src={githubprofile}
            alt="profile"
            className="my-2 inline-block h-auto w-auto"
          />
        </div>

        <div className="shadow-md p-5 border-2 border-gray-200 rounded-md w-96 min-w-96 inline-block">        <div className="inline-block">
            <div className="py-3 font-bold">My Portfolio's source code</div>
            <a
              href="https://github.com/SUiD07/Sirada-portfolio"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2 font-semibold text-white"
            >
              Click here
            </a>
          </div>
          <Image
            src={webpreview}
            alt="webpreview"
            className="my-2 inline-block h-auto w-auto"
          />
        </div>
        <div className="shadow-md p-5 border-2 border-gray-200 rounded-md w-96 min-w-96 inline-block">
            <div className="py-3 font-bold">My Portfolio's source code</div>
        </div>
      </div>
      {/* <div className="text-xl font-bold">My work as a front-end developer</div>
      {workList.map((workItem, workIndex) => (
        <div className="shadow-md w-80 h-60 inline-block mx-4">
        <div className="py-3 font-bold text-center">{workItem.work}</div>
        </div>
        ))} */}
    </>
  );
}
