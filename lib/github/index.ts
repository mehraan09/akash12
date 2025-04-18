import { Octokit } from '@octokit/rest';
import { RequestError } from "@octokit/request-error";

export interface Issue {
  title: string;
  state: 'open' | 'closed';
  createdAt: string;
  url: string;
}

type GitHubIssue = {
  title: string;
  state: 'open' | 'closed';
  created_at: string;
  html_url: string;
};

export async function getIssues(repo: string): Promise<Issue[] | null> {
  const token = process.env.GIT_TOKEN;

  if (!token) {
    console.error("GitHub token not found in environment variables.");
    return null;
  }

  const octokit = new Octokit({
    auth: token,
  });

  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner: 'Akasho09',
      repo : repo,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    if (!Array.isArray(response.data)) {
      console.warn("Unexpected response structure from GitHub API.");
      return null;
    }

    const returnData: Issue[] = (response.data as GitHubIssue[]).map((d) => ({
      title: d.title,
      state: d.state,
      createdAt: new Date(d.created_at).toLocaleDateString(),
      url: d.html_url,
    }));

    return returnData;
  } catch (error) {
    const error1 = error as RequestError;
    // Log error details for debugging
    if (error1.status === 404) {
      console.error(`Repository "${repo}" not found.`);
    } else if (error1.status === 403) {
      console.error("API rate limit exceeded or access forbidden.");
    } else {
      console.error("An error occurred while fetching issues:", error1.message);
    }

    return null;
  }
}
