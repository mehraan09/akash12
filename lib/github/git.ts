import octokit from "./octo";  // ✅ if you did `export default new Octokit({ ... })`

export const getRepos = async () => {
  const response = await octokit.rest.repos.listForUser({
    username: "Akasho09",
    sort: "updated",
    direction: "desc",
  });

  return response.data; // return only repos data
};




