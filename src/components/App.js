import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Destination from "./Destination"
import "../assets/scss/main.scss"
import { NavProvider, usePage } from "../navContext"


function App() {
  let page = usePage()

  return (
    <NavProvider>
      <div className={ `container ${page}` }>
        <Router>
          <Header></Header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="destination" element={<Destination />} />
              <Route path="crew" element={<Crew />} />
              <Route path="technology" element={<Technology />} />
            </Routes>
          </main>
        </Router>
      </div>
    </NavProvider>
  )
}

const Crew = () => "Crew"
const Technology = () => "Technology"

export default App;
