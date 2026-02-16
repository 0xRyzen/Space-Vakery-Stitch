import { Routes, Route } from 'react-router-dom';
import { Home, ProductListing, ProductDetail, Checkout, Profile, About, Journal, Locations } from '../pages';
import { Layout } from '../components/layout/Layout';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="shop/:category" element={<ProductListing />} />
                <Route path="product/:slug" element={<ProductDetail />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="profile" element={<Profile />} />
                <Route path="about" element={<About />} />
                <Route path="journal" element={<Journal />} />
                <Route path="locations" element={<Locations />} />
            </Route>
        </Routes>
    );
};
