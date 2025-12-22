import { createFileRoute } from '@tanstack/react-router'
import VeiculosPage from '../pages/veiculos/VeiculosPage'

export const Route = createFileRoute('/_AuthLayout/veiculos')({
  component: VeiculosPage,
})
