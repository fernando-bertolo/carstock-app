import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})


// const notFoundRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: '*',
//   component: NotFound,
// })

// rootRoute.addChildren([notFoundRoute])
