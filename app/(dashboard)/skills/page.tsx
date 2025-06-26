import Langs from "@/components/skills/lang";
import Devs from "@/components/skills/dev";
import Dbs from "@/components/skills/dbs";
import Tools from "@/components/skills/tools";
import Comps from "@/components/skills/comps";
import Soft from "@/components/skills/soft";
import Devops from "@/components/skills/devops";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
};


export default function SkillsPage() {
  return (
    <div className="h-screen flex w-max">
      <section id="langs" className="flex" >
        <Langs />
      </section>
      <section id="devs" className="flex">
        <Devs />
      </section>
      <section id="devops" className="flex">
        <Devops />
      </section>
      <section id="comps" className="flex">
        <Comps />
      </section>
      <section id="dbs" className="flex">
        <Dbs />
      </section>
      <section id="soft" className="flex">
        <Soft />
      </section>
      <section id="tools" className="flex">
        <Tools />
      </section>
    </div>
  );
}
