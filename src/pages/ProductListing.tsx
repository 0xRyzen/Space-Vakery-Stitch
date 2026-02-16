import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { ProductCard } from '../components/commerce/ProductCard';
import { FilterPanel } from '../components/commerce/FilterPanel';
import { SortBar } from '../components/commerce/SortBar';

const Header = styled.div`
  padding: 4rem 0;
  text-align: center;
  background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
`;

const Title = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 4rem;
  color: ${props => props.theme.colors.charcoal};
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

const Desc = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.midnight};
  opacity: 0.7;
  max-width: 600px;
  margin: 0 auto;
`;

export const ProductListing = () => {
    const { category } = useParams();
    const [sortBy, setSortBy] = useState('featured');

    const activeCategory = categories.find(c => c.slug === category);

    const baseProducts = useMemo(() => {
        return category === 'all' || !category
            ? products
            : products.filter(p => p.category === category || (category === 'treats' && p.type === 'edible'));
    }, [category]);

    const displayProducts = useMemo(() => {
        let result = [...baseProducts];

        if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
        if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
        if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

        return result;
    }, [baseProducts, sortBy]);

    const title = activeCategory ? activeCategory.name : (category === 'all' ? 'All Products' : category);
    const desc = activeCategory ? activeCategory.description : "Explore our full range of cosmic delights.";

    return (
        <>
            <Header>
                <div className="container mx-auto px-4">
                    <Title>{title}</Title>
                    <Desc>{desc}</Desc>
                </div>
            </Header>

            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <FilterPanel />
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        <SortBar
                            count={displayProducts.length}
                            sortBy={sortBy}
                            onSortChange={setSortBy}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {displayProducts.length === 0 && (
                            <div className="text-center py-20 opacity-50">
                                <p>No products found in this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
