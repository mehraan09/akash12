import React from "react";

export default function ResumePage() {
  return (
    <div className="p-2 mx-auto font-sans text-gray-800 flex items-center justify-center">
      <h1 className="text-3xl font-bold mb-2">Akash Ahmad Malik</h1>
      <p className="text-lg font-semibold">Full Stack Software Engineer</p>
      <p>Maulana Mohammad Ali Jauhar Marg, Jamia Nagar, New Delhi -110025</p>
      <p>📞 9103597816 | 📧 Gmail</p>
      <p className="space-x-4">
        💻 <a href="#" className="text-blue-500">GitHub</a>
        🌐 <a href="#" className="text-blue-500">Portfolio</a>
        🧠 <a href="#" className="text-blue-500">LeetCode</a>
      </p>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        <div>
          <p className="font-semibold">Faculty of Engineering and Technology, Jamia Millia Islamia</p>
          <p>B-Tech Computer Engineering | Nov. 2022 - Aug 2026 | Delhi, India</p>
        </div>
        <div className="mt-2">
          <p className="font-semibold">Petronet Kashmir Super-30</p>
          <p>JEE MAINS and JEE ADVANCED | Sept. 2021 - Aug 2022 | Jammu and Kashmir</p>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-2">Personal Projects</h2>

        <div className="mb-4">
          <h3 className="font-semibold">College Based Database Management System Project</h3>
          <p>March 2024 - May 2024</p>
          <ul className="list-disc list-inside ml-4">
            <li>ReactJS-based college administration system with Express.js backend and MongoDB</li>
            <li>Secure CRUD for attendance, internal marks, and schedules</li>
            <li>Tech Stack: ReactJS, Express.js, MongoDB, Node.js</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">MediumPro</h3>
          <p>Dec 2024 - Jan 2025</p>
          <ul className="list-disc list-inside ml-4">
            <li>Backend: Hono framework with Prisma ORM and PostgreSQL, deployed on Cloudflare</li>
            <li>Frontend: React.js + Tailwind CSS, hosted on Vercel</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">DriftPro</h3>
          <p>Jan 2025 - Mar 2025</p>
          <ul className="list-disc list-inside ml-4">
            <li>Secure payment desktop app using Next.js (monorepo with Turborepo)</li>
            <li>Data storage with PostgreSQL + Prisma ORM</li>
            <li>Tech Stack: Next.js, Turborepo, PostgreSQL, TypeScript, Express, Prisma, Tailwind CSS</li>
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-2">Technical Skills</h2>
        <p><strong>Programming Languages:</strong> C++/C, JavaScript, TypeScript, Java, HTML/CSS, SQL</p>
        <p><strong>Developer Tools:</strong> VS Code, Ubuntu Linux, GitHub</p>
        <p><strong>Frameworks & Libraries:</strong> React, Node.js, Express.js, Next.js, Tailwind CSS</p>
        <p><strong>Databases & ORMs:</strong> MongoDB, MySQL, PostgreSQL, Prisma</p>
        <p><strong>Cloud & DevOps:</strong> AWS, Docker, Monorepos, Redis, WebSockets</p>
        <p><strong>Coursework:</strong> DSA, Operating Systems, OOP, Shell Scripting, DBMS</p>
        <p><strong>Soft Skills:</strong> Analytical Thinking, Problem-solving, Communication, Teamwork, Continuous Learning</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-2">Extracurricular Activities & Achievements</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Completed 200+ DSA Questions across platforms</li>
          <li>Runner-Up – Inter-Departmental Cricket Tournament</li>
          <li>Foundation for Excellence (FFE) Scholar, Class of 2022</li>
        </ul>
      </section>
    </div>
  );
}
