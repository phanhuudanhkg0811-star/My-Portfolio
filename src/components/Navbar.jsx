import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react"

function NavBar()
{
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll",handleScroll);
    }, [])
    const handleMenu = () => {
        setIsMenuOpened(!isMenuOpened);
    }
    const navItems = [
        {
            name: "Home",
            href: "#hero"
        },
                {
            name: "About",
            href: "#about"
        },
                {
            name: "Skills",
            href: "#skills"
        },
                {
            name: "Projects",
            href: "#projects"
        },
                {
            name: "Contact",
            href: "#contact"
        },
    ]

    return (
        <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"}`} >
            <div className="container flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10 text">
                        <span className="text-glow text-foreground"> HuuDanh </span>{" "} Portfolio
                    </span>
                </a>

                <div className="hidden md:flex items-center space-x-8 lg:mr-6">
                    {navItems.map((item,key) => {
                        return <a key={key} href={item.href} className = "text-underline">
                            {item.name}
                        </a>
                    })}
                </div>
                <button className="md:hidden z-50 text-foreground cursor-pointer sm:mr-3.5" onClick={handleMenu}>{isMenuOpened ? <X size={24}/> : <Menu size={24}/>} </button>
                <div className={`md:hidden flex flex-col transition-all w-full items-center z-40 justify-center space-y-8  text-foreground fixed sm:w-[50%] h-screen top-0 right-0 bg-background/75 backdrop-blur duration-300 sm:border-l-2 ${isMenuOpened ? " pointer-events-auto opacity-100 translate-x-0" : "opacity-0 pointer-events-none translate-x-full"}`}>
                    {navItems.map((item,key) => {
                        return <a key={key} href={item.href} className = "text-underline ">
                            {item.name}
                        </a>
                    })}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;