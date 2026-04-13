export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="text-center max-w-4xl mx-auto px-6">
        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I&apos;m <span className="text-blue-400">Billy Sambasi</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          Data Scientist | Machine Learning 
        </p>

        {/* Description */}
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I build AI models, develop machine learning solutions, and innovations. Passionate about 
          turning data into actionable insights.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
          >
            View My Projects
          </a>
          <a
            href="https://github.com/billysambasi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 rounded-lg font-semibold transition-colors"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}