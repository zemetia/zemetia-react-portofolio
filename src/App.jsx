import React, { useEffect, useLayoutEffect, useState } from "react"
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portofolio from './components/portofolio/Portofolio'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Education from "./components/education/Education"

const App = () => {
  const [loc, setLoc] = useState(0)

  useLayoutEffect(() => {
      const updateLoc = () => {
        setLoc(window.pageYOffset)
      }

      window.addEventListener('scroll', updateLoc)
      updateLoc()
      
      return () => window.removeEventListener('scroll', updateLoc)
  }, [])

  useEffect(() => {
    let navA = document.querySelectorAll('nav a')
    let nav = document.querySelector('nav')
    document.body.style.background = loc < 560? "rgb(22,0,10)": "#1b3045"
    document.querySelector("nav").style.bottom = loc < (window.innerWidth > 1000? 3000 : 4400)? "2rem": "85vh"
    nav.style.borderColor = loc < 560? "": "var(--color-primary)"
    nav.style.boxShadow = loc < 560? "": "0 0 0 transparent"
    navA[0].style.color = loc < 560? "": "var(--color-primary)"
    navA[1].style.color = loc < 560? "": "var(--color-primary)"
    navA[2].style.color = loc < 560? "": "var(--color-primary)"
    navA[3].style.color = loc < 560? "": "var(--color-primary)"
    navA[4].style.color = loc < 560? "": "var(--color-primary)"
    navA[5].style.color = loc < 560? "": "var(--color-primary)"

    
  }) 

  return (
    <div>        
      <Header />
      <Nav />
      <About />
      <Portofolio />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
  
export default App;