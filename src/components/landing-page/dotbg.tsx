import React from "react";

interface DotBackgroundDemoProps {
    children: React.ReactNode;
}

export function DotBackgroundDemo({ children }: DotBackgroundDemoProps) {
    return (
        <div className="w-full h-full relative">
            {/* Radial gradient for the container to give a faded look */}
            <div
                className="absolute pointer-events-none inset-0 h-screen flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            />
            <div
                className="absolute inset-0 h-screen bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
            />
            <div className="relative z-10 text-white dark:text-black">
                {children}
            </div>
        </div>
    );
}