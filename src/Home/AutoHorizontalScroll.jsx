import React, { useRef, useEffect } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
const AutoHorizontalScroll = ({ children }) => {


    const containerRef = useRef(null);

    const handleClickNext = () => {
        let i = 0;
        setInterval(() => {
            i += 1
            if (i > 80) return
            containerRef.current.scrollLeft -= 10;
        }, 1)
    }
    const handleClickPrev = () => {
        let i = 0;
        setInterval(() => {
            i += 1
            if (i > 80) return
            containerRef.current.scrollLeft += 10;
        }, 1)
    }
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
        <div className='flex flex-col'>
            <div className="auto-horizontal-scroll" ref={containerRef}>
                {children}
            </div>
            <div className='mx-auto my-4 flex gap-5 items-center w-full relative justify-center'>
                <AiOutlineArrowLeft size="min(3rem, 5vw)"
                    className=' cursor-pointer'
                    color='#A52E2E'
                    onClick={handleClickNext} />
                <div className="h-[3px] w-1/2 bg-[#A52E2E]"></div>
                <AiOutlineArrowRight size="min(3rem, 5vw)"
                    color='#A52E2E'
                    className=' cursor-pointer'
                    onClick={handleClickPrev} />
            </div>
        </div>
    );
};

export default AutoHorizontalScroll;
