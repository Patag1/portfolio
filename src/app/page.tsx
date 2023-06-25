import Header from "./components/ui/Header";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-y-hidden grid grid-cols-1 grid-rows-[1fr_1.5rem]">
      <Loader />
      <video
        src={"/landingvideo.mp4"}
        autoPlay
        loop
        muted
        className="absolute top-0 w-full h-screen -z-10 object-cover"
      ></video>
      <section className="flex justify-end items-end mb-5 mr-1">
        <Header
          size={"xl"}
          className="text-right text-neutral-50 animate-fade-up animate-once animate-duration-1000 animate-delay-[5000ms]"
        >
          FRONT-END DEVELOPER
        </Header>
      </section>
    </main>
  );
}
