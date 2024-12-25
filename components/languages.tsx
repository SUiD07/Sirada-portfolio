import HeadSec from "./HeadSec";
import { langList } from "@/constants/langList";
import { FramewList } from "@/constants/langList";
export default function Lang() {
  return (
    <>
      <HeadSec header="Languages and Frameworks" />
      <div className="font-bold">Languages</div>
      {langList.map((langItem,langIndex)=>(
        <div key={langIndex}className="shadow-md w-32 h-10 text-center justify-center">{langItem.name}</div>
      ))}
      <div className="font-bold">Frameworks</div>
      {FramewList.map((framewItem,framewIndex)=>(
        <div className="shadow-md w-32 h-10 text-center inline-block">{framewItem.name}</div>
      ))}
    </>
  );
}
