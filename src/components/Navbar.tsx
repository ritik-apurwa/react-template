import { useState, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-scroll";
import { navlinks, pLogo } from "@/data";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  const updateNavbarVisibility = useCallback(() => {
    const currentScrollY = scrollY.get();

    if (currentScrollY < 500) {
      setIsVisible(true);
    } else if (currentScrollY < lastScrollY - 100) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY + 100) {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  }, [scrollY, lastScrollY]);

  useMotionValueEvent(scrollY, "change", updateNavbarVisibility);

  const navVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, scale: 0.95 },
    open: { opacity: 1, scale: 1 },
  };

  return (
    <motion.nav
      variants={navVariants}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 gt bg-opacity-90 backdrop-blur-sm shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between h-auto">
          <div className="flex w-full justify-between items-center">
            <div className="flex-shrink-0 flex pt-3 ">
              <img src={pLogo} className="lg:h-20 h-16  w-auto" alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navlinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.name}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    className=" hover:bg-gray-200 text-yellow-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 hover:text-gray-900 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="text-yellow-600" size={24} />
                ) : (
                  <Menu className="text-yellow-600" size={24} />
                )}
              </button>
            </div>
          </div>

          <motion.div
            initial="closed"
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={mobileMenuVariants}
            transition={{ duration: 0.2 }}
            className={`md:hidden w-full ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navlinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.name}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="text-yellow-600 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md  font-bold cursor-pointer transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
