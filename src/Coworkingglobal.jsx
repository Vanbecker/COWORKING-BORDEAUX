// const Coworkingglobal = ({ coworking }) => {
//     return (
//         <div>
//             <h2>{coworking.name}</h2>
//             <p>{coworking.address}</p>
//             <p>{coworking.city}</p>
//             <img src={coworking.image} alt={coworking.name} />
//             <p>Rating: {coworking.rating}</p>
//         </div>
//     );
// };

// export default Coworkingglobal;


const Coworkingglobal = ({ coworking }) => {
    if (!coworking) {
        return null;
    }

    const { name, address, city, image, rating } = coworking;

    return (
        <div>
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{city}</p>
            <img src={image} alt={name} />
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Coworkingglobal;

