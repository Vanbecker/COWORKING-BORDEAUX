// import React, { useState } from 'react';

// const Welcome = () => {
//     const [displayMessage, setDisplayMessage] = useState(true);

//     const handleButtonClick = () => {
//         setDisplayMessage(false);
//     };

//     return (
//         <div>
//             {displayMessage && <h2>Bienvenue !</h2>}
//             <button onClick={handleButtonClick}>Masquer le message</button>
//         </div>
//     );
// };

// export default Welcome;

import React, { useState } from 'react';

const Welcome = () => {
    const [displayMessage, setDisplayMessage] = useState(true);

    const toggleMessage = () => {
        setDisplayMessage(!displayMessage);
    };

    return (
        <div>
            {displayMessage ? <h2>Bienvenue !</h2> : null}
            <button onClick={toggleMessage}>Welcome</button>
        </div>
    );
};

export default Welcome;
