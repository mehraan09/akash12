import Twoo from "@/components/mainpage/twoImgs";
import RightArrow from "@/components/rightArrow";
import ThreeTexts from "@/components/mainpage/threeText";
import Layout from "@/components/layyy";

const Home = () => {
  const content = {
    greeting: "Hi There! 👋 I'm Akash Ahmad Malik",
    title: "🚀 Full-Stack Web Developer | Problem Solver | Cricket Enthusiast.",
    description: `I’m a software engineer passionate about development, design, and performance. 
      Currently, I am seeking an internship opportunity where I can apply my technical skills in a real-world setting, collaborate with experienced professionals, 
      and contribute to impactful projects.`,
    connect: "Always eager to learn, build, and solve real-world problems. Let’s connect and build something amazing! 🌱💻🏏",
    links: [{
      l1: "https://drive.google.com/file/d/1Zc2t40AY9C9h0o1ZGi45ZyUscxb33yuC/view?usp=sharing",
      l2: "📄 Resume"
    }]
  };

  return (
    <Layout>
      <div className="h-screen flex w-max">
            <ThreeTexts
              nav="/ed"
              t1={content.greeting}
              t2={content.title}
              t3={content.connect}
              t4={content.description}
              links={content.links}
            />
            <Twoo />
            <div className="hidden md:flex"><RightArrow  linkk="/ed" /></div>
            </div>
    </Layout>
  );
};

export default Home;