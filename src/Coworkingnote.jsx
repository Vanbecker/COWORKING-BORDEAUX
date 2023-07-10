import Coworkingglobal from "./Coworkingglobal "
const CoworkingNote = ({ coworkings }) => {
    const filteredCoworkings = coworkings.filter(coworking => coworking.rating >= 4);

    return (
        <div>
            {filteredCoworkings.map((coworkingLoop) => (
                <Coworkingglobal coworking={coworkingLoop} />
            ))}
        </div>


    );
};

export default CoworkingNote;
