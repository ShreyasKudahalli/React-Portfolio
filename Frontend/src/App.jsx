import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Experience } from "@/sections/Experience"
import { Testimonials } from "@/sections/Testinomials"
import { Contact } from "@/sections/Contact"
import { Projects } from "@/sections/Projects"
import { CodingProfiles } from "./sections/CodingProfiles"
import { Education } from "./sections/Education"
import { Skills } from "./sections/Skills"

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education/>
        {/* <Experience /> */}
        {/* <Testimonials /> */}
        <CodingProfiles />
        <Contact />
      </main>
    </div>
  )
}

export default App
