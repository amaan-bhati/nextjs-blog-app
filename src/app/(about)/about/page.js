import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";


export const metadata = {
  title: "About Me",
  description: `This blog site was made by Amaan, who is a web and software developer based in India`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
      Want to talk about modern web development libraries and frameworks or anything related to tech in general? Reach out to me at <Link href="https://contact.amaanbhati.tech"  className="!underline underline-offset-2"   >contact.amaanbhati.tech</Link>, let's have a quick chat.
      </h2>
    </>
  );
}
