import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import { useCartStore } from '../../store/cart.store';

const NavLinkStyled = styled(NavLink)`
  position: relative;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${props => props.theme.colors.charcoal};
  transition: color 0.2s;

  &:hover {
    color: ${props => props.theme.colors.midnight};
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background: currentColor;
  }
`;

const Logo = styled(Link)`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.75rem;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: ${props => props.theme.colors.charcoal};
`;

export const Header = () => {
    const { toggleCart, items } = useCartStore();
    const cartCount = items.reduce((acc, item) => acc + item.qty, 0);

    return (
        <header className="sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-md bg-cream/70 border-b border-white/20">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Mobile Menu (Hidden on Desktop) */}
                <button className="md:hidden p-2">
                    <Menu size={24} />
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <NavLinkStyled to="/shop/all">Shop</NavLinkStyled>
                    <NavLinkStyled to="/shop/treats">Treats</NavLinkStyled>
                    <NavLinkStyled to="/shop/concentrates">Concentrates</NavLinkStyled>
                    <NavLinkStyled to="/about">About</NavLinkStyled>
                    <NavLinkStyled to="/journal">Journal</NavLinkStyled>
                    <NavLinkStyled to="/locations">Locations</NavLinkStyled>
                </nav>

                {/* Logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Logo to="/">SPACE VAKERY</Logo>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <Link to="/search" className="p-2 hover:bg-black/5 rounded-full transition hidden sm:block">
                        <Search size={20} />
                    </Link>
                    <Link to="/profile" className="p-2 hover:bg-black/5 rounded-full transition hidden sm:block">
                        <User size={20} />
                    </Link>
                    <button
                        onClick={toggleCart}
                        className="p-2 hover:bg-black/5 rounded-full transition relative"
                    >
                        <ShoppingBag size={20} />
                        {cartCount > 0 && (
                            <span className="absolute top-1 right-0 bg-charcoal text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};
