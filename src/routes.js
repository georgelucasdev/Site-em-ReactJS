import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Politica from './pages/Politica-de-privacidade'
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="politica-de-privacidade" element={<Politica/>} />
                <Route path="sobre" element={<Sobre/>} />
                <Route path="contato" element={<Contato/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;