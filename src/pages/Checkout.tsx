import { useState } from 'react';
import styled from 'styled-components';
import { useCartStore } from '../store/cart.store';
import { GlassCard } from '../components/ui/GlassCard';
import { GlassButton } from '../components/ui/GlassButton';
import { FormInput } from '../components/ui/FormInput';
import { FormSelect } from '../components/ui/FormSelect';
import { Stepper } from '../components/ui/Stepper';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding: 2rem 0;
  
  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

interface ShippingFormData {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    zipCode: string;
    shippingMethod: 'standard' | 'express';
}

interface PaymentFormData {
    cardNumber: string;
    expiryDate: string;
    cvc: string;
}

export const Checkout = () => {
    const { items, subtotal, clearCart } = useCartStore();
    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    const [discountCode, setDiscountCode] = useState('');

    const steps = ['Shipping', 'Payment', 'Review'];

    // Form state
    const [shippingForm, setShippingForm] = useState<ShippingFormData>({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        shippingMethod: 'standard'
    });

    const [paymentForm, setPaymentForm] = useState<PaymentFormData>({
        cardNumber: '',
        expiryDate: '',
        cvc: ''
    });

    const total = subtotal();
    const shippingCost = shippingForm.shippingMethod === 'express' ? 25 : (total > 75 ? 0 : 10);
    const tax = total * 0.08;
    const finalTotal = total + tax + shippingCost;

    const handleNext = () => setStep(s => s + 1);
    const handleBack = () => setStep(s => s - 1);

    const handleShippingChange = (field: keyof ShippingFormData, value: string) => {
        setShippingForm(prev => ({ ...prev, [field]: value }));
    };

    const handlePaymentChange = (field: keyof PaymentFormData, value: string) => {
        setPaymentForm(prev => ({ ...prev, [field]: value }));
    };

    const handlePlaceOrder = () => {
        setStep(3); // Completion state
        setTimeout(() => {
            clearCart();
            navigate('/profile');
        }, 3000);
    };

    if (items.length === 0 && step < 3) {
        return (
            <div className="p-20 text-center">
                <h2 className="font-serif text-2xl mb-4">Your cart is empty</h2>
                <GlassButton onClick={() => navigate('/shop/all')}>Go Shopping</GlassButton>
            </div>
        );
    }

    if (step === 3) {
        return (
            <Container className="text-center py-20">
                <div className="flex justify-center mb-6">
                    <CheckCircle size={64} className="text-pistachio" />
                </div>
                <h1 className="font-serif text-4xl mb-4">Order Received!</h1>
                <p className="opacity-70 mb-8 max-w-md mx-auto">Your cosmic treats are being prepared for launch. You'll receive a confirmation email shortly.</p>
                <p className="text-sm opacity-50">Redirecting to your profile...</p>
            </Container>
        );
    }

    return (
        <Container>
            <div className="container mx-auto px-4">
                <h1 className="font-serif text-3xl sm:text-4xl text-center mb-8 sm:mb-12">Checkout</h1>

                <Stepper steps={steps} currentStep={step} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
                    {/* Left: Content */}
                    <div className="lg:col-span-2">
                        {step === 0 && (
                            <GlassCard>
                                <h2 className="font-serif text-xl sm:text-2xl mb-4 sm:mb-6">Shipping Information</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <FormInput 
                                        placeholder="First Name" 
                                        value={shippingForm.firstName}
                                        onChange={(e) => handleShippingChange('firstName', e.target.value)}
                                        required
                                    />
                                    <FormInput 
                                        placeholder="Last Name"
                                        value={shippingForm.lastName}
                                        onChange={(e) => handleShippingChange('lastName', e.target.value)}
                                        required
                                    />
                                    <FormInput 
                                        placeholder="Address" 
                                        className="col-span-1 sm:col-span-2"
                                        value={shippingForm.address}
                                        onChange={(e) => handleShippingChange('address', e.target.value)}
                                        required
                                    />
                                    <FormInput 
                                        placeholder="City"
                                        value={shippingForm.city}
                                        onChange={(e) => handleShippingChange('city', e.target.value)}
                                        required
                                    />
                                    <FormInput 
                                        placeholder="Zip Code"
                                        value={shippingForm.zipCode}
                                        onChange={(e) => handleShippingChange('zipCode', e.target.value)}
                                        required
                                    />
                                </div>
                                <h3 className="font-bold text-xs uppercase tracking-widest mt-6 mb-4 opacity-40">Shipping Method</h3>
                                <FormSelect 
                                    value={shippingForm.shippingMethod}
                                    onChange={(e) => handleShippingChange('shippingMethod', e.target.value as 'standard' | 'express')}
                                >
                                    <option value="standard">Standard Shipping ($10.00 / Free over $75)</option>
                                    <option value="express">Express Relay ($25.00)</option>
                                </FormSelect>
                                <div className="mt-6 sm:mt-8 flex justify-end">
                                    <GlassButton size="lg" onClick={handleNext}>Continue to Payment</GlassButton>
                                </div>
                            </GlassCard>
                        )}

                        {step === 1 && (
                            <GlassCard>
                                <h2 className="font-serif text-xl sm:text-2xl mb-4 sm:mb-6">Secure Payment</h2>
                                <div className="bg-pistachio/5 border border-pistachio/20 p-3 sm:p-4 rounded-lg mb-6 flex items-center gap-3">
                                    <ShieldCheck size={20} className="text-pistachio flex-shrink-0" />
                                    <span className="text-xs opacity-70">All transactions are encrypted and secure.</span>
                                </div>
                                <FormInput 
                                    placeholder="Card Number"
                                    value={paymentForm.cardNumber}
                                    onChange={(e) => handlePaymentChange('cardNumber', e.target.value)}
                                    maxLength={19}
                                    required
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <FormInput 
                                        placeholder="MM/YY"
                                        value={paymentForm.expiryDate}
                                        onChange={(e) => handlePaymentChange('expiryDate', e.target.value)}
                                        maxLength={5}
                                        required
                                    />
                                    <FormInput 
                                        placeholder="CVC"
                                        value={paymentForm.cvc}
                                        onChange={(e) => handlePaymentChange('cvc', e.target.value)}
                                        maxLength={4}
                                        required
                                    />
                                </div>
                                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3">
                                    <GlassButton variant="secondary" onClick={handleBack} className="w-full sm:w-auto">Back</GlassButton>
                                    <GlassButton size="lg" onClick={handleNext} className="w-full sm:w-auto">Review Order</GlassButton>
                                </div>
                            </GlassCard>
                        )}

                        {step === 2 && (
                            <GlassCard>
                                <h2 className="font-serif text-xl sm:text-2xl mb-4 sm:mb-6">Review & Complete</h2>
                                <div className="space-y-6">
                                    <div className="pb-6 border-b border-black/5">
                                        <h3 className="text-xs uppercase font-bold tracking-widest opacity-40 mb-2">Delivery to:</h3>
                                        <p className="text-sm">
                                            {shippingForm.firstName} {shippingForm.lastName}, {shippingForm.address}, {shippingForm.city}, {shippingForm.zipCode}
                                        </p>
                                        <p className="text-sm mt-1 opacity-60">
                                            {shippingForm.shippingMethod === 'express' ? 'Express Relay Shipping' : 'Standard Shipping'}
                                        </p>
                                    </div>
                                    <div className="pb-6 border-b border-black/5">
                                        <h3 className="text-xs uppercase font-bold tracking-widest opacity-40 mb-2">Payment Method:</h3>
                                        <p className="text-sm">Card ending in {paymentForm.cardNumber.slice(-4) || '****'}</p>
                                    </div>
                                </div>
                                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3">
                                    <GlassButton variant="secondary" onClick={handleBack} className="w-full sm:w-auto">Back</GlassButton>
                                    <GlassButton size="lg" onClick={handlePlaceOrder} className="w-full sm:w-auto">Place Order</GlassButton>
                                </div>
                            </GlassCard>
                        )}
                    </div>

                    {/* Right: Summary */}
                    <div>
                        <GlassCard className="lg:sticky lg:top-24">
                            <h2 className="font-serif text-xl sm:text-2xl mb-4 sm:mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-6">
                                {items.map(item => (
                                    <div key={item.id} className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-md overflow-hidden bg-cream">
                                                <img src={item.image} className="w-full h-full object-cover" />
                                            </div>
                                            <span>{item.name} x {item.qty}</span>
                                        </div>
                                        <span>${(item.price * item.qty).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-2 mb-6">
                                <FormInput 
                                    placeholder="Discount Code" 
                                    className="mb-0 text-sm py-2"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                />
                                <GlassButton size="sm" variant="secondary">Apply</GlassButton>
                            </div>

                            <div className="border-t border-black/10 pt-4 space-y-2">
                                <div className="flex justify-between">
                                    <span className="opacity-60">Subtotal</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="opacity-60">Shipping</span>
                                    <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="opacity-60">Tax (8%)</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="border-t border-black/10 pt-4 mt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span className="text-pistachio">${finalTotal.toFixed(2)}</span>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </Container>
    );
};
