import { BsArrowUpRight } from "react-icons/bs";
import { LuDollarSign, LuShoppingCart, LuUserSearch, LuCar } from "react-icons/lu";
import MetricCard from "./components/MetricCar";


export default function Dashboard() {
    const metrics = [
    {
      title: 'Veículos em Estoque',
      value: '127',
      change: '+12%',
      changeType: 'positive' as const,
      icon: LuCar
    },
    {
      title: 'Vendas no Mês',
      value: '34',
      change: '+8%',
      changeType: 'positive' as const,
      icon: LuShoppingCart
    },
    {
      title: 'Faturamento',
      value: 'R$ 2.450.000',
      change: '+15%',
      changeType: 'positive' as const,
      icon: LuDollarSign
    },
    {
      title: 'Clientes Ativos',
      value: '1.247',
      change: '+23%',
      changeType: 'positive' as const,
      icon: LuUserSearch
    }
  ];

  const recentSales = [
    { id: 1, vehicle: 'Honda Civic 2023', customer: 'João Silva', value: 'R$ 85.000', date: '15/01/2025' },
    { id: 2, vehicle: 'Toyota Corolla 2024', customer: 'Maria Santos', value: 'R$ 92.000', date: '14/01/2025' },
    { id: 3, vehicle: 'Hyundai HB20 2023', customer: 'Pedro Costa', value: 'R$ 68.000', date: '13/01/2025' },
    { id: 4, vehicle: 'Volkswagen Polo 2024', customer: 'Ana Lima', value: 'R$ 75.000', date: '12/01/2025' },
  ];

  const lowStock = [
    { model: 'Honda Civic', quantity: 2, minStock: 5 },
    { model: 'Toyota Corolla', quantity: 1, minStock: 3 },
    { model: 'Nissan Sentra', quantity: 3, minStock: 6 },
  ];
  return (
    <div className="p-6 space-y-6 min-h-full">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Visão geral do seu negócio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Vendas Recentes</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentSales.map((sale) => (
                <div key={sale.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{sale.vehicle}</p>
                    <p className="text-sm text-gray-600">{sale.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{sale.value}</p>
                    <p className="text-sm text-gray-500">{sale.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Estoque Baixo</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {lowStock.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-900">{item.model}</p>
                    <p className="text-sm text-gray-600">Mínimo: {item.minStock} unidades</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {item.quantity} em estoque
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Faturamento dos Últimos 6 Meses</h3>
            <div className="flex items-center space-x-2">
              <BsArrowUpRight className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-600">+15% vs. período anterior</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="h-64 flex items-end justify-between space-x-2">
            {[2.1, 2.3, 1.9, 2.8, 2.5, 2.9].map((value, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gray-900 rounded-t-sm transition-all duration-500 hover:bg-gray-700"
                  style={{ height: `${(value / 3) * 100}%` }}
                ></div>
                <p className="text-xs text-gray-500 mt-2">
                  {['Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan'][index]}
                </p>
                <p className="text-sm font-medium text-gray-900">R$ {value}M</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}