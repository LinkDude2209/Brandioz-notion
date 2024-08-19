import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
    const words = ["create", "innovate", "design", "build", "unite", "partner", "connect"];
    return (
        <div className="h-[40rem] flex justify-center items-center px-4">
            <div className="text-6xl mx-auto font-normal text-primary dark:text-violet-500">
                Collab &
                <FlipWords words={words} /> <br />
                with Brandioz-collab
            </div>
        </div>
    );
}
