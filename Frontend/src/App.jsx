import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Experience } from "@/sections/Experience"
import { Testimonials } from "@/sections/Testinomials"
import { Contact } from "@/sections/Contact"
import { Projects } from "@/sections/Projects"

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App
