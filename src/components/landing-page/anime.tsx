"use client";

import { useEffect } from 'react';
import anime from 'animejs';

export default function LineDrawingAnimation() {
    useEffect(() => {
        // Anime.js animation for paths
        anime({
            targets: '.line-drawing-demo .el',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: (el: any, i: number) => {
                if (el instanceof SVGPathElement) {
                    return i * 250;
                }
                return 0;
            },
            direction: 'alternate',
            loop: true,
        });

        // Anime.js animation for text drawing
        anime({
            targets: '.line-drawing-demo text',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: 500,
            strokeDasharray: (el: any) => {
                if (el instanceof SVGTextElement) {
                    const bbox = el.getBBox();
                    return [bbox.width, bbox.width];
                }
                return [0, 0];
            },
            loop: true,
        });
    }, []);

    return (
        <div className="line-drawing-demo" style={{ padding: '20px' }}>
            <svg
                viewBox="0 0 280 100"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
            >
                <g fill="none" stroke="currentColor" strokeWidth="1" className="lines text-primary">
                    <path className="el" d="M58 80V50.12C57.7 41.6 51.14 35 43 35a15 15 0 0 0 0 30h7.5v15H43a30 30 0 1 1 0-60c16.42 0 29.5 13.23 30 29.89V80H58z" />
                    <path className="el" d="M73 80V20H58v60h15z" />
                    <path className="el" d="M58 80V49.77C58.5 33.23 71.58 20 88 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80H58zm75 0V20h-15v60h15z" />
                    <path className="el" d="M118 80V49.77C118.5 33.23 131.58 20 148 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80h-15zm-7.5-60a7.5 7.5 0 1 1-7.48 8v-1c.25-3.9 3.5-7 7.48-7z" />
                    <path className="el" d="M133 65a15 15 0 0 1-15-15v-7.5h-15V50a30 30 0 0 0 30 30V65zm30 15V49.77C163.5 33.23 176.58 20 193 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80h-15z" />
                    <path className="el" d="M238 65a15 15 0 0 1 0-30c8.1 0 14.63 6.53 15 15h-15v15h30V49.89C267.5 33.23 254.42 20 238 20a30 30 0 0 0 0 60V65z" />
                    <path className="el" d="M260.48 65a7.5 7.5 0 1 1-7.48 8v-1c.26-3.9 3.5-7 7.48-7z" />
                </g>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
                    <text x="10" y="50" font-family="Arial" font-size="40" fill="none" stroke="orange" stroke-width="4">
                        Flosynq
                    </text>
                </svg> */}



            </svg>
        </div>
    );
}
