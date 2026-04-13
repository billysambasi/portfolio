import { FaStar, FaGitAlt } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string | null
  link: string
  language: string | null
  stars: number
  forks: number
}

export default function ProjectCard({
  title,
  description,
  link,
  language,
  stars,
  forks,
}: ProjectCardProps) {
  return (
    <div className="bg-slate-800 rounded-lg p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300 border border-slate-700 hover:border-blue-500">
      {/* Header with title and language */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {language && (
          <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full">
            {language}
          </span>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>
      )}

      {/* Stats row */}
      <div className="flex gap-4 mb-4 text-sm text-slate-400">
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span>{stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaGitAlt className="text-slate-400" />
          <span>{forks}</span>
        </div>
      </div>

      {/* Link button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
      >
        View on GitHub →
      </a>
    </div>
  )
}