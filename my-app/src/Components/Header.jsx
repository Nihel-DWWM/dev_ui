import { useContext, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setShowMenu(false);
    setIsOpen(false);
  };

  return (
    <header
      className={`z-50 sticky top-0 w-full transition-shadow ${
        scrolled ? "shadow-md bg-[#004B91]" : "bg-[#004B91]"
      }`}
    >
      <div className="container mx-auto  px-4 py-4 flex items-center justify-between text-white">
        {/* Logo + Navigation */}
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold">Touring Club De Tunisie</h1>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex space-x-6">
            <Link to="/#accueil">Accueil</Link>
            <Link to="/apropos/#apropos">A propos</Link>
            <Link to="/#services">Services</Link>
            <Link to="/Contact/#contact">Contact</Link>
            <Link to="/documents/#documents">Documents</Link>
          </nav>
        </div>

        {/* Connexion / Avatar + Hamburger */}
        <div className="relative flex items-center space-x-4">
          {user ? (
            <div className="relative">
              <div className="flex items-center gap-2">
                <span>Bienvenue</span>
                <img
                  src={`https://ui-avatars.com/api/?name=${user.lname}`}
                  alt="avatar"
                  className="w-8 h-8 rounded-full cursor-pointer"
                  onClick={() => setShowMenu(!showMenu)}
                />
              </div>

              {/* Menu déroulant utilisateur */}
              {showMenu && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-md w-40 z-50">
                  <Link
                    to="/user/connect"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setShowMenu(false)}
                  >
                    Mon compte
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Me déconnecter
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <Button className="hidden lg:block bg-yellow-400 text-[#0E3A66] hover:bg-yellow-500">
                Connexion
              </Button>
            </Link>
          )}

          {/* Menu hamburger pour mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 bg-[#004B91] text-white">
          <nav className="flex flex-col space-y-2">
            <Link to="/#accueil" onClick={() => setIsOpen(false)}>
              Accueil
            </Link>
            <Link to="/apropos/#apropos" onClick={() => setIsOpen(false)}>
              A propos
            </Link>
            <Link to="/#services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/Contact/#contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link to="#" onClick={() => setIsOpen(false)}>
              Documents
            </Link>

            {!user && (
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 w-fit">
                  Connexion
                </Button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}