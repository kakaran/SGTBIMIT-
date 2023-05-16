import React, { useRef, useEffect } from 'react';

const AutoHorizontalScroll = ({ children }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const scrollContainer = () => {
            container.scrollLeft += 1; // Adjust the scroll speed as desired

            // Reset the scroll position to the beginning when reaching the end
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0;
            }
        };

        const scrollInterval = setInterval(scrollContainer, 10); // Adjust the scroll interval as desired

        // Stop scrolling when the component is unmounted
        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className="auto-horizontal-scroll" ref={containerRef}>
            {children}
        </div>
    );
};

export default AutoHorizontalScroll;
