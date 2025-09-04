
import GitHubContributionGraph from "@/components/github/GitHubContributionGraph";
import GitHubPortfolio from "@/components/github/gP";
import ThreeTexts from "@/components/mainpage/threeText";


export default function Portfolio() {
  return (
    <div className="h-screen flex ">

    <ThreeTexts t1=""
     t3={<GitHubPortfolio username="Akasho09"/>}
     >
    </ThreeTexts> 

     <ThreeTexts t1=""
     t3={<GitHubContributionGraph/>}
     >
    </ThreeTexts>

    
 

    </div>
  )
}

