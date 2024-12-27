import HeadSec from "./HeadSec";
import { activitiesList } from "@/constants/activities";
export default function Experience() {
  return (
    <>
      <HeadSec header="Experience" />
      <div className="font-semibold text-xl">Education</div>
      <li>Triamudomsuksa School</li>
      <li>Faculty of Medicine, Chulalongkorn University</li>
      {/* <div className="font-semibold text-xl">Past activities</div> */}
      <li>POSN Computer 2 @Samsenwitthayalai School</li>
      <li>POSN Biology 2 @Satriwitthaya School</li>

      {/* <li>Support team IT 34thSyringe Games </li>
      <li>ผู้ดูแล website AMSci</li> */}
      <div className="font-semibold text-xl">Activities</div>
      {activitiesList.map((item, index) => (
        <>
          <li>
            {item.position} {item.detail}
            {item.note && <> : {item.note}</>}
          </li>
        </>
      ))}
    </>
  );
}
