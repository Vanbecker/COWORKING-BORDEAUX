// import Coworkingglobal from "./Coworkingglobal"
// const CoworkingNote = ({ coworkings }) => {
//     const filteredCoworkings = coworkings.filter(coworking => coworking.rating >= 4);

//     return (
//         <div>
//             {filteredCoworkings.map((coworkingLoop) => (
//                 <Coworkingglobal coworking={coworkingLoop} />
//             ))}
//         </div>


//     );
// };

// export default CoworkingNote;

// const CoworkingNote = ({ coworkings }) => {
//     const filteredCoworkings = coworkings.filter(coworking => coworking.rating >= 4);

//     return (
//         <div>
//             {filteredCoworkings.map((coworkingLoop) => (
//                 <coworkingLoop coworking={coworkingLoop} key={coworkingLoop.id} />
//             ))}
//         </div>
//     );
// };

// export default CoworkingNote;


////

import React from 'react';
import Coworkingglobal from './Coworkingglobal';

const Coworkingnote = ({ coworkings }) => {
    const filteredCoworkings = coworkings.filter(coworking => coworking.rating >= 4);

    return (
        <div>
            {filteredCoworkings.map((coworkingLoop) => (
                <Coworkingglobal coworking={coworkingLoop} key={coworkingLoop.id} />
            ))}
        </div>
    );
};

export default Coworkingnote;


