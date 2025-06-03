import InfoCard from "@/components/mainpage/imgNtext";
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "About "
  }

export default function A() {
return <div className="h-screen flex w-max">

<InfoCard 
txt="I am a full-stack developer"
txt3="I am a passionate full-stack developer with expertise in C++, JavaScript, TypeScript, and SQL. I specialize in building scalable and efficient web applications using modern frameworks like React, Next.js, Node.js, and Express.js. With a strong foundation in data structures, algorithms, and operating systems, I craft optimized solutions for complex problems." 
>
</InfoCard>

<InfoCard 
txt="I am a problem solver"
txt2="My backend expertise includes working with MongoDB, MySQL, PostgreSQL, and Prisma ORM, ensuring secure and efficient data management. I leverage AWS, Docker, and Redis to enhance application scalability and performance. Additionally, I integrate WebSockets for real-time communication and use monorepo architectures for streamlined development."
txt4="Currently, I am seeking an internship opportunity where I can apply my technical skills in a real-world setting, collaborate with experienced professionals, and contribute to impactful projects."
>
</InfoCard>


<InfoCard img="/ak2.png" 
txt="Lets Connect and build something cool Together ! "
txt3="Eager to share what I know with the team and learn from them.
I believe in growing together through collaboration and knowledge exchange."
txt2="With a mindset focused on continuous learning and innovation, I am eager to grow and take on new challenges in the ever-evolving field of software development."
></InfoCard>
<div>
</div>

</div> 
}