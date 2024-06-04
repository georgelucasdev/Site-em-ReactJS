import { Route, Routes } from 'react-router-dom'
import React from 'react';
import Home from './pages/Home'
import Privacidade from './pages/privacidade/index'
import Reembolso from './pages/reembolso/index'
import Terms from './pages/termos/index'
import Enigmas from './pages/Enigmas-da-escuridao/index'

function RoutesApp() {

    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<Privacidade />} />
        <Route path="/Enigmas-da-Escuridao" element={<Enigmas />} />
        <Route path="/politica-de-reembolso" element={<Reembolso />} />
        <Route path="/termos-e-condicoes" element={<Terms />} />
      </Routes>
    )
}
export default RoutesApp;
