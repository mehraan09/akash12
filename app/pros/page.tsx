import ThreeTexts from "@/components/mainpage/threeText";
import { SiNextdotjs, SiTurborepo, SiPostgresql, SiTypescript, SiExpress, SiPrisma, SiTailwindcss, SiHono, SiReact, SiCloudflare, SiMongodb } from "react-icons/si";

export default function A() {
  return (
      <div className="h-screen flex w-max">
        <ThreeTexts
          t1="DriftPro - Paytm for Desktop"
          t2="Feb 2025 - Present"
          t3={data3}
          t4={t4DriftPro}
          links={[{ l1: "https://github.com/Akasho09/DriftPro", l2: "⚙️ Github" }]}
        />

        <ThreeTexts
          t1="MediumPro"
          t2="Dec 2024 - Jan 2025"
          t3={data2}
          t4={t4MediumPro}
          links={[
            { l1: "https://github.com/Akasho09/MediumPro", l2: "⚙️ Github" },
            { l1: "https://medium-pro-ruby.vercel.app/", l2: "☁️ Deployment" },
          ]}
        />

        <ThreeTexts
          t1="College-Based Database Management System"
          t2="Aug 2023 - Dec 2023"
          t3={data1}
          t4={t4CollegeDBMS}
          links={[{ l1: "https://github.com/Akasho09/p24", l2: "⚙️ Github" }]}
        />
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

// Define t4 for each project
const t4DriftPro = (
  <div className="flex gap-4 flex-wrap">
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiNextdotjs className="w-5 h-5 mr-1 " /> <span className="font-roboto font-bold">Next.js</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiTurborepo className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">Turborepo</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiPostgresql className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">PostgreSQL</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiTypescript className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">TypeScript</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiExpress className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">Express</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiPrisma className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">Prisma ORM</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiTailwindcss className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">Tailwind CSS</span>
    </div>
  </div>
);

const t4MediumPro = (
  <div className="flex gap-4 flex-wrap">
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiTypescript className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">TypeScript</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiPrisma className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">Prisma</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiPostgresql className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">PostgreSQL</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiHono className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">Hono</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiReact className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">React</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiTailwindcss className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">Tailwind CSS</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiCloudflare className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">Cloudflare</span>
    </div>
  </div>
);

const t4CollegeDBMS = (
  <div className="flex gap-4 flex-wrap">
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiExpress className="w-5 h-5 mr-1 font-bold" /> <span className="font-roboto font-bold">Express</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiMongodb className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">MongoDB</span>
    </div>
    <div className="rounded-full h-8 px-4 border border-indigo-400 flex items-center">
      <SiReact className="w-5 h-5 mr-1" /> <span className="font-roboto font-bold">React</span>
    </div>
  </div>
);
