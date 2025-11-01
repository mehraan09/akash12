
import InfoCard from "@/components/mainpage/imgNtext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Akash Ahmad Malik",
  description: "Learn more about Akash Ahmad Malik – a passionate full-stack developer skilled in Next.js, Node.js, Prisma, and cloud technologies.",
};

export default function A() {

  return (
    <div className="h-screen flex overflow-x-auto md:overflow-visible">
      {/* Section 1 */}
      <div className="h-screen border-r w-[92vw] md:w-[20rem] flex">
        <InfoCard
          txt="I’m a Full-Stack Developer"
          txt3="I’m a passionate full-stack developer with strong expertise in C++, JavaScript, TypeScript, and SQL. I love building modern, scalable web applications using React, Next.js, Node.js, and Express.js. With a solid foundation in computer science fundamentals like data structures, algorithms, and operating systems, I aim to craft performant, maintainable, and user-focused solutions."
        />
      </div>

      {/* Section 2 */}
      <div className="h-screen border-r w-[92vw] md:w-[20rem] flex flex-col">
        <InfoCard
          txt="I’m a Problem Solver"
          txt2="On the backend, I work extensively with MongoDB, MySQL, PostgreSQL, and Prisma ORM to design secure, efficient data architectures. I leverage tools like Docker, Redis, and AWS to enhance scalability and reliability, while WebSockets enable me to build real-time interactive systems."
          txt4="As I enter my final year of B.Tech, I’m actively seeking a full-time Software Engineering role where I can contribute to impactful products, grow with a talented team, and keep pushing my technical boundaries."
        />

        {/* ✅ AdSense unit (below good content) */}
        <div className="flex justify-center mt-4">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6934180729383134"
            data-ad-slot="1234567890"  // Replace with your actual ad slot ID
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </div>

      {/* Section 3 */}
      <div className="h-screen border-r w-[92vw] md:w-[20rem] flex">
        <InfoCard
          img="/ak2.png"
          txt="Let’s Connect & Build Something Great!"
          txt3="I thrive in collaborative environments where innovation meets execution. Sharing knowledge, mentoring peers, and learning from experienced developers are values I deeply believe in."
          txt2="With a growth-driven mindset and curiosity for new technologies, I’m ready to take on new challenges and contribute meaningfully to the tech community."
        />
      </div>
    </div>
  );
}
