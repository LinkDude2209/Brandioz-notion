import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";
import Link from "next/link";
import { Badge } from "lucide-react";
import { Montserrat } from 'next/font/google'; // Import the Montserrat font

const montserrat = Montserrat({ subsets: ['latin'] }); // Initialize the Montserrat font

export function MacbookScrollDemo() {
    return (
        <div className="overflow-hidden bg-transparent w-full">
            <div style={{ transform: 'scale(1.5)' }}>
                <MacbookScroll
                    title={
                        <span className={`${montserrat.className}`} style={{ fontWeight: 500 }}> {/* Add Montserrat font class */}
                            Flosynq makes your life easy. <br /> No kidding.
                        </span>
                    }
                    badge={
                        <Link href="https://peerlist.io/manuarora">
                            <Badge className="h-10 w-10" />
                        </Link>
                    }
                    src={`/linear.webp`}
                    showGradient={false}
                />
            </div>
        </div>
    );
}