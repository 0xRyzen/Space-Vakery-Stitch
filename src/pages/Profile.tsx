import { GlassCard } from '../components/ui/GlassCard';

export const Profile = () => {
    return (
        <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
            <h1 className="font-serif text-3xl sm:text-4xl mb-6 sm:mb-8">My Account</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
                {/* Sidebar */}
                <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                    <div className="font-medium p-2 bg-white/40 rounded cursor-pointer whitespace-nowrap">Orders</div>
                    <div className="opacity-60 p-2 cursor-pointer hover:opacity-100 whitespace-nowrap">Addresses</div>
                    <div className="opacity-60 p-2 cursor-pointer hover:opacity-100 whitespace-nowrap">Account Details</div>
                    <div className="opacity-60 p-2 cursor-pointer hover:opacity-100 whitespace-nowrap">Logout</div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 space-y-6">
                    <GlassCard>
                        <h2 className="font-serif text-xl sm:text-2xl mb-4">Recent Orders</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b border-black/10 text-xs uppercase tracking-wider opacity-60">
                                    <tr>
                                        <th className="pb-2">Order #</th>
                                        <th className="pb-2">Date</th>
                                        <th className="pb-2">Status</th>
                                        <th className="pb-2">Total</th>
                                        <th className="pb-2"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr>
                                        <td className="py-4">#1024</td>
                                        <td className="py-4">Oct 24, 2025</td>
                                        <td className="py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Delivered</span></td>
                                        <td className="py-4">$45.00</td>
                                        <td className="py-4 text-right"><span className="text-pistachio underline cursor-pointer">View</span></td>
                                    </tr>
                                    <tr>
                                        <td className="py-4">#1021</td>
                                        <td className="py-4">Sep 12, 2025</td>
                                        <td className="py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Delivered</span></td>
                                        <td className="py-4">$112.50</td>
                                        <td className="py-4 text-right"><span className="text-pistachio underline cursor-pointer">View</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};
