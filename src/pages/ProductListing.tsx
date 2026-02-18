import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { ProductCard } from '../components/commerce/ProductCard';
import { FilterPanel } from '../components/commerce/FilterPanel';
import { SortBar } from '../components/commerce/SortBar';

const Header = styled.div`
  padding: 2rem 0 4rem;
  text-align: center;
  background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
  
  @media (max-width: 768px) {
    padding: 1.5rem 0 3rem;
  }
`;

const Title = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 8vw, 4rem);
  color: ${props => props.theme.colors.charcoal};
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

const Desc = styled.p`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: ${props => props.theme.colors.midnight};
  opacity: 0.7;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const ProductListing = () => {
    const { category } = useParams();
    const [sortBy, setSortBy] = useState('featured');
    const [showFilters, setShowFilters] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

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
        if (sortBy === 'rating') result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        if (sortBy === 'new') result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        if (sortBy === 'potency') result.sort((a, b) => (b.potencyLevel || 0) - (a.potencyLevel || 0));

        return result;
    }, [baseProducts, sortBy]);

    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return displayProducts.slice(startIndex, startIndex + itemsPerPage);
    }, [displayProducts, currentPage]);

    const totalPages = Math.ceil(displayProducts.length / itemsPerPage);

    const title = activeCategory ? activeCategory.name : (category === 'all' ? 'All Products' : category);
    const desc = activeCategory ? activeCategory.description : "Explore our full range of cosmic delights.";

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <>
            <Header>
                <div className="container mx-auto px-4">
                    <Title>{title}</Title>
                    <Desc>{desc}</Desc>
                </div>
            </Header>

            <div className="container mx-auto px-4 pb-20">
                {/* Mobile Filter Toggle */}
                <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden mb-4 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-white/40 text-sm font-medium"
                >
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
                
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className={`w-full lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
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
                            {paginatedProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {paginatedProducts.length === 0 && (
                            <div className="text-center py-20 opacity-50">
                                <p>No products found in this category.</p>
                            </div>
                        )}

                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button 
                                onClick={handlePrevPage} 
                                disabled={currentPage === 1} 
                                className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-white/40 text-sm font-medium disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <span>Page {currentPage} of {totalPages}</span>
                            <button 
                                onClick={handleNextPage} 
                                disabled={currentPage === totalPages} 
                                className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-white/40 text-sm font-medium disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
