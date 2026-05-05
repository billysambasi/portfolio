export interface GithubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  topics?: string[]
  updated_at: string
  archived: boolean
}

export async function getGithubRepos(username: string): Promise<GithubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&per_page=10&type=owner`,
      {
        headers: {
          'Accept': 'application/vnd.github.mercy-preview+json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    const repos = await response.json()
    return repos.filter((repo: GithubRepo) => !repo.archived)
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error)
    return []
  }
}

export async function getGithubUserInfo(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`)

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Failed to fetch GitHub user info:', error)
    return null
  }
}
