import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente from './pages/NuevoCliente'
import Index, {loader as indexLoader } from './pages/Index'

const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout/>,
  children: [
    {
      index: true,
      element: <Index />,
      loader: indexLoader
    },
    {
    path: "/clientes/nuevo",
    element: <NuevoCliente/>,
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
