import React from "react";
import { FlipWords } from "../ui/flip-words";
import { cn } from "@/lib/utils";

interface FlipWordsDemoProps {
    className?: string;
}

export function FlipWordsDemo({ className }: FlipWordsDemoProps) {
    const words = ["create", "innovate", "design", "build", "unite", "partner", "connect"];
    return (
        <div className={cn("h-[40rem] flex justify-center items-center px-4", className)}>
            <div className="text-6xl mx-auto font-normal text-primary dark:text-violet-500">
                Collab &
                <FlipWords words={words} /> <br />
                with Flosynq
            </div>
        </div>
    );
}