import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

interface NavbarProps {
    className?: string; // Add this line
}
export function Navbar({ className }: NavbarProps) {
    return (
        <nav className={`border-b bg-background py-4 flex items-center ${className}`}> {/* Added py-4 */}
            <div className="container max-w-full flex items-center justify-between px-4">
                <Link href="/" className="pl-4">
                    <h1 className="font-semibold text-3xl text-primary ">
                        Company
                    </h1>
                </Link>
                <div className="flex items-center justify-end ml-auto gap-x-2 pr-4">
                    <ThemeToggle />
                    <div className="flex items-center gap-x-2">
                        <Button className="text-lg py-1 px-3">Sign in</Button>
                        <Button variant="secondary" className="text-lg py-1 px-3">Login</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
