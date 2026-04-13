import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <ProjectsSection />
      <AboutSection />
    </main>
  )
}