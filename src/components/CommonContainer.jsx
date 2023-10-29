import './CommonContainer.css';

const CommonContainer = ({ children }) => {
    return (
        <div className="common-container">
            <div className="common-content">
                {children}
            </div>
            <div className="common-footer">
                Instituto Li Hon Ki - {new Date().getFullYear()}
            </div>
        </div>
    );
};

export default CommonContainer;
