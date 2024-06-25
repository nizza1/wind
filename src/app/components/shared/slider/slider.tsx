"use client"

import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

interface SliderProps {
    title: string;
    children?: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ title, children }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            const rightPadding = parseInt(getComputedStyle(scrollContainerRef.current).paddingRight, 10);
            setIsAtStart(scrollLeft <= 0);
            setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - rightPadding);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        scrollContainer?.addEventListener('scroll', checkScrollPosition, { passive: true });

        return () => {
            scrollContainer?.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const firstChild = scrollContainerRef.current.firstChild as HTMLElement;
            scrollContainerRef.current.scrollLeft += firstChild.offsetWidth;
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const firstChild = scrollContainerRef.current.firstChild as HTMLElement;
            scrollContainerRef.current.scrollLeft -= firstChild.offsetWidth;
        }
    };

    return (
        <section className='max-w-[var(--max-width)] mx-auto pl-5'>
            <article className='py-12'>
                <div className='flex justify-between'>
                    <h1>{title}</h1>
                    <div className='flex justify-between gap-3 pr-5'>
                        <button onClick={scrollLeft}
                            aria-label="Scroll left"
                            disabled={isAtStart}
                            className={`${isAtStart ? 'text-[var(--border)]' : null} border-[1px] border-[var(--border-light)] rounded-full w-8 h-8 flex justify-center items-center`}>
                            <FaArrowLeft />
                        </button>
                        <button onClick={scrollRight}
                            aria-label="Scroll right"
                            disabled={isAtEnd}
                            className={`${isAtEnd ? 'text-[var(--border)]' : null} border-[1px] border-[var(--border-light)] rounded-full w-8 h-8 flex justify-center items-center`}>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                <div ref={scrollContainerRef}
                    className='my-4 py-5 [mask-image:linear-gradient(to_right,white_70%,transparent_100%)] flex overflow-scroll gap-5 border-t-[1px] border-[var(--border)] no-scrollbar snap-mandatory snap-x scroll-pr-14 pr-14 scroll-smooth'>
                    {children}
                </div>
            </article>
        </section>
    );
}

export default Slider;