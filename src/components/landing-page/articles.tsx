"use client"
import React, { useEffect } from 'react';
import anime from 'animejs';

const FunctionBasedValuesDemo: React.FC = () => {
    useEffect(() => {
        anime({
            targets: '.function-based-values-demo .el',
            translateX: function (el: HTMLElement) {
                return el.getAttribute('data-x') || 0;
            },
            translateY: function (el: HTMLElement, i: number) {
                return 50 + (-50 * i);
            },
            scale: function (el: HTMLElement, i: number, l: number) {
                return (l - i) + 0.25;
            },
            rotate: function () {
                return anime.random(-360, 360);
            },
            borderRadius: function () {
                return ['50%', anime.random(10, 35) + '%'];
            },
            duration: function () {
                return anime.random(1200, 1800);
            },
            delay: function () {
                return anime.random(0, 400);
            },
            direction: 'alternate',
            loop: true,
        });
    }, []);

    return (
        <div className="function-based-values-demo flex justify-center items-center min-h-screen">
            <div className="el bg-primary text-white p-5 m-3" data-x="100">Element 1</div>
            <div className="el bg-secondary text-white p-5 m-3" data-x="200">Element 2</div>
            <div className="el bg-accent text-white p-5 m-3" data-x="300">Element 3</div>
        </div>
    );
};

export default FunctionBasedValuesDemo;
