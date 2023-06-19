import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Contacto from './Contacto.jsx'
import Beer from './Beer.jsx'
import PageNotFound from '../../../Repositorio Profesor/C16 - c5-second-project-main/src/Pages/PageNotFound'
import Navbar from './components/Navbar.jsx'
import routes from './utils/routes.js'

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contacto} element={<Contacto />} />
          <Route path={routes.beer} element={<Beer />} />
          <Route path={routes.pageNotFound} element={<PageNotFound />} />
        </Routes>
        <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
    </div>
  )
}

export default App
