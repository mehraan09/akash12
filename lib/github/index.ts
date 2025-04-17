import { Octokit } from '@octokit/rest';

export interface Issue {
    title: string;
    state: 'open' | 'closed';
    createdAt: string;
    url : string
}

type GitHubIssue = {
  title: string;
  state: 'open' | 'closed';
  created_at: string;
  html_url: string;
};
  
export async function getIssues(repo: string): Promise<Issue[] | null> {
    const token = process.env.GIT_TOKEN;

    const octokit = new Octokit({
        auth: token
      })
    const response =  await octokit.request('GET /repos/{owner}/{repo}/issues', {
        owner: 'Akasho09',
        repo: repo ,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })

    if (!response || !Array.isArray(response.data)) return null;

// for JS only no types by github
   
const returnData: Issue[] = (response.data as GitHubIssue[]).map((d) => ({
      title: d.title,
      state: d.state,
      createdAt: String(new Date (d.created_at).toLocaleDateString()),
      url : d.html_url
    }));
  
    return returnData;
  }
  