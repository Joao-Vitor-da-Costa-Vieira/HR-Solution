import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home'
import { CrudSimples } from './pages/CrudSimples/CrudSimples'
import { Questionario } from './pages/Questionario/Questionario';
import { Analise } from './pages/Analise/Analise';
import { TestesLoucos } from './pages/TestesLoucos/TestesLoucos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crudSimples" element={<CrudSimples />} />
        <Route path='/questionario' element={<Questionario/>} />
        <Route path='/analise' element={<Analise />} />
        <Route path="/testesLoucos" element={<TestesLoucos/>} />
      </Routes>
    </Router>
  )
}

export default App
