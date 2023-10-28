import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import StickyHeader from './components/StickyHeader';

const MainPage = lazy(() => import('./pages/MainPage'));
const HungGarPage = lazy(() => import('./pages/HungGarPage'));
const WingChunPage = lazy(() => import('./pages/WingChunPage'));
const SandaPage = lazy(() => import('./pages/SandaPage'));

const MainLayout = () => {
    return (
        <div className="main-layout">
            <StickyHeader />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/hung-gar" element={<HungGarPage />} />
                <Route path="/wing-chun" element={<WingChunPage />} />
                <Route path="/sanda" element={<SandaPage />} />
                <Route path="/funcional" element={<MainPage />} />
                <Route path="/instructores" element={<MainPage />} />
                <Route path="/horarios" element={<MainPage />} />
                <Route path="*" element={<div>Not Found</div>}/>
            </Routes>
        </div>
    );
};

export default MainLayout;
