"use client";
import { useState, useEffect } from "react";
import { getUser } from "@/lib/github";
import Image from "next/image";

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  location: string | null;
  bio: string | null;
  blog?: string | null;
  email?: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at?: string;
  starred_url?: string;
  repos_url: string;
}

const GitHubPortfolio = ({ username }: { username: string }) => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(username);
      setUser(data);
      setLoading(false);
    };
    fetchUser();
  }, [username]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <p className="text-center mt-10">User not found!</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <Image
          src={user.avatar_url}
          alt={user.name}
          className="w-32 h-32 rounded-full border-4 border-blue-500"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{user.name}</h1>
          <p className="text-gray-500 text-lg">@{user.login}</p>
          {user.bio && <p className="mt-2 text-gray-700">{user.bio}</p>}
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              GitHub Profile
            </a>
            {user.starred_url && (
              <a
                href={user.starred_url.replace("{/owner}{/repo}", "")}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
              >
                Starred Repos
              </a>
            )}
            <a
              href={user.repos_url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
            >
              All Repos
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <StatCard title="Public Repos" value={user.public_repos} />
        <StatCard title="Followers" value={user.followers} />
        <StatCard title="Following" value={user.following} />
        {user.company && <StatCard title="Company" value={user.company} />}
        {user.location && <StatCard title="Location" value={user.location} />}
        {user.blog && (
          <StatCard
            title="Blog"
            value={user.blog}
            link={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
          />
        )}
        {user.email && <StatCard title="Email" value={user.email} />}
        {user.created_at && (
          <StatCard title="Joined" value={new Date(user.created_at).toLocaleDateString()} />
        )}
      </div>
    </div>
  );
};

const StatCard = ({
  title,
  value,
  link,
}: {
  title: string;
  value: string | number;
  link?: string;
}) => (
  <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition flex flex-col">
    <h3 className="text-gray-500 text-sm">{title}</h3>
    {link ? (
      <a href={link} target="_blank" rel="noreferrer" className="text-blue-600 font-semibold mt-1 break-words">
        {value}
      </a>
    ) : (
      <p className="text-gray-800 font-semibold mt-1">{value}</p>
    )}
  </div>
);

export default GitHubPortfolio;
