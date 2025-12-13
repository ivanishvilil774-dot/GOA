import { useState, useEffect } from 'react';

function WindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Attach the resize listener
        window.addEventListener('resize', handleResize);

        // Cleanup: remove the listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <div>
            <h1>Current window width: {width}px</h1>
        </div>
    );
}

export default WindowWidth;
