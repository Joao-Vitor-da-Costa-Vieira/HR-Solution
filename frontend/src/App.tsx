import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home'
import { CrudSimples } from './pages/CrudSimples/CrudSimples'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crudSimples" element={<CrudSimples />} />
      </Routes>
    </Router>
  )
}

export default App
