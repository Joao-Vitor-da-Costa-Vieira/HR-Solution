import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home'
import { CrudSimples } from './pages/CrudSimples/CrudSimples'
import { Questionario } from './pages/Questionario/Questionario';
import { Analise } from './pages/Analise/Analise';
import { TestesLoucos } from './pages/TestesLoucos/TestesLoucos';
import { GerenciarQuestionario } from './pages/GerenciarQuestionario/GerenciarQuestionario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crudSimples" element={<CrudSimples />} />
        <Route path='/questionario' element={<Questionario/>} />
        <Route path='/analise' element={<Analise />} />
        <Route path="/testesLoucos" element={<TestesLoucos/>} />
        <Route path="/gerenciarQuestionario" element={<GerenciarQuestionario/>} />
      </Routes>
    </Router>
  )
}

export default App
