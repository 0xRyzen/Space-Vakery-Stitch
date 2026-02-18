import { useState } from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { SidebarNav } from '../components/ui/SidebarNav';
import { OrdersTable } from '../components/ui/OrdersTable';
import { FormInput } from '../components/ui/FormInput';
import { FormSelect } from '../components/ui/FormSelect';
import { FormField } from '../components/ui/FormField';
import { GlassButton } from '../components/ui/GlassButton';
import { ProductCard } from '../components/commerce/ProductCard';
import { products } from '../data/products';

export const Profile = () => {
  const [activeTab, setActiveTab] = useState('orders');

  // Sample saved items (first 3 products)
  const savedItems = products.slice(0, 3);

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <GlassCard>
            <h2 className="font-serif text-2xl sm:text-3xl mb-6">Recent Orders</h2>
            <OrdersTable />
          </GlassCard>
        );

      case 'saved':
        return (
          <GlassCard>
            <h2 className="font-serif text-2xl sm:text-3xl mb-6">Saved Items</h2>
            {savedItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedItems.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-black/60">
                <p className="text-lg">No saved items yet</p>
                <p className="text-sm mt-2">
                  Browse our products and save your favorites
                </p>
              </div>
            )}
          </GlassCard>
        );

      case 'addresses':
        return (
          <GlassCard>
            <h2 className="font-serif text-2xl sm:text-3xl mb-6">Addresses</h2>
            <div className="space-y-6">
              {/* Existing addresses */}
              <div className="space-y-4">
                <div className="p-4 bg-white/30 rounded-lg border border-black/10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">Home</h3>
                    <span className="text-xs bg-black/10 px-2 py-1 rounded">
                      Default
                    </span>
                  </div>
                  <p className="text-sm text-black/70 leading-relaxed">
                    123 Moonbeam Lane
                    <br />
                    Lunar City, LC 12345
                    <br />
                    Moon Colony Alpha
                  </p>
                  <div className="flex gap-3 mt-3">
                    <button className="text-sm underline text-black/70 hover:text-black">
                      Edit
                    </button>
                    <button className="text-sm underline text-black/70 hover:text-black">
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* Add new address form */}
              <div className="pt-6 border-t border-black/10">
                <h3 className="font-medium text-lg mb-4">Add New Address</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="First Name">
                      <FormInput placeholder="John" />
                    </FormField>
                    <FormField label="Last Name">
                      <FormInput placeholder="Doe" />
                    </FormField>
                  </div>
                  <FormField label="Street Address">
                    <FormInput placeholder="123 Main St" />
                  </FormField>
                  <FormField label="Apartment, Suite, etc.">
                    <FormInput placeholder="Apt 4B" />
                  </FormField>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FormField label="City">
                      <FormInput placeholder="Lunar City" />
                    </FormField>
                    <FormField label="State/Province">
                      <FormInput placeholder="LC" />
                    </FormField>
                    <FormField label="ZIP/Postal Code">
                      <FormInput placeholder="12345" />
                    </FormField>
                  </div>
                  <FormField label="Country">
                    <FormSelect>
                      <option value="">Select a country</option>
                      <option value="moon">Moon Colony</option>
                      <option value="mars">Mars Settlement</option>
                      <option value="earth">Earth</option>
                    </FormSelect>
                  </FormField>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="default-address"
                      className="rounded"
                    />
                    <label htmlFor="default-address" className="text-sm">
                      Set as default address
                    </label>
                  </div>
                  <GlassButton type="button">Add Address</GlassButton>
                </form>
              </div>
            </div>
          </GlassCard>
        );

      case 'payment':
        return (
          <GlassCard>
            <h2 className="font-serif text-2xl sm:text-3xl mb-6">
              Payment Methods
            </h2>
            <div className="space-y-6">
              {/* Existing payment methods */}
              <div className="space-y-4">
                <div className="p-4 bg-white/30 rounded-lg border border-black/10">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">
                        VISA
                      </div>
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-black/60">Expires 12/27</p>
                      </div>
                    </div>
                    <span className="text-xs bg-black/10 px-2 py-1 rounded">
                      Default
                    </span>
                  </div>
                  <div className="flex gap-3 mt-3">
                    <button className="text-sm underline text-black/70 hover:text-black">
                      Edit
                    </button>
                    <button className="text-sm underline text-black/70 hover:text-black">
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* Add new payment method */}
              <div className="pt-6 border-t border-black/10">
                <h3 className="font-medium text-lg mb-4">
                  Add New Payment Method
                </h3>
                <form className="space-y-4">
                  <FormField label="Card Number">
                    <FormInput placeholder="1234 5678 9012 3456" />
                  </FormField>
                  <FormField label="Cardholder Name">
                    <FormInput placeholder="John Doe" />
                  </FormField>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField label="Expiry Date">
                      <FormInput placeholder="MM/YY" />
                    </FormField>
                    <FormField label="CVV">
                      <FormInput placeholder="123" type="password" />
                    </FormField>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="default-payment"
                      className="rounded"
                    />
                    <label htmlFor="default-payment" className="text-sm">
                      Set as default payment method
                    </label>
                  </div>
                  <GlassButton type="button">Add Payment Method</GlassButton>
                </form>
              </div>
            </div>
          </GlassCard>
        );

      case 'settings':
        return (
          <GlassCard>
            <h2 className="font-serif text-2xl sm:text-3xl mb-6">
              Account Settings
            </h2>
            <form className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="font-medium text-lg mb-4">
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="First Name">
                      <FormInput defaultValue="Jane" />
                    </FormField>
                    <FormField label="Last Name">
                      <FormInput defaultValue="Astronaut" />
                    </FormField>
                  </div>
                  <FormField label="Email">
                    <FormInput defaultValue="jane@spacevakery.com" type="email" />
                  </FormField>
                  <FormField label="Phone">
                    <FormInput defaultValue="+1 (555) 123-4567" />
                  </FormField>
                </div>
              </div>

              {/* Change Password */}
              <div className="pt-6 border-t border-black/10">
                <h3 className="font-medium text-lg mb-4">Change Password</h3>
                <div className="space-y-4">
                  <FormField label="Current Password">
                    <FormInput type="password" />
                  </FormField>
                  <FormField label="New Password">
                    <FormInput type="password" />
                  </FormField>
                  <FormField label="Confirm New Password">
                    <FormInput type="password" />
                  </FormField>
                </div>
              </div>

              {/* Email Preferences */}
              <div className="pt-6 border-t border-black/10">
                <h3 className="font-medium text-lg mb-4">Email Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      defaultChecked
                      className="rounded"
                    />
                    <label htmlFor="newsletter" className="text-sm">
                      Receive newsletter and product updates
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="promotions"
                      defaultChecked
                      className="rounded"
                    />
                    <label htmlFor="promotions" className="text-sm">
                      Receive promotional offers and discounts
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="order-updates"
                      defaultChecked
                      className="rounded"
                    />
                    <label htmlFor="order-updates" className="text-sm">
                      Receive order updates and shipping notifications
                    </label>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="pt-6">
                <GlassButton type="button">Save Changes</GlassButton>
              </div>
            </form>
          </GlassCard>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-8">
        My Account
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-1">
          <SidebarNav activeTab={activeTab} onTabChange={setActiveTab} />
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3">{renderContent()}</main>
      </div>
    </div>
  );
};
