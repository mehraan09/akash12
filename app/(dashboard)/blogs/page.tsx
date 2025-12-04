import { Metadata } from "next";
import InfoCard from "@/components/mainpage/imgNtext";
import {
  FaBrain,
  FaLaptopCode,
  FaTools,
  FaProjectDiagram,
  FaUsers,FaReact, FaDocker, FaDatabase, FaRobot,
  FaCodeBranch, FaShieldAlt, FaCloud,
} from "react-icons/fa";
import {
  SiGraphql,
  SiPrisma,
  SiNodedotjs,
  SiRedis, SiNextdotjs, SiTypescript
} from "react-icons/si";



export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore detailed and insightful blogs by Akash Ahmad Malik — covering React, Node.js, databases, authentication, performance optimization, and full-stack engineering.",
};

const blogs = [
  {
    title: "Memoization in React",
    icon: <FaReact className="text-sky-500 text-4xl" />,
    t1: "Memoization boosts performance in React by caching rendered outputs.",
    t2: "React.memo and useMemo prevent unnecessary re-renders for stable props.",
    t3: "React.memo uses shallow prop comparison to optimize child components.",
    t4: "useMemo keeps heavy computations or arrays stable across renders.",
    t5: "Even with React 19 optimizations, memoization remains vital in UI-heavy apps.",
  },
  {
    title: "Next.js 15 — The Future of Fullstack Development",
    icon: <SiNextdotjs className="text-gray-800 text-4xl" />,
    t1: "Next.js 15 continues to redefine full-stack web development with App Router, Server Actions, and Turbopack.",
    t2: "It merges frontend and backend seamlessly within a unified architecture.",
    t3: "Static rendering, ISR, and dynamic server functions improve speed and SEO.",
    t4: "React Server Components reduce client bundle sizes drastically.",
    t5: "With edge deployment and AI integration, Next.js 15 is a developer powerhouse.",
  },
  {
    title: "Understanding Modern Authentication Systems",
    icon: <FaShieldAlt className="text-purple-500 text-4xl" />,
    t1: "Modern auth systems revolve around identity, verification, and tokens.",
    t2: "OAuth 2.0 enables third-party login without sharing credentials.",
    t3: "JWTs provide stateless authentication and scale efficiently across servers.",
    t4: "Refresh tokens, cookies, and token rotation improve security and UX.",
    t5: "NextAuth.js simplifies these patterns for Next.js apps effortlessly.",
  },
  {
    title: "SQL vs NoSQL — Choosing the Right Database",
    icon: <FaDatabase className="text-green-600 text-4xl" />,
    t1: "The SQL vs NoSQL debate continues as applications diversify.",
    t2: "SQL databases enforce strict schema and relationships for data integrity.",
    t3: "NoSQL databases like MongoDB allow flexible schema evolution.",
    t4: "Prisma ORM bridges both worlds with a unified query layer.",
    t5: "Always choose based on scalability, query patterns, and data structure.",
  },
  {
    title: "Prisma ORM Deep Dive",
    icon: <SiPrisma className="text-cyan-500 text-4xl" />,
    t1: "Prisma abstracts SQL complexity through a clean schema definition.",
    t2: "Type safety and autocomplete make querying elegant and error-free.",
    t3: "Prisma Migrate manages database schema evolution gracefully.",
    t4: "It supports PostgreSQL, MySQL, MongoDB, and SQLite out of the box.",
    t5: "It’s the backbone of modern Node.js ORMs, balancing power and simplicity.",
  },
  {
    title: "Scaling Node.js Applications for Millions",
    icon: <SiNodedotjs className="text-green-700 text-4xl" />,
    t1: "Node.js scales through non-blocking I/O and event-driven architecture.",
    t2: "Clustering enables parallel requests across multiple CPU cores.",
    t3: "Redis caching minimizes redundant database queries.",
    t4: "Message queues like RabbitMQ and Kafka help with async workloads.",
    t5: "Profiling and load testing ensure performance under real-world stress.",
  },
  {
    title: "Building Real-Time Apps with WebSockets",
    icon: <FaCloud className="text-indigo-500 text-4xl" />,
    t1: "WebSockets enable persistent client-server connections.",
    t2: "Socket.IO simplifies implementation and fallback mechanisms.",
    t3: "Real-time collaboration tools rely heavily on this protocol.",
    t4: "Redis Pub/Sub enhances scalability across multiple instances.",
    t5: "Real-time UX defines the modern web — fast, fluid, and connected.",
  },
  {
    title: "Docker & DevOps for Developers",
    icon: <FaDocker className="text-blue-600 text-4xl" />,
    t1: "Docker containers ensure consistent environments across systems.",
    t2: "Images encapsulate dependencies, reducing deployment friction.",
    t3: "CI/CD pipelines automate testing, building, and version control.",
    t4: "Kubernetes handles container orchestration at scale.",
    t5: "DevOps bridges development and operations for seamless releases.",
  },
  {
    title: "Caching with Redis — Speed Beyond Databases",
    icon: <SiRedis className="text-red-500 text-4xl" />,
    t1: "Redis acts as an in-memory data store offering lightning-fast access.",
    t2: "Used for caching, pub/sub messaging, and rate limiting.",
    t3: "Key-value operations run in microseconds, reducing DB load.",
    t4: "Integration with Prisma or Express.js is straightforward.",
    t5: "Caching isn’t optional — it’s a core performance multiplier.",
  },
  {
    title: "Mastering Asynchronous JavaScript",
    icon: <SiNodedotjs className="text-lime-600 text-4xl" />,
    t1: "Async operations allow JavaScript to handle multiple tasks efficiently.",
    t2: "Promises provide a cleaner alternative to callbacks.",
    t3: "Async/await improves readability while maintaining non-blocking behavior.",
    t4: "The event loop orchestrates all these under the hood.",
    t5: "Mastery of async concepts is essential for real-world JS performance.",
  },
  {
    title: "Effective TypeScript for Scalable Projects",
    icon: <SiTypescript className="text-blue-500 text-4xl" />,
    t1: "TypeScript introduces static typing to JavaScript for safer codebases.",
    t2: "Interfaces and generics enhance reusability and maintainability.",
    t3: "Type inference and strict mode catch errors early in development.",
    t4: "Tooling like ESLint and ts-node streamline debugging.",
    t5: "TypeScript is indispensable in large production-ready systems.",
  },
  {
    title: "Designing Efficient Database Schemas",
    icon: <FaProjectDiagram className="text-amber-600 text-4xl" />,
    t1: "A good schema design impacts performance and scalability profoundly.",
    t2: "Normalization avoids redundancy while maintaining relational integrity.",
    t3: "Indexing improves query performance drastically.",
    t4: "Understanding query patterns is crucial for efficient structure.",
    t5: "Good schema design anticipates future scalability challenges.",
  },
  {
    title: "My Journey into Software Engineering",
    icon: <FaLaptopCode className="text-emerald-500 text-4xl" />,
    t1: "Every developer starts somewhere — for me, it was curiosity and problem-solving.",
    t2: "From small scripts to scalable full-stack systems, every step built confidence.",
    t3: "Open-source exposure taught me real-world collaboration.",
    t4: "Mentorship and consistency shaped my discipline as a coder.",
    t5: "Software engineering is not just code — it’s creativity in logic form.",
  },
  {
    title: "The Future of Web: AI, Cloud & Beyond",
    icon: <FaBrain className="text-pink-600 text-4xl" />,
    t1: "AI, automation, and cloud-native tools are redefining digital infrastructure.",
    t2: "Edge computing reduces latency and enables real-time intelligence.",
    t3: "WebAssembly and AI APIs bring computation closer to the user.",
    t4: "Sustainability and performance will shape the next-gen web.",
    t5: "The future belongs to adaptive, self-optimizing applications.",
  },
  {
    title: "Understanding REST vs GraphQL APIs",
    icon: <SiGraphql className="text-pink-500 text-4xl" />,
    t1: "REST APIs rely on endpoints, while GraphQL uses a single flexible schema.",
    t2: "GraphQL reduces over-fetching and under-fetching of data.",
    t3: "Resolvers manage data fetching logic from multiple sources.",
    t4: "It fits perfectly in microservices architectures.",
    t5: "Adopting GraphQL can simplify complex frontend data dependencies.",
  },
  {
    title: "Teamwork & Collaboration in Tech",
    icon: <FaUsers className="text-indigo-600 text-4xl" />,
    t1: "Technical excellence is amplified by great teamwork.",
    t2: "Communication and version control define modern collaboration.",
    t3: "Tools like GitHub, Slack, and Jira streamline agile development.",
    t4: "Diverse teams build inclusive, innovative solutions.",
    t5: "In tech, empathy and communication are as vital as algorithms.",
  },
  {
    title: "Debugging Like a Pro",
    icon: <FaTools className="text-gray-600 text-4xl" />,
    t1: "Debugging is a developer’s art — patience meets logic.",
    t2: "Using console.log is fine, but mastering breakpoints is better.",
    t3: "Binary search logic helps isolate bugs faster.",
    t4: "Profiling tools and stack traces reveal root causes effectively.",
    t5: "A calm, structured debugging process saves hours of chaos.",
  },
  {
    title: "Modern Database Design — SQL vs NoSQL",
    icon: <FaDatabase className="text-orange-500 text-4xl" />,
    t1: "SQL enforces structure and relationships with ACID compliance.",
    t2: "NoSQL stores like MongoDB offer flexibility and horizontal scaling.",
    t3: "Use PostgreSQL for relational data; MongoDB for dynamic documents.",
    t4: "ORMs like Prisma simplify schema migrations and data access.",
    t5: "Choosing the right database depends on your app’s data patterns.",
  },
  {
    title: "AI Meets Web Development",
    icon: <FaRobot className="text-purple-500 text-4xl" />,
    t1: "AI integration enhances modern apps with intelligence and automation.",
    t2: "APIs like OpenAI and Hugging Face enable natural language features.",
    t3: "TensorFlow.js allows machine learning directly in the browser.",
    t4: "AI-driven personalization improves user engagement and retention.",
    t5: "The fusion of AI and frontend tech defines the next era of web apps.",
  },
  {
    title: "Version Control Best Practices",
    icon: <FaCodeBranch className="text-rose-500 text-4xl" />,
    t1: "Git remains the backbone of every modern development workflow.",
    t2: "Use feature branches and PRs to maintain a clean commit history.",
    t3: "Rebasing keeps your main branch linear and conflict-free.",
    t4: "Conventional commits improve changelog generation and readability.",
    t5: "Collaboration thrives when developers follow disciplined Git practices.",
  },
  {
    title: "Cloud Computing Essentials",
    icon: <FaCloud className="text-cyan-500 text-4xl" />,
    t1: "The cloud powers scalability, flexibility, and cost efficiency.",
    t2: "IaaS, PaaS, and SaaS each serve unique developer needs.",
    t3: "AWS, GCP, and Azure dominate with strong developer ecosystems.",
    t4: "Infrastructure as Code (IaC) automates environment provisioning.",
    t5: "Cloud-native development aligns perfectly with microservices and DevOps.",
  },
  {
    title: "Web Security Fundamentals",
    icon: <FaShieldAlt className="text-red-600 text-4xl" />,
    t1: "Secure coding practices are essential for safe web apps.",
    t2: "Protect against XSS, CSRF, and SQL injection with proper validation.",
    t3: "JWT and OAuth2 handle secure user authentication and session flow.",
    t4: "Use HTTPS, CSP headers, and encryption to safeguard data.",
    t5: "Security should be proactive, not reactive — build with it in mind.",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-x-auto md:overflow-visible ">
      {blogs.map((blog, idx) => (
        <div
          key={idx}
          className="min-h-screen border-r w-[92vw] md:w-[25rem] flex flex-col justify-center items-center p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            {blog.icon}
            <h2 className="text-md font-bold">{blog.title}</h2>
          </div>
          <InfoCard
            txt={blog.t1}
            txt2={blog.t2}
            txt3={blog.t3}
            txt4={blog.t4}
            txt5={blog.t5}
          />
        </div>
      ))}
    </div>
  );
}
