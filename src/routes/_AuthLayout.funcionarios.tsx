import { createFileRoute } from '@tanstack/react-router'
import FuncionariosPage from '../pages/funcionarios/FuncionarioPage'

export const Route = createFileRoute('/_AuthLayout/funcionarios')({
  component: FuncionariosPage,
})
