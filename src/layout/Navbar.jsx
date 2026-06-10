import { Button } from "@/components/Buttons";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
];


export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary transition-colors duration-300">
                    PM<span className="text-primary">.</span>
                </a>

                {/* Desktop Navbar */}
                <div className = "hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-4 py-2 flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button size="sm">Contact Me</Button>
                </div>
            </nav>
        </header>
    )
};