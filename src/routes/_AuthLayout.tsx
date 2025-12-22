import { Outlet, createFileRoute } from '@tanstack/react-router'
import Sidebar from '../components/Sidebar'


const AppLayout = () => (
  <div className="flex h-screen">
    <Sidebar />
    <main className="flex-1 p-6 bg-gray-100">
      <Outlet />
    </main>
  </div>
)


export const Route = createFileRoute('/_AuthLayout')({
  component: AppLayout,
})
