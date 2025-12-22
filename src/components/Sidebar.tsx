import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight, BiHome } from 'react-icons/bi';
import { LuCar, LuUsers } from 'react-icons/lu';
import { useRouterState } from '@tanstack/react-router'

const menuItems = [
  { id: '/dashboard', label: 'Dashboard', icon: BiHome },
  { id: '/veiculos', label: 'Veículos', icon: LuCar },
  { id: '/clientes', label: 'Clientes', icon: LuUsers },
//   { id: 'employees', label: 'Funcionários', icon: UserCheck },
//   { id: 'sales', label: 'Vendas', icon: ShoppingCart },
//   { id: 'expenses', label: 'Despesas', icon: DollarSign },
//   { id: 'management', label: 'Gerenciamento', icon: Database },
//   { id: 'reports', label: 'Relatórios', icon: FileText },
//   { id: 'settings', label: 'Configurações', icon: Settings },
];

export default function Sidebar() {
    const pathname = useRouterState({
      select: (state) => state.location.pathname,
    })

    const [isCollapsed, setIsCollapsed] = useState(false);

    const isActive = (href: string) => {
        return pathname === href;
    };

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`${isCollapsed ? 'w-20' : 'w-64'} bg-gray-900 text-white h-full flex flex-col transition-all duration-300 ease-in-out`}>
            {/* Header */}
            <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                    <div className={`flex items-center space-x-3 ${isCollapsed ? 'justify-center' : ''}`}>
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <LuCar className="w-6 h-6 text-gray-900" />
                        </div>
                        {!isCollapsed && (
                            <div className="transition-opacity duration-200">
                                <h1 className="text-xl font-bold">CarStock</h1>
                                <p className="text-sm text-gray-400">Gestão de Veículos</p>
                            </div>
                        )}
                    </div>
                    
                    {!isCollapsed && (
                        <button
                            onClick={toggleSidebar}
                            className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-gray-400 hover:text-white"
                        >
                            <BiChevronLeft className="w-4 h-4" />
                        </button>
                    )}
                </div>
                
                {/* Botão de expansão quando colapsado */}
                {isCollapsed && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={toggleSidebar}
                            className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-gray-400 hover:text-white"
                        >
                            <BiChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 py-6">
                <ul className="space-y-1 px-3">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(`/${item.id}`);
                        
                        return (
                            <li key={item.id}>
                                <Link
                                    to={item.id}
                                    className={`group relative flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        active
                                            ? 'bg-gray-800 text-white'
                                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                    } ${isCollapsed ? 'justify-center' : 'space-x-3'}`}
                                    title={isCollapsed ? item.label : ''}
                                >
                                    <Icon className="w-5 h-5 transition-colors duration-200" />
                                    
                                    {!isCollapsed && (
                                        <span className="transition-opacity duration-200">{item.label}</span>
                                    )}
                                    
                                    {/* Tooltip for collapsed state */}
                                    {isCollapsed && (
                                        <div className="absolute left-full ml-2 px-3 py-2 bg-gray-700 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                                            {item.label}
                                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-700 rotate-45"></div>
                                        </div>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            
            {/* User Profile */}
            <div className="p-6 border-t border-gray-800">
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} group`}>
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">AD</span>
                    </div>
                    
                    {!isCollapsed && (
                        <div className="flex-1 transition-opacity duration-200">
                            <p className="text-sm font-medium">Admin</p>
                            <p className="text-xs text-gray-400">admin@carstock.com</p>
                        </div>
                    )}
                    
                    {/* Tooltip for collapsed state */}
                    {isCollapsed && (
                        <div className="absolute left-full ml-2 px-3 py-2 bg-gray-700 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                            <div className="font-medium">Admin</div>
                            <div className="text-xs text-gray-300">admin@carstock.com</div>
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-700 rotate-45"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}