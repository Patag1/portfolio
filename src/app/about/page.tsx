import { FC } from "react";
import { Dot } from "lucide-react";
import Gambetta from "../components/ui/Gambetta";
import Head from "../components/Head";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="animate-fade-up animate-once animate-duration-1000 animate-delay-500">
      <Head title="ABOUT" subtitle="What I do" />
      <article className="mt-3">
        <p className="text-neutral-50 text-4xl font-light">
          I help startups and businesses{" "}
          <Gambetta size="lg" weight color="white">
            grow
          </Gambetta>
          , understanding the challenges and opportunities that arise in the
          tech industry, being passionate about helping companies like yours{" "}
          <Gambetta size="lg" weight color="white">
            thrive
          </Gambetta>{" "}
          in this ever-evolving landscape.
        </p>
        <div className="w-full my-4 border-b-2 border-neutral-400"></div>
      </article>
      <article className="lg:w-11/12 w-full flex justify-start items-start gap-16">
        <div>
          <p className="text-neutral-50 text-2xl font-light">Front-end</p>
          <div className="mt-1 flex justify-center items-start flex-col">
            <div className="flex justify-start items-center gap-1">
              <Dot size={10} className="text-neutral-50" />
              <Gambetta size="md" weight color="gray">
                Tailwind
              </Gambetta>
            </div>
            <div className="flex justify-start items-center gap-1">
              <Dot size={10} className="text-neutral-50" />
              <Gambetta size="md" weight color="gray">
                Typescript
              </Gambetta>
            </div>
            <div className="flex justify-start items-center gap-1">
              <Dot size={10} className="text-neutral-50" />
              <Gambetta size="md" weight color="gray">
                Next.js
              </Gambetta>
            </div>
            <div className="flex justify-start items-center gap-1">
              <Dot size={10} className="text-neutral-50" />
              <Gambetta size="md" weight color="gray">
                Zustand
              </Gambetta>
            </div>
          </div>
        </div>
        <div>
          <p className="text-neutral-50 text-2xl font-light">Back-end</p>
          <div className="mt-1 flex justify-center items-start flex-col">
            <div className="flex justify-start items-center gap-1">
              <Dot size={10} className="text-neutral-50" />
              <Gambetta size="md" weight color="gray">
                Node.js
              </Gambetta>
            </div>
            <div className="flex justify-start items-center gap-1">
              <Dot size={10} className="text-neutral-50" />
              <Gambetta size="md" weight color="gray">
                Express.js
              </Gambetta>
            </div>
            <div className="flex justify-start items-center gap-1">
              <Dot size={10} className="text-neutral-50" />
              <Gambetta size="md" weight color="gray">
                Prisma
              </Gambetta>
            </div>
          </div>
        </div>
        <div>
          <p className="text-neutral-50 text-2xl font-light">Databases</p>
          <div className="mt-1 flex justify-center items-start flex-col">
            <div className="flex justify-start items-center gap-1">
              <Dot size={10} className="text-neutral-50" />
              <Gambetta size="md" weight color="gray">
                PostgreSQL
              </Gambetta>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default page;
