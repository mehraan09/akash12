"use client";
import React, { useState, useEffect } from "react";
import { getRepos } from "@/lib/github/git";
import { GoStar, GoRepoForked, GoBook } from "react-icons/go"; // ✅ react-icons

interface GitHubReposProps {
  username: string;
}

const GitHubRepos: React.FC<GitHubReposProps> = ({ username }) => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const data = await getRepos();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <p className="animate-pulse text-gray-500 dark:text-gray-400">
          Loading repositories...
        </p>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        Repositories
      </h2>

      <div className="grid gap-6 md:grid-cols-1">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg  hover:shadow-sm transition"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {repo.name}
                </a>
              </h3>
              {repo.private && (
                <span className="text-xs px-2 py-0.5 border rounded-md text-gray-500 dark:text-gray-400">
                  Private
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {repo.description || "No description provided"}
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              {repo.language && (
                <span className="flex items-center gap-1">
                  <GoBook size={14} />
                  {repo.language}
                </span>
              )}
              <span className="flex items-center gap-1">
                <GoStar size={14} />
                {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <GoRepoForked size={14} />
                {repo.forks_count}
              </span>
              <span>
                Updated {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GitHubRepos;
