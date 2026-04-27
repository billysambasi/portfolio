export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div>
            <h2 className="text-5xl font-bold mb-6">About Me</h2>
            
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              I'm a passionate Data Scientist and Machine Learning Engineer with a focus on 
              building practical AI solutions that solve real-world problems. 
            </p>

            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              My expertise spans across machine learning model development, data analysis, and 
              predictive modeling. Skilled in building and deploying machine learning models, managing datasets, and 
              delivering practical solutions that would enhance organizational efficiency. 
              Proficient at bridging technical expertise with administrative leadership to drive 
              innovation, inclusivity, and impact in all sectors. I'm particularly interested in 
              educational technology and how AI can democratize learning. 
            </p>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              When I'm not working on data problems, you'll find me exploring new technologies, 
              contributing to open-source projects, or writing about data science and AI.
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Column 1 */}
                <div>
                  <h4 className="font-semibold text-white mb-2">Data Science</h4>
                  <ul className="text-slate-400 space-y-1 text-sm">
                    <li>• Python & Pandas</li>
                    <li>• Machine Learning</li>
                    <li>• Statistical Analysis</li>
                    <li>• Data Visualization</li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h4 className="font-semibold text-white mb-2">Development</h4>
                  <ul className="text-slate-400 space-y-1 text-sm">
                    <li>• Python</li>
                    <li>• JavaScript/React</li>
                    <li>• Next.js</li>
                    <li>• SQL & Databases</li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <h4 className="font-semibold text-white mb-2">Tools & Platforms</h4>
                  <ul className="text-slate-400 space-y-1 text-sm">
                    <li>• Jupyter Notebook</li>
                    <li>• TensorFlow</li>
                    <li>• Git & GitHub</li>
                    <li>• AWS/Cloud</li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div>
                  <h4 className="font-semibold text-white mb-2">Specializations</h4>
                  <ul className="text-slate-400 space-y-1 text-sm">
                    <li>• AI Implementation</li>
                    <li>• Model Deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Info Box */}
          <div className="space-y-6">
            {/* Stats boxes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors">
                <p className="text-4xl font-bold text-white mb-2">10+</p>
                <p className="text-slate-400">Projects Completed</p>
              </div>

              <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors">
                <p className="text-4xl font-bold text-white mb-2">3+</p>
                <p className="text-slate-400">Years Experience</p>
              </div>
            </div>

            {/* Highlight box */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Currently</h4>
              <p className="text-slate-300 mb-4">
                Working on exploring the nexus of AI, data science, and technological integration and transformation.
              </p>
              <p className="text-sm text-slate-400">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Available for collaborations and new opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}