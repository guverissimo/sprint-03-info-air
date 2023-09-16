import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navegacao from './componentes/Nav'
import Footer from './componentes/Footer'
import Home from './componentes/Home';
import Forum from './componentes/Forum'
import QuemSomos from './componentes/QuemSomos'
import Prevencao from './componentes/Prevencao'
import MapaPoluicao from './componentes/MapaPoluicao'
import Saude from './componentes/Saude'
import Login from './componentes/Login'
import Cadastro from './componentes/Cadastro'

function App() {
  return (
    <>
      <div className='main-container'>
        <Router>
          <Navegacao />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Forum' element={<Forum />} />
            <Route path='/QuemSomos' element={<QuemSomos />} />
            <Route path='/Prevencao' element={<Prevencao />} />
            <Route path='/MapaPoluicao' element={<MapaPoluicao />} />
            <Route path='/Saude' element={<Saude />} />
            <Route path='/Login' element={<Login />}/>
            <Route path='/Cadastro' element={<Cadastro />}/>
          </Routes>
          <Footer />
        </Router>
      </div>

    </>
  )
}

export default App
