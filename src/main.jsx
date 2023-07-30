import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action as postCliente} from './pages/NuevoCliente'
import Index, {loader as indexLoader } from './pages/Index'
import ErrorPage from './components/ErrorPage.jsx'
import EditarCliente, {loader as editarLoader} from './pages/EditarCliente'


const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout/>,
  children: [
    {
      index: true,
      element: <Index />,
      loader: indexLoader,
      errorElement: <ErrorPage/>
    },
    {
    path: "/clientes/nuevo",
    element: <NuevoCliente/>,
    action: postCliente,
    errorElement: <ErrorPage/>
    },
    {
      path: "/clientes/:clienteId/editar",
      element: <EditarCliente/>,
      loader: editarLoader,
      errorElement: <ErrorPage/>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
