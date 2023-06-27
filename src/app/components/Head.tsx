import { FC } from "react";
import Header from "./ui/Header";
import Image from "next/image";
import Gambetta from "./ui/Gambetta";

interface HeadProps {
  title: string;
  subtitle: string;
  image?: boolean;
}

const Head: FC<HeadProps> = ({ title, subtitle, image }) => {
  return (
    <article className="grid grid-rows-[min-content_min-content] grid-cols-1 gap-2">
      <div className="flex justify-start items-center gap-16">
        <Header size={"xl"} gray>
          {title}
        </Header>
        {
          image && (
            <Image
                src="/Selfie1.png"
                alt="profile-pic"
                width={200}
                height={200}
                className="w-32 saturate-0 rounded-full"
            />
          )
        }
      </div>
      <Gambetta size="sm" weight="" color="gray">
        {subtitle}
      </Gambetta>
    </article>
  );
};

export default Head;
