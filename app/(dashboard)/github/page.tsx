
import GitHubContributionGraph from "@/components/github/GitHubContributionGraph";
import GitHubPortfolio from "@/components/github/gP";
import ThreeTexts from "@/components/mainpage/threeText";
import GitHubRepos from "@/components/github/repos2";

export default function Portfolio() {
  return (
    <div className="h-screen flex ">

    <ThreeTexts t1="Akash Ahmad Malik"
     t2={<GitHubPortfolio username="Akasho09"/>}
     t3={<GitHubContributionGraph/>}
     >
    </ThreeTexts> 

    <ThreeTexts t1=""
     t2={<GitHubRepos username="Akasho09"/>}
     >
    </ThreeTexts>
 
    </div>
  )
}

