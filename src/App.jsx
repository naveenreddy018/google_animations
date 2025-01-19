
import NavBar from './components/Navbar/navBar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Navpages/Home/Home'
import Google from './components/Navpages/Google/Google'
import Safety from './components/Navpages/Safety/safety'
import Support from './components/Navpages/Support/support'

function App() {
  return (
    <div>
      <Router>
      <NavBar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/google" element={<Google />} />
        <Route  path="/safety" element={<Safety />}/>
        <Route path="/support" element={<Support />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
