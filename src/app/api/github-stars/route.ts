import { GITHUB_REPO, GITHUB_REPO_URL } from '@/lib/github'

type GitHubRepoResponse = {
    stargazers_count?: number
}

const responseHeaders = {
    'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
}

export async function GET() {
    try {
        const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
            headers: {
                Accept: 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28',
            },
            next: { revalidate: 300 },
        })

        if (!response.ok) {
            return Response.json(
                { stars: null, repo: GITHUB_REPO, url: GITHUB_REPO_URL },
                { status: 502, headers: responseHeaders },
            )
        }

        const data = (await response.json()) as GitHubRepoResponse
        const rawStars = data.stargazers_count
        const stars = typeof rawStars === 'number' && Number.isFinite(rawStars) ? rawStars : null

        return Response.json(
            { stars, repo: GITHUB_REPO, url: GITHUB_REPO_URL },
            { headers: responseHeaders },
        )
    } catch {
        return Response.json(
            { stars: null, repo: GITHUB_REPO, url: GITHUB_REPO_URL },
            { status: 502, headers: responseHeaders },
        )
    }
}
