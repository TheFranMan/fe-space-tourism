import Header from "./Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../assets/scss/main.scss"

function App() {
  return (
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
  )
}

function Home() { return "Home" }
function Destination() { return "Destination" }
function Crew() { return "Crew" }
function Technology() { return "Technology" }

export default App;
