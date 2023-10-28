import StickyHeader from "./components/StickyHeader";

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <StickyHeader />
            {children}
        </div>
    );
};

export default MainLayout;
