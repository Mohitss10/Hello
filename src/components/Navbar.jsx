import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#heroSection" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Show navbar if scrolling up or near top
      setShowNavbar(currentScroll < lastScrollY || currentScroll < 10);

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <nav
        className={`fixed left-0 right-0 top-0 z-[5000] transition-transform duration-300 ease-in-out
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* DESKTOP NAV */}
        <div className="relative mx-auto items-center justify-center gap-5 px-6 py-4 w-fit rounded-2xl shadow-md max-w-2xl backdrop-blur-md bg-[rgba(17,25,40,0.75)] border border-white/10 md:flex hidden mt-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mx-1 text-sm text-white hover:text-primary transition"
            >
              {item.name}
            </a>
          ))}
          {/* <ThemeToggle/> */}
        </div>

        {/* MOBILE NAVBAR (Top Bar) */}
        <div className="md:hidden px-4 py-3 w-full flex items-center justify-between backdrop-blur-md bg-[rgba(17,25,40,0.75)]">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative flex items-center w-10 h-10">
            <Menu
              size={34}
              className={`absolute transition-all duration-300 transform ${isMenuOpen
                  ? "opacity-0 scale-75 -rotate-45"
                  : "opacity-100 scale-100 rotate-0"
                } text-white`}
            />
            <X
              size={34}
              className={`absolute transition-all duration-300 transform ${isMenuOpen
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-75 rotate-45"
                } text-white`}
            />
          </button>
          {/* <ThemeToggle className=""/> */}
        </div>

      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-[4000] flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          backdrop-blur-xl bg-[rgba(17,25,40,0.8)]`}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-xl text-white hover:text-primary transition"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
};
