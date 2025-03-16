import './Avatar.css';

const Avatar = ({ children }) => {
    return (
        <div className="avatar-container">
            {children}
        </div>
    );
};

export default Avatar;
