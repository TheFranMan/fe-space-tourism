import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Header from "./Header"
import Home from "./Home"
import Destination from "./Destination"
import PAGES from "../pages"
import "../assets/scss/main.scss"



function App() {
  const [page, updatePage] = useState(PAGES.HOME)
  const [isNavOpen, updateIsNavOpen] = useState(false)

  const handleNavClick = (e, dest) => {
    e.target.blur() // Neccessary to close the mobile nav menu as it's elements retain focus.
    updateIsNavOpen(false)
    updatePage(dest)
}

  return (
    <div className={ `container ${page}` }>
      <Router>
        <Header isNavOpen={ isNavOpen}  updateIsNavOpen={ updateIsNavOpen } handleNavClick={ handleNavClick }></Header>
        <main>
          <Routes>
            <Route path="/" element={<Home handleNavClick={ handleNavClick }/>} />
            <Route path="destination" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="technology" element={<Technology />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

const Crew = () => "Crew"
const Technology = () => "Technology"

export default App;
