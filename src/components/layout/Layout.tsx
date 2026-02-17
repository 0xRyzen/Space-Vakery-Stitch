import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header';
import { CartDrawer } from '../commerce/CartDrawer';
import { Starfield } from '../ui/Starfield';

const Main = styled.main`
  min-height: 80vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`;

export const Layout = () => {
    return (
        <>
            <Starfield />
            <div className="flex flex-col min-h-screen relative overflow-x-hidden w-full max-w-full">
                <Header />
                <CartDrawer />

                <Main>
                    <Outlet />
                </Main>

                <footer className="py-12 md:py-16 bg-oat/40 backdrop-blur-md text-center mt-auto border-t border-white/20">
                <div className="container px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12 text-left">
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="font-serif text-xl mb-4 text-charcoal">Space Vakery</h4>
                            <p className="text-sm text-midnight/60">Crafted edibles from a softer cosmos.</p>
                        </div>
                        <div>
                            <h5 className="font-bold mb-3 md:mb-4 text-sm uppercase tracking-wider text-charcoal">Shop</h5>
                            <ul className="space-y-2 text-sm text-midnight/70">
                                <li><a href="/shop/treats" className="hover:text-pistachio transition-colors">Treats</a></li>
                                <li><a href="/shop/concentrates" className="hover:text-pistachio transition-colors">Concentrates</a></li>
                                <li><a href="/shop/all" className="hover:text-pistachio transition-colors">Gifting</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold mb-3 md:mb-4 text-sm uppercase tracking-wider text-charcoal">Company</h5>
                            <ul className="space-y-2 text-sm text-midnight/70">
                                <li><a href="/about" className="hover:text-pistachio transition-colors">About</a></li>
                                <li><a href="/journal" className="hover:text-pistachio transition-colors">Journal</a></li>
                                <li><a href="/locations" className="hover:text-pistachio transition-colors">Locations</a></li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h5 className="font-bold mb-3 md:mb-4 text-sm uppercase tracking-wider text-charcoal">Newsletter</h5>
                            <p className="text-sm text-midnight/60 mb-2">Join the cosmos.</p>
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                className="w-full px-3 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-white/40 focus:outline-none focus:border-pistachio/50 focus:ring-2 focus:ring-pistachio/20 transition-all text-charcoal placeholder:text-midnight/40" 
                            />
                        </div>
                    </div>
                    <p className="text-xs text-midnight/40">© 2026 Space Vakery. All rights reserved.</p>
                </div>
            </footer>
            </div>
        </>
    );
};
