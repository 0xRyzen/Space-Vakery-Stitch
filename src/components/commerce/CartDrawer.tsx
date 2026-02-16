import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useCartStore } from '../../store/cart.store';
import { GlassButton } from '../ui/GlassButton';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(28, 31, 42, 0.4); // charcoal dim
  backdrop-filter: blur(4px);
  z-index: 100;
  animation: ${fadeIn} 0.2s ease-out;
`;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  background: rgba(250, 246, 240, 0.9); // cream
  backdrop-filter: blur(20px);
  z-index: 101;
  box-shadow: -10px 0 40px rgba(0,0,0,0.1);
  animation: ${slideIn} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
`;

export const CartDrawer = () => {
    const { isOpen, items, toggleCart, removeItem, updateQty, subtotal } = useCartStore();
    const navigate = useNavigate();

    // Close on ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') toggleCart();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, toggleCart]);

    if (!isOpen) return null;

    return (
        <>
            <Overlay onClick={toggleCart} />
            <Drawer>
                <div className="p-6 border-b border-black/5 flex justify-between items-center">
                    <h2 className="font-serif text-2xl text-charcoal">Your Cart ({items.length})</h2>
                    <button onClick={toggleCart} className="p-2 hover:bg-black/5 rounded-full transition">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {items.length === 0 ? (
                        <div className="text-center text-gray-500 py-12">
                            <p>Your cart is empty.</p>
                            <GlassButton variant="secondary" onClick={toggleCart} className="mt-4">
                                Continue Shopping
                            </GlassButton>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-20 h-20 bg-white/50 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium text-charcoal">{item.name}</h3>
                                            {item.variantName && <p className="text-sm text-gray-500">{item.variantName}</p>}
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-end mt-2">
                                        <div className="flex items-center gap-3 bg-white/40 rounded-full px-2 py-1">
                                            <button
                                                onClick={() => updateQty(item.id, item.qty - 1)}
                                                className="p-1 hover:bg-white rounded-full"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="text-sm w-4 text-center">{item.qty}</span>
                                            <button
                                                onClick={() => updateQty(item.id, item.qty + 1)}
                                                className="p-1 hover:bg-white rounded-full"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <p className="font-medium">${(item.price * item.qty).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-6 bg-white/30 border-t border-white/20">
                        <div className="flex justify-between mb-4 text-lg font-serif">
                            <span>Subtotal</span>
                            <span>${subtotal().toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-6 text-center">Shipping & taxes calculated at checkout</p>
                        <GlassButton
                            className="w-full"
                            onClick={() => { toggleCart(); navigate('/checkout'); }}
                        >
                            Checkout
                        </GlassButton>
                    </div>
                )}
            </Drawer>
        </>
    );
};
