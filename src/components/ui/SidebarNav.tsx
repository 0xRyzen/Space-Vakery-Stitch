import { GlassPanel } from './GlassPanel';

interface SidebarNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const SidebarNav = ({ activeTab, onTabChange }: SidebarNavProps) => {
  const navItems = [
    { id: 'orders', label: 'Orders' },
    { id: 'saved', label: 'Saved items' },
    { id: 'addresses', label: 'Addresses' },
    { id: 'payment', label: 'Payment methods' },
    { id: 'settings', label: 'Account settings' },
  ];

  return (
    <GlassPanel className="h-fit sticky top-24">
      <nav className="flex flex-col space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`
              text-left px-4 py-3 rounded-lg transition-all duration-200
              ${
                activeTab === item.id
                  ? 'bg-white/50 font-medium text-black'
                  : 'text-black/70 hover:bg-white/30 hover:text-black'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </GlassPanel>
  );
};
