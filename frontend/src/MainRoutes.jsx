import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage'));
const HungGarPage = lazy(() => import('./pages/HungGarPage'));
const WingChunPage = lazy(() => import('./pages/WingChunPage'));
const SandaPage = lazy(() => import('./pages/SandaPage'));
const FuncionalPage = lazy(() => import('./pages/FuncionalPage'));
const FilialesPage = lazy(() => import('./pages/FilialesPage'));
const InstructoresPage = lazy(() => import('./pages/InstructoresPage'));
const HorariosPage = lazy(() => import('./pages/HorariosPage'));
const LoginPage = lazy(() => import('./pages/Login'));

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/hung-gar" element={<HungGarPage />} />
            <Route path="/wing-chun" element={<WingChunPage />} />
            <Route path="/sanda" element={<SandaPage />} />
            <Route path="/funcional" element={<FuncionalPage />} />
            <Route path="/filiales" element={<FilialesPage />} />
            <Route path="/instructores" element={<InstructoresPage />} />
            <Route path="/horarios" element={<HorariosPage />} />
            <Route path="/ingreso" element={<LoginPage />} />
            <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
    );
};

export default MainRoutes;
