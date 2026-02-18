import { NavLink } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import { useState } from 'react';

export const Header = ({ className }: { className?: string }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={`z-40 w-full transition-all duration-300 backdrop-blur-md bg-transparent mt-0 mb-0 ${className || ''}`}>
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-3 py-4 sm:px-6 sm:py-6 md:px-12 flex justify-between items-center bg-transparent backdrop-blur-sm">
                
                {/* Left Navigation */}
                <div className="hidden md:flex flex-1 items-center space-x-6">
                    <NavLink className={({ isActive }) => `text-sm uppercase tracking-widest hover:text-primary transition-colors ${isActive ? 'text-primary font-bold' : 'text-charcoal/80'}`} to="/shop/all">
                        Shop
                    </NavLink>
                    <NavLink className={({ isActive }) => `text-sm uppercase tracking-widest hover:text-primary transition-colors ${isActive ? 'text-primary font-bold' : 'text-charcoal/80'}`} to="/shop/treats">
                        Treats
                    </NavLink>
                    <NavLink className={({ isActive }) => `text-sm uppercase tracking-widest hover:text-primary transition-colors ${isActive ? 'text-primary font-bold' : 'text-charcoal/80'}`} to="/shop/concentrates">
                        Concentrates
                    </NavLink>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex-1">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label="Toggle menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                {/* Centered Logo */}
                <div className="flex-1 flex justify-center overflow-hidden">
                    <a
                        className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider sm:tracking-widest text-charcoal hover:opacity-80 transition-opacity"
                        href="/"
                    >
                        <span className="hidden sm:inline">SPACE VAKERY</span>
                        <span className="sm:hidden">VAKERY</span>
                    </a>
                </div>

                {/* Right Navigation & Icons */}
                <div className="flex flex-1 justify-end items-center space-x-2 sm:space-x-4 md:space-x-8">
                    <div className="hidden md:flex items-center space-x-6">
                         <NavLink className={({ isActive }) => `text-sm uppercase tracking-widest hover:text-primary transition-colors ${isActive ? 'text-primary font-bold' : 'text-charcoal/80'}`} to="/about">
                            About
                        </NavLink>
                        <NavLink className={({ isActive }) => `text-sm uppercase tracking-widest hover:text-primary transition-colors ${isActive ? 'text-primary font-bold' : 'text-charcoal/80'}`} to="/journal">
                            Journal
                        </NavLink>
                        <NavLink className={({ isActive }) => `text-sm uppercase tracking-widest hover:text-primary transition-colors ${isActive ? 'text-primary font-bold' : 'text-charcoal/80'}`} to="/locations">
                            Locations
                        </NavLink>
                    </div>

                    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-charcoal">
                        <NavLink className="hover:text-primary transition-colors hidden sm:block" to="/search">
                            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                        </NavLink>
                        <NavLink className="hover:text-primary transition-colors" to="/profile">
                            <User className="w-4 h-4 sm:w-5 sm:h-5" />
                        </NavLink>
                        <NavLink className="hover:text-primary transition-colors" to="/cart">
                            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                        </NavLink>
                    </div>
                </div>
            </nav>

             {/* Mobile Menu Dropdown (Simple implementation) */}
             {isMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="fixed inset-0 top-[72px] sm:top-[88px] z-50 bg-cream/98 backdrop-blur-xl md:hidden flex flex-col overflow-y-auto">
                        <div className="p-6 space-y-1">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-6 right-6 p-2 hover:bg-charcoal/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                                aria-label="Close menu"
                            >
                                <svg
                                    className="w-6 h-6 text-charcoal"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            {/* Home */}
                            <NavLink
                                className={({ isActive }) => `block text-lg font-medium uppercase tracking-wider py-3 px-4 rounded-lg transition-colors ${isActive ? 'bg-pistachio/20 text-pistachio' : 'text-charcoal hover:bg-charcoal/5'}`}
                                to="/" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </NavLink>

                            {/* Shop Section */}
                            <div className="pt-2">
                                <div className="text-xs uppercase tracking-widest font-bold text-charcoal/40 px-4 py-2">Shop</div>
                                <NavLink
                                    className={({ isActive }) => `block text-lg font-medium uppercase tracking-wider py-3 px-4 rounded-lg transition-colors ${isActive ? 'bg-pistachio/20 text-pistachio' : 'text-charcoal hover:bg-charcoal/5'}`}
                                    to="/shop/all" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    All Products
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => `block text-lg font-medium uppercase tracking-wider py-3 px-4 rounded-lg transition-colors ${isActive ? 'bg-pistachio/20 text-pistachio' : 'text-charcoal hover:bg-charcoal/5'}`}
                                    to="/shop/treats" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Treats
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => `block text-lg font-medium uppercase tracking-wider py-3 px-4 rounded-lg transition-colors ${isActive ? 'bg-pistachio/20 text-pistachio' : 'text-charcoal hover:bg-charcoal/5'}`}
                                    to="/shop/concentrates" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Concentrates
                                </NavLink>
                            </div>

                            {/* Company Section */}
                            <div className="pt-4 border-t border-charcoal/10 mt-4">
                                <div className="text-xs uppercase tracking-widest font-bold text-charcoal/40 px-4 py-2">Company</div>
                                <NavLink
                                    className={({ isActive }) => `block text-lg font-medium uppercase tracking-wider py-3 px-4 rounded-lg transition-colors ${isActive ? 'bg-pistachio/20 text-pistachio' : 'text-charcoal hover:bg-charcoal/5'}`}
                                    to="/about" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => `block text-lg font-medium uppercase tracking-wider py-3 px-4 rounded-lg transition-colors ${isActive ? 'bg-pistachio/20 text-pistachio' : 'text-charcoal hover:bg-charcoal/5'}`}
                                    to="/journal" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Journal
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => `block text-lg font-medium uppercase tracking-wider py-3 px-4 rounded-lg transition-colors ${isActive ? 'bg-pistachio/20 text-pistachio' : 'text-charcoal hover:bg-charcoal/5'}`}
                                    to="/locations" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Locations
                                </NavLink>
                            </div>

                            {/* Account Section */}
                            <div className="pt-4 border-t border-charcoal/10 mt-4">
                                <div className="text-xs uppercase tracking-widest font-bold text-charcoal/40 px-4 py-2">Account</div>
                                <NavLink
                                    className={({ isActive }) => `block text-lg font-medium uppercase tracking-wider py-3 px-4 rounded-lg transition-colors ${isActive ? 'bg-pistachio/20 text-pistachio' : 'text-charcoal hover:bg-charcoal/5'}`}
                                    to="/profile" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    My Profile
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
};
