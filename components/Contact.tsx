import Image from "next/image";
import HeadSec from "./HeadSec";
import email from "/public/email.svg";
import github from "/public/github.svg";
export default function Contact() {
  return (
    <>
      <HeadSec header="Contact" />
      <div className="my-4">
        <div className="flex">
          <Image src={email} alt="email" width={20} height={20} />
          E-Mail: sirada.uth@docchula.com
        </div>
        <div className="flex">
          <Image src={email} alt="email" width={20} height={20} />
          E-Mail: nan.uthaiwat@gmail.com
        </div>
        <div className="flex">
          <Image src={github} alt="github" width={20} height={20} />
          GitHub: SUiD07(Sirada U)
        </div>
      </div>
    </>
  );
}
