import HeadSec from "./HeadSec";
import { langList } from "@/constants/langList";
import { FramewList } from "@/constants/langList";
import { toolsList } from "@/constants/langList";
export default function Lang() {
  return (
    <>
      <HeadSec header="Skills" />
      <div className="my-3 font-bold text-xl">Languages</div>
      {langList.map((langItem, langIndex) => (
        <li>{langItem.name}</li>
        // <div key={langIndex}className="font-semibold shadow-md w-32 text-center justify-center inline-block">{langItem.name}</div>
      ))}
      <div className="my-3 font-bold text-xl">Frameworks</div>
      {FramewList.map((framewItem, framewIndex) => (
        <li>{framewItem.name}</li>
        // <div key={framewIndex}className="font-semibold shadow-md w-32 text-center inline-block inline-block">{framewItem.name}</div>
      ))}
      <div className="my-3 font-bold text-xl">Tools</div>
      {toolsList.map((toolsItem, toolsIndex) => (
        <li>{toolsItem.name}</li>
        // <div key={framewIndex}className="font-semibold shadow-md w-32 text-center inline-block inline-block">{framewItem.name}</div>
      ))}
    </>
  );
}
