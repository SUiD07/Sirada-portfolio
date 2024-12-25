import HeadSec from "./HeadSec";
import { workList } from "@/constants/workList";

export default function Work() {
  return (
    <>
      <HeadSec header="Work" />
      <div className="text-xl font-bold">My work as a front-end developer</div>
      {workList.map((workItem, workIndex) => (
        <div className="shadow-md w-80 h-60 inline-block mx-4">
          <div className="py-3 font-bold text-center">{workItem.work}</div>
        </div>
      ))}
    </>
  );
}
