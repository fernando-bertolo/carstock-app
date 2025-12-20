import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { LuCar, LuEye, LuPlus, LuTrash2 } from 'react-icons/lu';
import VehicleModal from './components/modals/VeiculoModal';
import VehicleDetailModal from './components/modals/VeiculoDetailModal';

export default function VeiculosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicles = [
    {
      id: 1,
      brand: 'Honda',
      model: 'Civic',
      version: 'Touring',
      year: 2023,
      color: 'Preto',
      price: 'R$ 85.000',
      status: 'Disponível',
      chassi: '9BWHE21JX24060831',
      plate: 'ABC-1234',
      fuel: 'Flex',
      transmission: 'CVT',
      doors: 4,
      mileage: 15000,
      description: 'Veículo em excelente estado de conservação, com todos os opcionais de fábrica.'
    },
    {
      id: 2,
      brand: 'Toyota',
      model: 'Corolla',
      version: 'XEi',
      year: 2024,
      color: 'Prata',
      price: 'R$ 92.000',
      status: 'Reservado',
      chassi: '9BWHE21JX24060832',
      plate: 'DEF-5678',
      fuel: 'Flex',
      transmission: 'CVT',
      doors: 4,
      mileage: 8500,
      description: 'Veículo zero quilômetro, com garantia de fábrica.'
    },
    {
      id: 3,
      brand: 'Hyundai',
      model: 'HB20',
      version: 'Comfort Plus',
      year: 2023,
      color: 'Branco',
      price: 'R$ 68.000',
      status: 'Vendido',
      chassi: '9BWHE21JX24060833',
      plate: 'GHI-9012',
      fuel: 'Flex',
      transmission: 'Manual',
      doors: 5,
      mileage: 22000,
      description: 'Veículo com baixa quilometragem e revisões em dia.'
    },
    {
      id: 4,
      brand: 'Volkswagen',
      model: 'Polo',
      version: 'Highline',
      year: 2024,
      color: 'Azul',
      price: 'R$ 75.000',
      status: 'Disponível',
      chassi: '9BWHE21JX24060834',
      plate: 'JKL-3456',
      fuel: 'Flex',
      transmission: 'Automático',
      doors: 5,
      mileage: 5000,
      description: 'Veículo seminovo com poucos quilômetros rodados.'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disponível':
        return 'bg-green-100 text-green-800';
      case 'Reservado':
        return 'bg-yellow-100 text-yellow-800';
      case 'Vendido':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleNewVehicle = () => {
    setSelectedVehicle(null);
    setIsModalOpen(true);
  };

  const handleEditVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const handleViewVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsDetailModalOpen(true);
  };

  const handleSaveVehicle = (vehicleData: any) => {
    console.log('Saving vehicle:', vehicleData);
    // Here you would typically save to your backend
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Veículos</h1>
          <p className="text-gray-600">Gerencie o catálogo de veículos</p>
        </div>
        <button 
          onClick={handleNewVehicle}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors"
        >
          <LuPlus className="w-4 h-4" />
          <span>Novo Veículo</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Lista de Veículos</h3>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Buscar veículos..."
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                <option>Todos os status</option>
                <option>Disponível</option>
                <option>Reservado</option>
                <option>Vendido</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Veículo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chassi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Preço
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                          <LuCar className="h-5 w-5 text-gray-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {vehicle.brand} {vehicle.model}
                        </div>
                        <div className="text-sm text-gray-500">
                          {vehicle.version} • {vehicle.year} • {vehicle.color}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {vehicle.chassi}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {vehicle.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(vehicle.status)}`}>
                      {vehicle.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleViewVehicle(vehicle)}
                        className="text-gray-600 hover:text-gray-900 p-1 rounded"
                      >
                        <LuEye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleEditVehicle(vehicle)}
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

      <VehicleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveVehicle}
        vehicle={selectedVehicle}
      />

      <VehicleDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        vehicle={selectedVehicle}
      />
    </div>
  );
}