import { getIssues } from "@/lib/github";
import { ReactNode ,Suspense } from "react";
import ProjectTemplateClient from "./ProjectTemplateClient";

export default async function ProjectWrapper({
  pname,
  date,
  desc,
  techs,
  links,
  reponame,
}: {
  pname: string;
  date: string;
  desc?: React.ReactNode;
  techs?: ReactNode;
  links?: { l1: string; l2: string }[];
  reponame: string;
}){
  const issues = await getIssues(reponame);

  return (
    <Suspense fallback={<p>loading .... </p>}>
    <ProjectTemplateClient
      pname={pname}
      date={date}
      desc={desc}
      techs={techs}
      links={links}
      issues={issues}
    />
    </Suspense>
  );
}