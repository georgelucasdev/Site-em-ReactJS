import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Politica from './pages/Politica-de-privacidade'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Reembolso from './pages/politica-de-reembolso'
import Termos from './pages/termos-e-condicoes'
import Enigmas from './pages/Enigmas-da-escuridao'
import UpdateIA from './pages/updateIA'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="politica-de-privacidade" element={<Politica/>} />
                <Route path="Sobre" element={<Sobre/>} />
                <Route path="Enigmas-da-Escuridao" element={<Enigmas/>} />
                <Route path="Projetos" element={<Projetos/>} />
                <Route path="politica-de-reembolso" element={<Reembolso/>} />
                <Route path="termos-e-condicoes" element={<Termos/>} />
                <Route path="updateIA" element={<UpdateIA/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;