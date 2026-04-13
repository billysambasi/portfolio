import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/billysambasi',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/billysambasi',
    },
  ]

  return (
    <footer id="contact" className="bg-slate-950 text-white border-t border-slate-700 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Billy</span>
              <span className="text-slate-400">.dev</span>
            </h3>
            <p className="text-slate-400">
              Data Scientist & Machine Learning Engineer. Building AI solutions 
              and innovating education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-slate-400 hover:text-blue-400 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>
            © {currentYear} Billy Sambasi. All rights reserved.
          </p>
          <p>
            Built with Next.js, React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}