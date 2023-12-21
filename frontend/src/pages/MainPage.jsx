import './MainPage.css';
import empty from '../assets/svg/landscape-placeholder.svg';
import CommonContainer from '../components/CommonContainer';

const MainPage = () => {
    return (
        <CommonContainer>
            <div className="full-width-section">
                <div className="school-banner-container">
                    <h1>Instituto Li Hon Ki</h1>
                    <img src={empty} alt="school-banner" />
                </div>
            </div>
        </CommonContainer>
    );
};

export default MainPage;
