import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Destination from "./Destination"
import "../assets/scss/main.scss"
import { NavProvider, usePage } from "../navContext"


function App() {
  // Create Body component to be wrapped by NavProvider. This way we can use "usePage" as it is a child of NavProvider.
  const Body = () => {
    let page = usePage()

    return (
      <div className={ `container ${page}` }>
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          The { page } page has loaded
        </div>
        <Router>
          <Header></Header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="destination" element={<Destination />} />
              <Route path="crew" element={<Crew />} />
              <Route path="technology" element={<Technology />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
        </Router>
      </div>
    )
  }

  return (
    <NavProvider>
      <Body />
    </NavProvider>
  )
}

const Crew = () => "Crew"
const Technology = () => "Technology"
const NotFound = () => "404 Not Found"

export default App;
