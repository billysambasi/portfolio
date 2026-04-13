export default function ProjectCardSkeleton() {
  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 animate-pulse">
      {/* Header skeleton */}
      <div className="flex justify-between items-start mb-3">
        <div className="h-6 bg-slate-700 rounded w-2/3"></div>
        <div className="h-6 bg-slate-700 rounded w-1/4"></div>
      </div>

      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-slate-700 rounded w-full"></div>
        <div className="h-4 bg-slate-700 rounded w-5/6"></div>
      </div>

      {/* Stats skeleton */}
      <div className="flex gap-4 mb-4">
        <div className="h-4 bg-slate-700 rounded w-12"></div>
        <div className="h-4 bg-slate-700 rounded w-12"></div>
      </div>

      {/* Link skeleton */}
      <div className="h-4 bg-slate-700 rounded w-1/3"></div>
    </div>
  )
}