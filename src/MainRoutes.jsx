import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth } from './firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const MainPage = lazy(() => import('./pages/MainPage'));
const HungGarPage = lazy(() => import('./pages/HungGarPage'));
const WingChunPage = lazy(() => import('./pages/WingChunPage'));
const SandaPage = lazy(() => import('./pages/SandaPage'));
const FuncionalPage = lazy(() => import('./pages/FuncionalPage'));
const FilialesPage = lazy(() => import('./pages/FilialesPage'));
const FilialPage = lazy(() => import('./pages/FilialPage'));
const InstructoresPage = lazy(() => import('./pages/InstructoresPage'));
const InstructorPage = lazy(() => import('./pages/InstructorPage'));
const HorariosPage = lazy(() => import('./pages/HorariosPage'));
const LoginPage = lazy(() => import('./pages/Login'));

const AdminPage = lazy(() => import('./pages/AdminPage'));

const MainRoutes = () => {
    const [loggedUser] = useAuthState(auth);
    const admins = process.env.REACT_APP_ADMINS;

    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/hung-gar" element={<HungGarPage />} />
            <Route path="/wing-chun" element={<WingChunPage />} />
            <Route path="/sanda" element={<SandaPage />} />
            <Route path="/funcional" element={<FuncionalPage />} />
            <Route path="/filiales" element={<FilialesPage />} />
            <Route path="/filiales/:filialId" element={<FilialPage />} />
            <Route path="/instructores" element={<InstructoresPage />} />
            <Route path="/instructores/:instructorId" element={<InstructorPage />} />
            <Route path="/horarios" element={<HorariosPage />} />
            <Route path="/ingreso" element={<LoginPage />} />
            {
                loggedUser && admins?.split(',').includes(loggedUser.email) && (
                    <Route path="/administrador" element={<AdminPage />} />
                )
            }

            <Route path="*" element={<div>No se encontró</div>} />
        </Routes>
    );
};

export default MainRoutes;
