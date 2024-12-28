import HeadSec from "./HeadSec";
import { activitiesList } from "@/constants/activities";
export default function Experience() {
  return (
    <>
      <HeadSec header="Experience" />
      <div className="font-semibold text-xl">Education</div>
      <li>Triamudomsuksa School </li>
      <li>Faculty of Medicine, Chulalongkorn University</li>
      {/* <div className="font-semibold text-xl">Past activities</div> */}
      <div className="font-semibold text-xl">Certificates</div>
      <li>POSN Computer 2nd Camp (2021)</li>
      <li>POSN Biology 2nd Camp (2022)</li>

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
