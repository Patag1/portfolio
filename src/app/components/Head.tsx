import { FC } from "react";
import Header from "./ui/Header";
import Gambetta from "./ui/Gambetta";

interface HeadProps {
  title: string;
  subtitle: string;
}

const Head: FC<HeadProps> = ({ title, subtitle }) => {
  return (
    <article className="grid grid-rows-[min-content_min-content] grid-cols-1 gap-2">
      <Header size={"xl"} gray>
        {title}
      </Header>
      <Gambetta size="md" weight color="gray">
        {subtitle}
      </Gambetta>
    </article>
  );
};

export default Head;
