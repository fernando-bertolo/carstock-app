import { Outlet, createRootRoute, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Sidebar from '../components/Sidebar'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
