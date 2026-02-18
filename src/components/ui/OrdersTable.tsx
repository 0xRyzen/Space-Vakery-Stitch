import { GlassButton } from './GlassButton';

interface Order {
  id: string;
  date: string;
  status: 'Delivered' | 'In Transit' | 'Processing' | 'Cancelled';
  total: string;
  items: string[];
}

interface OrdersTableProps {
  orders?: Order[];
}

const defaultOrders: Order[] = [
  {
    id: '#1024',
    date: 'Oct 24, 2025',
    status: 'Delivered',
    total: '$45.00',
    items: ['Croissant', 'Sourdough Loaf'],
  },
  {
    id: '#1021',
    date: 'Sep 12, 2025',
    status: 'Delivered',
    total: '$112.50',
    items: ['Baguette', 'Ciabatta', 'Pain au Chocolat'],
  },
  {
    id: '#1018',
    date: 'Aug 5, 2025',
    status: 'Delivered',
    total: '$28.00',
    items: ['Focaccia'],
  },
];

const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'Delivered':
      return 'bg-green-100 text-green-800';
    case 'In Transit':
      return 'bg-blue-100 text-blue-800';
    case 'Processing':
      return 'bg-yellow-100 text-yellow-800';
    case 'Cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const OrdersTable = ({ orders = defaultOrders }: OrdersTableProps) => {
  const handleReorder = (orderId: string) => {
    console.log('Reordering:', orderId);
    // Reorder logic would go here
  };

  const handleView = (orderId: string) => {
    console.log('Viewing order:', orderId);
    // Navigate to order detail
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="border-b border-black/10 text-xs uppercase tracking-wider text-black/60">
          <tr>
            <th className="pb-3 font-medium">Order #</th>
            <th className="pb-3 font-medium">Date</th>
            <th className="pb-3 font-medium">Status</th>
            <th className="pb-3 font-medium">Total</th>
            <th className="pb-3 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {orders.map((order, index) => (
            <tr
              key={order.id}
              className={`${
                index !== orders.length - 1 ? 'border-b border-black/5' : ''
              }`}
            >
              <td className="py-4 font-medium">{order.id}</td>
              <td className="py-4 text-black/70">{order.date}</td>
              <td className="py-4">
                <span
                  className={`${getStatusColor(
                    order.status
                  )} px-2.5 py-1 rounded-full text-xs font-medium`}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-4 font-medium">{order.total}</td>
              <td className="py-4">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => handleView(order.id)}
                    className="text-black/60 hover:text-black underline text-sm transition-colors"
                  >
                    View
                  </button>
                  <GlassButton
                    onClick={() => handleReorder(order.id)}
                    variant="secondary"
                    size="sm"
                  >
                    Reorder
                  </GlassButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
