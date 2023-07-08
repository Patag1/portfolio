import Header from "./components/ui/Header";
import Loader from "./components/Loader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Loader />
      <article className="
        relative
        w-full
        h-full
        flex
        justify-end
        items-end
        border-0
        border-white
        animate-fade-border
        animate-delay-[4650ms]
      ">
        <div className="
          absolute
          top-4
          left-4
          flex
          justify-center
          items-center
          gap-4
          text-right
          animate-fade-up
          animate-once
          animate-duration-1000
          animate-delay-[5000ms]
          ">
          <Image
              src="/Selfie1.png"
              alt="profile-pic"
              width={200}
              height={200}
              className="w-32 saturate-0 rounded-full"
          />
          <Header size="lg">
            Augusto Sasso
          </Header>
          {/* <p className="text-xl text-white font-bold leading-none">Augusto Sasso</p> */}
        </div>
        <Header
          size={"xl"}
          className="text-right animate-fade-up animate-once animate-duration-1000 animate-delay-[5000ms]"
        >
          FRONT-END DEVELOPER
        </Header>
      </article>
    </>
  );
}
