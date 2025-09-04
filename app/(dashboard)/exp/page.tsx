import ThreeTexts from "@/components/mainpage/threeText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
};

export default function e() {
  return (
    <div className="h-screen flex">
      {/* Section Header */}
      <ThreeTexts 
        t1="Experience Section" 
        t2="No Formal Experience Yet —— Open to opportunities" 
        t4={
        <div className="mt-4">
          <p>If you see a project or role I’d be a good fit for, feel free to reach out!</p>
          <a
            href="mailto:aakashbwd@gmail.com"
            className="bg-blue-500 hover:bg-green-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 mt-2 inline-block"
          >
            Ping Me 💼
          </a>
        </div>
        }
      />

      {/* Main Experience Details */}
      <ThreeTexts
        t1=""
        t2="Currently I'm honing my skills in full-stack web development, exploring React, Node.js, PostgreSQL, and cloud deployments."
        t3="Working on personal projects and contributing to open-source to strengthen my portfolio."
        t4="Completed multiple academic and personal projects including web apps, REST APIs, and small backend systems, gaining hands-on experience with modern development workflows and tools."
      />

      {/* Additional Skills & Learning */}
      <ThreeTexts
        t1=""
        t2="Actively learning advanced topics such as CI/CD pipelines, Docker, Redis, Kafka, and cloud-native applications to prepare for real-world software development challenges."
        t3="Building end-to-end projects integrating frontend, backend, and database systems for practical exposure."
        t4="Exploring industry-standard practices like automated testing, code reviews, and Git workflows to become production-ready."
      />

      {/* Highlight Soft Skills / Achievements */}
      <ThreeTexts
        t1=""
        t2="Strong problem-solving and analytical skills demonstrated through algorithm challenges and project work."
        t3="Quick learner, able to adapt to new tools and technologies efficiently."
        t4="Passionate about software development and continuously expanding my knowledge base through online courses, tutorials, and hands-on experimentation."
      />
    </div>
  );
}
