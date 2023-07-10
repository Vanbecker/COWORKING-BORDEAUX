// import Coworkingglobal from "./Coworkingglobal"

// const AllCoworking = ({ coworkingsFromFakeApi }) => {
//     return (
//         <>
//             {coworkingsFromFakeApi.map((element) => (
//                 <Coworkingglobal coworking={element} />

//             ))}
//         </>
//     )
// }

// export default AllCoworking;


////////////

// import React from 'react';
// import Coworkingglobal from './Coworkingglobal';

// const AllCoworking = ({ coworkingsFromFakeApi }) => {
//     return (
//         <div>
//             {coworkingsFromFakeApi.map((element) => (
//                 <Coworkingglobal coworking={element} key={element.id} />
//             ))}
//         </div>
//     );
// };

// export default AllCoworking;

/////////////////

import React, { useState } from 'react';
import Coworkingglobal from './Coworkingglobal';

const AllCoworking = ({ coworkingsFromFakeApi }) => {
    const [displayCoworkings, setDisplayCoworkings] = useState(false);

    return (
        <div>
            <button onClick={() => setDisplayCoworkings(true)}>Afficher les Coworkings</button>

            {displayCoworkings && (
                <div>
                    {coworkingsFromFakeApi.map((element) => (
                        <Coworkingglobal coworking={element} key={element.id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllCoworking;


