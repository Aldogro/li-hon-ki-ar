import MainRoutes from './MainRoutes';
import StickyHeader from './components/StickyHeader';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <StickyHeader />
            <MainRoutes />
        </div>
    );
};

export default MainLayout;
