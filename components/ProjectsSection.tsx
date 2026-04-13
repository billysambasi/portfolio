'use client'

import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import ProjectCardSkeleton from './ProjectCardSkeleton'
import { getGithubRepos, GithubRepo } from '@/lib/github'

export default function ProjectsSection() {
  const [projects, setProjects] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const repos = await getGithubRepos(
          process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'billysambasi'
        )
        setProjects(repos)
      } catch (err) {
        setError('Failed to load projects')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id="projects" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <h2 className="text-5xl font-bold mb-4 text-center">My Projects</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Here are some of my recent and most-starred projects. Each showcases 
          different skills in machine learning, data analysis, and software development.
        </p>

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error state */}
        {error && (
          <p className="text-center text-red-400">{error}</p>
        )}

        {/* Projects grid */}
        {!loading && !error && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.name}
                description={project.description}
                link={project.html_url}
                language={project.language}
                stars={project.stargazers_count}
                forks={project.forks_count}
              />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && projects.length === 0 && (
          <p className="text-center text-slate-400">
            No projects found. Check back soon!
          </p>
        )}
      </div>
    </section>
  )
}