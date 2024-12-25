import Navbar from "@/components/Navbar";
import Homepage from "@/components/Homepage";
import Image from "next/image";
import Work from "@/components/Work";
import Lang from "@/components/languages";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Homepage />
      </section>
      <div className=" mx-10">
        <section id="work">
          <Work />
        </section>
        <section id="languages">
          <Lang/>
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
