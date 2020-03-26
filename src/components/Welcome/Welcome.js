import React from 'react';

import './Welcome.sass';

const Welcome = () => {

    return(
        <div className="welcome">
            <h1>Welcome to Star Wars Database!</h1>
            <p>Here you can find information about peoples, planets and starships in universe Star Wars</p>
            <p>Click above on tab to see intersting you information!</p>        
        </div>
    );
}

export default Welcome;