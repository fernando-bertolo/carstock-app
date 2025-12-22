import { Outlet,  createRoute } from '@tanstack/react-router'
import Sidebar from '../../components/Sidebar'


const AppLayout = () => (
  <div className="flex h-screen">
    <Sidebar />
    <main className="flex-1 p-6 bg-gray-100">
      <Outlet />
    </main>
  </div>
)


export const Route = createRoute({
  component: AppLayout,
  getParentRoute: () => import('../__root'),
  path: '/app',
})
