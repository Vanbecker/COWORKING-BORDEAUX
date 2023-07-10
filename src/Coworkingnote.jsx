


const CoworkingNote = ({ coworkings }) => {
    const filteredCoworkings = coworkings.filter(coworking => coworking.rating >= 4);

    return (
        <div>
            <h2>Coworkings avec une note élevée (4/5 et plus)</h2>
            {filteredCoworkings.map((coworkingLoop) => (
                <Coworkingglobal coworkingProps={coworkingLoop} />
            ))}
        </div>


    );
};

export default CoworkingNote;
