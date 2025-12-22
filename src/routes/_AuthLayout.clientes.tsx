import { createFileRoute } from '@tanstack/react-router'
import ClientesPage from '../pages/clientes/ClientePage'

export const Route = createFileRoute('/_AuthLayout/clientes')({
  component: ClientesPage,
})
