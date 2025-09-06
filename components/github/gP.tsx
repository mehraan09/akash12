"use client";
import { useState, useEffect } from "react";
import { getUser } from "@/lib/github";
import Image from "next/image";
import { GoRepo, GoPeople, GoOrganization, GoLocation, GoLink, GoMail } from "react-icons/go";

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string | null;
  location?: string | null;
  bio?: string | null;
  blog?: string | null;
  email?: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at?: string;
}

const GitHubPortfolio = ({ username }: { username: string }) => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser(username).then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, [username]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <p className="text-center mt-10">User not found!</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6  dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <Image
          src={user.avatar_url}
          alt={user.name || user.login}
          className="w-32 h-32 rounded-full border"
          width={128}
          height={128}
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {user.name}
          </h1>
          <p className="text-gray-500">@{user.login}</p>
          {user.bio && <p className="mt-2 text-gray-700 dark:text-gray-300">{user.bio}</p>}

          <div className="mt-4 flex gap-3 flex-wrap">
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              View Profile
            </a>
            <a
              href={`${user.html_url}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              View Repos
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <StatCard icon={<GoRepo />} label="Public Repos" value={user.public_repos} />
        <StatCard icon={<GoPeople />} label="Followers" value={user.followers} />
        <StatCard icon={<GoPeople />} label="Following" value={user.following} />
        {user.company && <StatCard icon={<GoOrganization />} label="Company" value={user.company} />}
        {user.location && <StatCard icon={<GoLocation />} label="Location" value={user.location} />}
        {user.blog && (
          <StatCard
            icon={<GoLink />}
            label="Blog"
            value={user.blog}
            link={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
          />
        )}
        {user.email && <StatCard icon={<GoMail />} label="Email" value={user.email} link={`mailto:${user.email}`} />}
        {user.created_at && (
          <StatCard
            label="Joined"
            value={new Date(user.created_at).toLocaleDateString()}
          />
        )}
      </div>
    </div>
  );
};

const StatCard = ({
  icon,
  label,
  value,
  link,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string | number;
  link?: string;
}) => (
  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-200 dark:bg-gray-800 hover:shadow-md transition">
    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
      {icon} {label}
    </div>
    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block mt-1 font-semibold text-gray-900 dark:text-gray-100 hover:underline break-words"
      >
        {value}
      </a>
    ) : (
      <p className="mt-1 font-semibold text-gray-900 dark:text-gray-100 break-words">
        {value}
      </p>
    )}
  </div>
);

export default GitHubPortfolio;
