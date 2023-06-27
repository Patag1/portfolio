import { FC } from "react";
import ContactForm from "../components/ContactForm";
import Head from "../components/Head";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <article className="w-11/12 grid grid-cols-1 grid-rows-[min-content_auto] gap-2  animate-fade-up animate-once animate-duration-1000 animate-delay-500">
      <Head
        title="LET&apos;S TALK, LET&apos;S DO"
        subtitle="Let&apos;s make your brand glow"
      />
      <div className="mt-3">
        <ContactForm className="flex justify-center items-start flex-col" />
      </div>
    </article>
  );
};

export default page;
