import { LuCalendar, LuCreditCard, LuMail, LuPhone, LuUser, LuX } from "react-icons/lu";

interface CustomerDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  customer: any;
}

export default function FuncionarioDetalheModal({ isOpen, onClose, customer }: CustomerDetailModalProps) {
  if (!isOpen || !customer) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="backdrop-blur-xs backdrop-grayscale backdrop-brightness-80 fixed inset-0 flex items-center justify-center" onClick={onClose}></div>
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl transform transition-all">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <LuUser className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{customer.name}</h3>
                <p className="text-sm text-gray-500">Cliente desde {customer.lastPurchase}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <LuX className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <LuMail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">E-mail</p>
                    <p className="text-sm text-gray-600">{customer.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <LuPhone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Telefone</p>
                    <p className="text-sm text-gray-600">{customer.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <LuCreditCard className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">CPF</p>
                    <p className="text-sm text-gray-600">{customer.cpf}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <LuCalendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Última Compra</p>
                    <p className="text-sm text-gray-600">{customer.lastPurchase}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <span className="text-gray-400 text-xs font-bold">#</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Total de Compras</p>
                    <p className="text-sm text-gray-600">{customer.purchases} {customer.purchases === 1 ? 'compra' : 'compras'}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <span className="text-gray-400 text-xs font-bold">R$</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Total Gasto</p>
                    <p className="text-sm text-gray-600">{customer.totalSpent}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-2xl font-bold text-blue-600">{customer.purchases}</p>
                  <p className="text-sm text-blue-600">Compras</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-2xl font-bold text-green-600">{customer.totalSpent}</p>
                  <p className="text-sm text-green-600">Total Gasto</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-2xl font-bold text-purple-600">A+</p>
                  <p className="text-sm text-purple-600">Classificação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}