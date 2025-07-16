// app/api/leetcode/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get('username') || 'aakashbwd';

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
    const res = await axios.post(
      'https://leetcode.com/graphql',
      {
        query,
        variables: { username },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json(res.data.data.matchedUser);
  } catch (err) {
    console.error('Error fetching from LeetCode:', err);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
