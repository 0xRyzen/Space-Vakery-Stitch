import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header';
import { UtilityBar } from './UtilityBar';
import { CartDrawer } from '../commerce/CartDrawer';
import { Starfield } from '../ui/Starfield';

const Main = styled.main`
  min-height: 80vh;
`;

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Starfield />
            <UtilityBar />
            <Header />
            <CartDrawer />

            <Main>
                <Outlet />
            </Main>

            <footer className="py-12 bg-gray-900/5 backdrop-blur-sm text-center mt-auto border-t border-white/10">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-left">
                        <div>
                            <h4 className="font-serif text-xl mb-4">Space Vakery</h4>
                            <p className="text-sm opacity-60">Crafted edibles from a softer cosmos.</p>
                        </div>
                        <div>
                            <h5 className="font-bold mb-4 text-sm uppercase tracking-wider">Shop</h5>
                            <ul className="space-y-2 text-sm opacity-70">
                                <li><a href="#">Treats</a></li>
                                <li><a href="#">Concentrates</a></li>
                                <li><a href="#">Gifting</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold mb-4 text-sm uppercase tracking-wider">Company</h5>
                            <ul className="space-y-2 text-sm opacity-70">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Journal</a></li>
                                <li><a href="#">Locations</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold mb-4 text-sm uppercase tracking-wider">Newsletter</h5>
                            <p className="text-sm opacity-60 mb-2">Join the cosmos.</p>
                            <input type="email" placeholder="Email address" className="w-full px-3 py-2 rounded bg-white/50 border border-white/30 focus:outline-none" />
                        </div>
                    </div>
                    <p className="text-xs opacity-40">© 2026 Space Vakery. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};
