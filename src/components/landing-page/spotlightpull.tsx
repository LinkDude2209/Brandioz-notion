"use client"
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

export function SpotlightPreview() {
    const floRef = useRef<HTMLDivElement | null>(null);
    const synqRef = useRef<HTMLDivElement | null>(null);
    const lineRef = useRef<HTMLDivElement | null>(null);
    const objectRef = useRef<HTMLDivElement | null>(null);

    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        // Initial animation for "Flo" with a bounce effect
        if (floRef.current) {
            anime({
                targets: floRef.current,
                opacity: [0, 1],
                x: [100, 0],
                scale: [0.5, 1],
                duration: 1000,
                easing: 'spring(1, 0.7, 10, 10)',
                delay: 500,
                complete: () => {
                    anime({
                        targets: floRef.current,
                        translateY: ['-10px', '10px'],
                        duration: 2000,
                        easing: 'easeInOutQuad',
                        loop: true,
                        direction: 'alternate',
                    });
                }
            });
        }

        // Existing animation for "synq"
        if (synqRef.current) {
            anime({
                targets: synqRef.current,
                opacity: [0, 1],
                translateY: [100, 0],
                scale: [0.5, 1],
                duration: 1000,
                easing: 'spring(1, 0.7, 10, 10)',
                delay: 1000,
                complete: () => {
                    const underline = synqRef.current?.querySelector('.underline');
                    if (underline) {
                        anime({
                            targets: underline,
                            scaleX: [0, 1],
                            duration: 500,
                            easing: 'spring(1, 0.7, 10, 10)',
                            delay: 200,
                        });
                    }
                }
            });
        }

        // Existing animation for the connecting line
        if (lineRef.current) {
            anime({
                targets: lineRef.current,
                scaleX: [0, 1],
                transformOrigin: 'left',
                duration: 1000,
                easing: 'spring(1, 0.7, 10, 10)',
                delay: 1500,
            });
        }

        // Animation for the separate object with a hover effect
        if (objectRef.current) {
            anime({
                targets: objectRef.current,
                opacity: [0, 1],
                scale: [0.5, 1],
                translateY: [100, 0],
                duration: 1000,
                easing: 'spring(1, 0.7, 10, 10)',
                delay: 2000,
            });

            objectRef.current.addEventListener('mouseover', () => {
                anime({
                    targets: objectRef.current,
                    scale: [1.2, 1],
                    duration: 200,
                    easing: 'easeInOutQuad',
                });
            });

            objectRef.current.addEventListener('mouseout', () => {
                anime({
                    targets: objectRef.current,
                    scale: [1, 0.8],
                    duration: 200,
                    easing: 'easeInOutQuad',
                });
            });
        }
    }, []);

    return (
        <div className="h-[40rem] w-full flex items-center justify-center rounded-md relative overflow-hidden">
            <div className="p-4 max-w-7xl mx-auto flex items-center justify-center relative z-10 w-full pt-20 md:pt-0">
                <div ref={floRef} className="text-[12rem] md:text-[18rem] font-bold dark:text-amber-300 leading-none text-red-700">
                    flo
                </div>

                {/* Connecting Line Animation */}
                <div className="relative mx-4 flex items-center">
                    <div ref={lineRef} className="absolute left-1/2 top-1/2 w-full h-[2px] bg-amber-200 transform -translate-x-1/2" />
                </div>

                <div ref={synqRef} className="text-[8rem] md:text-[12rem] font-light dark:text-amber-200 leading-none relative text-red-700">
                    synq
                    {/* Underline */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] dark:bg-amber-200  bg-red-700 transform origin-left underline" style={{ transform: 'scaleX(0)' }} />
                </div>

                {/* Add the separate object here */}
                <div ref={objectRef} className="absolute top-0 right-0 w-[100px] h-[100px] bg-gray-200 rounded-full">
                    {/* Add content or styling to the object as needed */}
                </div>
            </div>
        </div>
    );
}