import React from "react";
import { Row } from "./macbook-scroll";
import { KBtn } from "./macbook-scroll";

export const Keyboard = () => {
    return (
        <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
            {/* First Row */}
            <Row>
                <KBtn className="w-10 items-end justify-start pl-[4px] pb-[2px]">
                    esc
                </KBtn>
                <KBtn>
                    <span className="block">F1</span>
                </KBtn>
                <KBtn>
                    <span className="block">F2</span>
                </KBtn>
                <KBtn>
                    <span className="block">F3</span>
                </KBtn>
                <KBtn>
                    <span className="block">F4</span>
                </KBtn>
                <KBtn>
                    <span className="block">F5</span>
                </KBtn>
                <KBtn>
                    <span className="block">F6</span>
                </KBtn>
                <KBtn>
                    <span className="block">F7</span>
                </KBtn>
                <KBtn>
                    <span className="block">F8</span>
                </KBtn>
                <KBtn>
                    <span className="block">F9</span>
                </KBtn>
                <KBtn>
                    <span className="block">F10</span>
                </KBtn>
                <KBtn>
                    <span className="block">F11</span>
                </KBtn>
                <KBtn>
                    <span className="block">F12</span>
                </KBtn>
                <KBtn>
                    <div className="h-4 w-4 rounded-full  bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px">
                        <div className="bg-black h-full w-full rounded-full" />
                    </div>
                </KBtn>
            </Row>

            {/* Second row */}
            <Row>
                <KBtn>
                    <span className="block">~</span>
                    <span className="block mt-1">`</span>
                </KBtn>

                <KBtn>
                    <span className="block ">!</span>
                    <span className="block">1</span>
                </KBtn>
                <KBtn>
                    <span className="block">@</span>
                    <span className="block">2</span>
                </KBtn>
                <KBtn>
                    <span className="block">#</span>
                    <span className="block">3</span>
                </KBtn>
                <KBtn>
                    <span className="block">$</span>
                    <span className="block">4</span>
                </KBtn>
                <KBtn>
                    <span className="block">%</span>
                    <span className="block">5</span>
                </KBtn>
                <KBtn>
                    <span className="block">^</span>
                    <span className="block">6</span>
                </KBtn>
                <KBtn>
                    <span className="block">&</span>
                    <span className="block">7</span>
                </KBtn>
                <KBtn>
                    <span className="block">*</span>
                    <span className="block">8</span>
                </KBtn>
                <KBtn>
                    <span className="block">(</span>
                    <span className="block">9</span>
                </KBtn>
                <KBtn>
                    <span className="block">)</span>
                    <span className="block">0</span>
                </KBtn>
                <KBtn>
                    <span className="block">&mdash;</span>
                    <span className="block">_</span>
                </KBtn>
                <KBtn>
                    <span className="block">&mdash;</span>
                    <span className="block">_</span>
                </KBtn>
                <KBtn>
                    <span className="block">+</span>
                    <span className="block">=</span>
                </KBtn>
                <KBtn className="w-10">
                    <span className="block">Backspace</span>
                </KBtn>
            </Row>

            {/* Third row */}
            <Row>
                <KBtn className="w-10">
                    <span className="block">Tab</span>
                </KBtn>
                <KBtn>
                    <span className="block">Q</span>
                </KBtn>
                <KBtn>
                    <span className="block">W</span>
                </KBtn>
                <KBtn>
                    <span className="block">E</span>
                </KBtn>
                <KBtn>
                    <span className="block">R</span>
                </KBtn>
                <KBtn>
                    <span className="block">T</span>
                </KBtn>
                <KBtn>
                    <span className="block">Y</span>
                </KBtn>
                <KBtn>
                    <span className="block">U</span>
                </KBtn>
                <KBtn>
                    <span className="block">I</span>
                </KBtn>
                <KBtn>
                    <span className="block">O</span>
                </KBtn>
                <KBtn>
                    <span className="block">P</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`{`}</span>
                    <span className="block">[</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`}`}</span>
                    <span className="block">]</span>
                </KBtn>
                <KBtn>
                    <span className="block">|</span>
                    <span className="block">\</span>
                </KBtn>
            </Row>

            {/* Fourth row */}
            <Row>
                <KBtn className="w-10">
                    <span className="block">Caps Lock</span>
                </KBtn>
                <KBtn>
                    <span className="block">A</span>
                </KBtn>
                <KBtn>
                    <span className="block">S</span>
                </KBtn>
                <KBtn>
                    <span className="block">D</span>
                </KBtn>
                <KBtn>
                    <span className="block">F</span>
                </KBtn>
                <KBtn>
                    <span className="block">G</span>
                </KBtn>
                <KBtn>
                    <span className="block">H</span>
                </KBtn>
                <KBtn>
                    <span className="block">J</span>
                </KBtn>
                <KBtn>
                    <span className="block">K</span>
                </KBtn>
                <KBtn>
                    <span className="block">L</span>
                </KBtn>
                <KBtn>
                    <span className="block">:</span>
                    <span className="block">;</span>
                </KBtn>
                <KBtn>
                    <span className="block">&quot;</span>
                    <span className="block">&apos;</span>
                </KBtn>
                <KBtn className="w-10">
                    <span className="block">Enter</span>
                </KBtn>
            </Row>

            {/* Fifth row */}
            <Row>
                <KBtn className="w-10">
                    <span className="block">Shift</span>
                </KBtn>
                <KBtn>
                    <span className="block">Z</span>
                </KBtn>
                <KBtn>
                    <span className="block">X</span>
                </KBtn>
                <KBtn>
                    <span className="block">C</span>
                </KBtn>
                <KBtn>
                    <span className="block">V</span>
                </KBtn>
                <KBtn>
                    <span className="block">B</span>
                </KBtn>
                <KBtn>
                    <span className="block">N</span>
                </KBtn>
                <KBtn>
                    <span className="block">M</span>
                </KBtn>
                <KBtn>
                    <span className="block">,</span>
                    <span className="block">&lt;</span>
                </KBtn>
                <KBtn>
                    <span className="block">.</span>
                    <span className="block">&gt;</span>
                </KBtn>
                <KBtn>
                    <span className="block">?</span>
                    <span className="block">/</span>
                </KBtn>
                <KBtn className="w-10">
                    <span className="block">Shift</span>
                </KBtn>
            </Row>

            {/* Sixth row */}
            <Row>
                <KBtn className="w-20">
                    <span className="block">Ctrl</span>
                </KBtn>
                <KBtn>
                    <span className="block">Win</span>
                </KBtn>
                <KBtn>
                    <span className="block">Alt</span>
                </KBtn>
                <KBtn className="w-20">
                    <span className="block">Space</span>
                </KBtn>
                <KBtn>
                    <span className="block">Alt</span>
                </KBtn>
                <KBtn>
                    <span className="block">Win</span>
                </KBtn>
                <KBtn className="w-20">
                    <span className="block">Ctrl</span>
                </KBtn>
                <KBtn>
                    <span className="block">&uarr;</span>
                </KBtn>
                <KBtn>
                    <span className="block">&darr;</span>
                </KBtn>
                <KBtn>
                    <span className="block">&larr;</span>
                </KBtn>
                <KBtn>
                    <span className="block">&rarr;</span>
                </KBtn>
            </Row>
        </div>
    );
};

export default Keyboard;