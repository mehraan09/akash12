import TechList from "@/components/projectCompos/drift";
import TechList2 from "@/components/projectCompos/medium";
import CollegeDBMSTechList from "@/components/projectCompos/college";
import CreatorDashboardTechList from "@/components/projectCompos/vai";
import { Metadata } from "next"
import React from "react";
import ProjectWrapper from "@/components/Templetes/projectTemplete";

export const metadata: Metadata = { title: "Projects" };

export default function A(){
  return (
    <div className="h-screen flex w-max">

      <section id="drift" className="flex">
          <ProjectWrapper
            pname="DriftPro - Paytm for Desktop"
            date="Feb 2025 - Present"
            desc={data3}
            techs={TechList()}
            links={[{ l1: "https://github.com/Akasho09/DriftPro", l2: "⚙️ Github" }]}
            reponame="driftpro"
          />
      </section>


      <section id="vAI" className="flex">
          <ProjectWrapper
            pname="Creator Dashboard"
            date="Mar 2025 - April 2025"
            desc={data4}
            techs={CreatorDashboardTechList()}
            links={[
              { l1: "https://github.com/Akasho09/vAI", l2: "⚙️ Github" } ,
              { l1: "https://vertxxai.vercel.app/", l2: "☁️ Deployment" },
            ]}
            reponame="vAI"
          />
      </section>

      
      <section id="mediun" className="flex">
          <ProjectWrapper
            pname="MediumPro - Blogging Web App"
            date="Dec 2024 - Jan 2025"
            desc={data2}
            techs={TechList2()}
            links={[{ l1: "https://github.com/Akasho09/mediumpro", l2: "⚙️ Github" },
                    { l1: "https://medium-pro-ruby.vercel.app/", l2: "☁️ Deployment" },
            ]}
            reponame="mediumpro"
          />
      </section>

      <section id="college" className="flex">
          <ProjectWrapper
            pname="College-Based Database Management System"
            date="Aug 2023 - Dec 2023"
            desc={data1}
            techs={CollegeDBMSTechList()}
            links={[{ l1: "https://github.com/Akasho09/p24", l2: "⚙️ Github" }]}
            reponame="p24"
          />
      </section>
    </div>
  );
}

const data1 = (
  <div>
    <ul className="list-disc list-inside space-y-2">
      <li>Streamlined college administration with a user-friendly ReactJS frontend for efficient data interaction.</li>
      <li>Employed Express.js to build a robust backend API for efficient data processing and communication with the MongoDB database.</li>
      <li>Enables only staff (teachers and HOD) to create, read, update, and delete (CRUD) data related to:</li>
      <ul className="list-disc list-inside pl-5">
        <li>➡ Attendance</li>
        <li>➡ Internal Marks</li>
        <li>➡ Time Schedule</li>
      </ul>
    </ul>
  </div>
);

const data2 = (
  <div className="flex flex-grow">
    <ul className="list-disc list-inside space-y-2">
      <li>Build a fully functional blogging platform where users can read, write, and interact with blog posts.</li>
      <li>Backend: Hono framework with Prisma ORM and PostgreSQL for efficient database management.</li>
      <li>Validation: Input validation implemented with Zod for robust data handling.</li>
      <li>Authentication: Secure user access using JWT (JSON Web Tokens).</li>
      <li>Frontend: Built using React.js for a dynamic and interactive user interface.</li>
      <li>Styling: Tailwind CSS for responsive and modern design.</li>
      <li>Deployment: Cloudflare used for seamless deployment, scalability, and performance optimization.</li>
    </ul>
  </div>
);

const data3 = (
  <div className="flex flex-grow">
    <ul className="list-disc list-inside space-y-2">
      <li>Developed a secure payment desktop application with seamless transaction handling.</li>
      <li>Built using Next.js for both frontend and backend logic.</li>
      <li>Used Express.js as an auxiliary backend service for specialized operations.</li>
      <li>Implemented a monorepo architecture with Turborepo for better scalability and performance.</li>
      <li>Stored transaction data securely using PostgreSQL with Prisma ORM.</li>
      <li>Designed an intuitive user interface with Tailwind CSS.</li>
    </ul>
  </div>
);

const data4 = (
  <div className="flex flex-grow">
    <ul className="list-disc list-inside space-y-2">
      <li>Built Creator Dashboard, a Medium Pro-like web app for content creators to manage profiles and interact with content feeds.</li>
      <li>Implemented JWT-based authentication with role-based access (User/Admin).</li>
      <li>Designed a smart credit system rewarding user interactions like likes, saves, reports, and profile completion.</li>
      <li>Tracked credit balances and activity logs with real-time UI components.</li>
      <li>Integrated feed aggregation from Reddit and Twitter APIs, with moderation features for admins.</li>
      <li>Built with React.js, Tailwind CSS, Node.js, Express, and MongoDB; Dockerized for efficient deployment.</li>
    </ul>
  </div>
);
