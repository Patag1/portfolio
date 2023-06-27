import Header from "./components/ui/Header";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <article className="w-full h-full flex justify-end items-end border-2">
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
