import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { GerenciarEntidades } from './pages/GerenciarEntidades'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gerenciarEntidades" element={<GerenciarEntidades />} />
      </Routes>
    </Router>
  )
}

export default App
