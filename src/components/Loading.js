import React from 'react';

export default function Loading() {
    /// INITIAL State
    const [dots, setDots] = React.useState(2);

    /// HELPER Functions
    React.useEffect(() => {
        const interval = setInterval(() => {
            setDots(dots => dots + 1);
        }, 1000);

        return () => clearInterval(interval); //runs after component unmounts

    }, []);


    return (
        <div className='loading-container'>
            <h1>loading{`${(dots % 5) === 0 ? '' : '.'.repeat(dots % 5)}`}</h1>  
        </div>
    );
}
