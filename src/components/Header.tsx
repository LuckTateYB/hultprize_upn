import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from './TopBar';
import { useEffect, useState } from 'react';
import { useRouter } from '../context/useRouter';
import mascotUrl from '../assets/mascota.svg';
import HultLogo from "../assets/Hult.png";

const navItems = [
  { path: "/", label: "Inicio" },
  { path: "/nosotros", label: "Nosotros" },
  { path: "/cronograma", label: "Cronograma" },
  { path: "/impacto", label: "Impacto" },
  { path: "/contacto", label: "Únete" },
];

const Header = () => {
  const location = useLocation();
  const rrNavigate = useNavigate();
  const { navigate } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathToRoute = (p: string) => {
    switch (p) {
      case '/':
        return 'inicio';
      case '/nosotros':
        return 'nosotros';
      case '/cronograma':
        return 'cronograma';
      case '/impacto':
        return 'impacto';
      case '/contacto':
        return 'contacto';
      default:
        return 'inicio';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
     <TopBar />
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav
            className={`glass rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 bg-amber-300 ${
              scrolled ? "shadow-lg" : "shadow-md"
            }`}
          >
            {/* Logo (always left) */}
            <Link to="/" className="flex items-center gap-2">
              <img src={HultLogo} alt="Hult Prize Logo" className="w-28 h-10" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    const route = pathToRoute(item.path);
                    setIsMenuOpen(false);
                    navigate(route);
                    rrNavigate(item.path);
                  }}
                  className="relative px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-primary-foreground/10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - Mascot (right) */}
            <div className="lg:hidden flex items-center gap-2">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Mascot">
                <img src={mascotUrl} alt="Mascot" className="w-11 h-11" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-secondary/95 backdrop-blur-md"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-6"
            >
              {/* Close button */}
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute top-6 right-6 p-2 text-secondary-foreground/80 hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
              </motion.button>

              {/* Mascot */}

              {/* Nav Items */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      const route = pathToRoute(item.path);
                      setIsMenuOpen(false);
                      navigate(route);
                      rrNavigate(item.path);
                    }}
                    className={`text-2xl font-semibold transition-colors ${
                      location.pathname === item.path ? "text-accent" : "text-secondary-foreground/80 hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
