const Coworkingglobal = ({ coworking }) => {
    return (
        <div>
            <h2>{coworking.name}</h2>
            <p>{coworking.address}</p>
            <p>{coworking.city}</p>
            <img src={coworking.image} alt={coworking.name} />
            <p>Rating: {coworking.rating}</p>
        </div>
    );
};

export default Coworkingglobal;



