import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { LuEye, LuMail, LuPhone, LuPlus, LuTrash2, LuUser } from "react-icons/lu";
import FuncionarioModal from "./components/FuncionarioModal";
import FuncionarioDetalheModal from "./components/FuncionarioDetalheModal";

export default function FuncionariosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);

  const funcionarios = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao.silva@email.com',
      phone: '(11) 99999-9999',
      cpf: '123.456.789-00',
      purchases: 2,
      totalSpent: 'R$ 170.000',
      lastPurchase: '15/01/2025'
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria.santos@email.com',
      phone: '(11) 88888-8888',
      cpf: '987.654.321-00',
      purchases: 1,
      totalSpent: 'R$ 92.000',
      lastPurchase: '14/01/2025'
    },
    {
      id: 3,
      name: 'Pedro Costa',
      email: 'pedro.costa@email.com',
      phone: '(11) 77777-7777',
      cpf: '456.789.123-00',
      purchases: 3,
      totalSpent: 'R$ 245.000',
      lastPurchase: '13/01/2025'
    },
    {
      id: 4,
      name: 'Ana Lima',
      email: 'ana.lima@email.com',
      phone: '(11) 66666-6666',
      cpf: '789.123.456-00',
      purchases: 1,
      totalSpent: 'R$ 75.000',
      lastPurchase: '12/01/2025'
    }
  ];

  const handleNewEmployee = () => {
    setFuncionarioSelecionado(null);
    setIsModalOpen(true);
  };

  const handleEditEmployee = (customer: any) => {
    setFuncionarioSelecionado(customer);
    setIsModalOpen(true);
  };

  const handleViewEmployee = (customer: any) => {
    setFuncionarioSelecionado(customer);
    setIsDetailModalOpen(true);
  };

  const handleSaveEmployee = (customerData: any) => {
    console.log('Saving employee:', customerData);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Funcionários</h1>
          <p className="text-gray-600">Gerencie seus funcionários</p>
        </div>
        <button 
          onClick={handleNewEmployee}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors"
        >
          <LuPlus className="w-4 h-4" />
          <span>Novo Funcionário</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Lista de Funcionários</h3>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Buscar funcionários..."
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contato
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CPF
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Compras
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Gasto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {funcionarios.map((funcionario) => (
                <tr key={funcionario.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                          <LuUser className="h-5 w-5 text-gray-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {funcionario.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          Última compra: {funcionario.lastPurchase}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center space-x-1">
                      <LuMail className="w-3 h-3 text-gray-400" />
                      <span>{funcionario.email}</span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center space-x-1">
                      <LuPhone className="w-3 h-3 text-gray-400" />
                      <span>{funcionario.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {funcionario.cpf}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {funcionario.purchases} {funcionario.purchases === 1 ? 'compra' : 'compras'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {funcionario.totalSpent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleViewEmployee(funcionario)}
                        className="text-gray-600 hover:text-gray-900 p-1 rounded"
                      >
                        <LuEye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleEditEmployee(funcionario)}
                        className="text-gray-600 hover:text-gray-900 p-1 rounded"
                      >
                        <BiEdit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 p-1 rounded">
                        <LuTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <FuncionarioModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveEmployee}
        customer={funcionarioSelecionado}
      />

      <FuncionarioDetalheModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        customer={funcionarioSelecionado}
      />
    </div>
  );
}