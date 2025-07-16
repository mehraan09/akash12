// lib/getLeetCodeProfile.ts
import axios from "axios";

export type LeetCodeProfile = {
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

export const getLeetCodeProfile = async (username: string): Promise<LeetCodeProfile | null> => {
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          realName
          ranking
          countryName
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
    }
  `;

  try {
    const res = await axios.post("https://leetcode.com/graphql", {
      query,
      variables: { username },
    });

    return res.data.data?.matchedUser ;
  } catch (error) {
    console.error("LeetCode API error:", error);
    return null;
  }
};
