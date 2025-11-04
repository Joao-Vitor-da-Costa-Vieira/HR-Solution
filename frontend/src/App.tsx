import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home'
import { CrudSimples } from './pages/CrudSimples/CrudSimples'
import { Questionario } from './pages/Questionario/Questionario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crudSimples" element={<CrudSimples />} />
        <Route path='/questionario' element={<Questionario/>} />
      </Routes>
    </Router>
  )
}

export default App
