'use client';

import { useEffect, useState } from 'react';
import ThreeTexts from '@/components/mainpage/threeText';

type LeetCodeProfile = {
  username: string;
  profile: {
    realName: string;
    ranking: number;
    countryName: string;
  };
  submitStats: {
    acSubmissionNum: {
      difficulty: string;
      count: number;
      submissions: number;
    }[];
  };
};

export default function Page() {
  const [profile, setProfile] = useState<LeetCodeProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch('/api/leetcode?username=aakashbwd');
      const data = await res.json();
      setProfile(data);
    };

    fetchProfile();
  }, []);

  const totalSolved = profile?.submitStats?.acSubmissionNum?.find(d => d.difficulty === 'All')?.count || 0;
  const easySolved = profile?.submitStats?.acSubmissionNum?.find(d => d.difficulty === 'Easy')?.count || 0;
  const mediumSolved = profile?.submitStats?.acSubmissionNum?.find(d => d.difficulty === 'Medium')?.count || 0;
  const hardSolved = profile?.submitStats?.acSubmissionNum?.find(d => d.difficulty === 'Hard')?.count || 0;

  return (
    <div className="h-screen flex ">
      <ThreeTexts
        t1="LeetCode Profile:"
        t2={
          profile
            ? `Username: ${profile.username}, Rank: ${profile.profile?.ranking}`
            : 'Loading...'
        }
        t3={
          profile
            ? ` \n Problems Solved: ${totalSolved} (E: ${easySolved}, M: ${mediumSolved}, H: ${hardSolved})`
            : ''
        }
      />

      <ThreeTexts t1="Competitive Programming:" t2="Codeforces, GFG, etc." />
    </div>
  );
}
