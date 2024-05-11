import './CircledImage.css';

const CircledImage = ({ photo }) => {
    return (
        <div className="circled-image">
            <img src={photo} alt={photo} />
        </div>
    );
};

export default CircledImage;
