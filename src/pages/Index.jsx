import { useLoaderData } from "react-router-dom"
import Cliente from "../components/Cliente.jsx";
import { getClientes } from "../data/clientList.jsx"

export function loader(){
  const clientes = getClientes()
  console.log(clientes)
  return clientes 
}

function Index() {
  const data = useLoaderData();


  return (
    <>
    <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
    <p className='mt-3'>Administración de Clientes</p>
    {data.length ? (<table className="w-full bg-white shadow mt-5 table-auto">
      <thead className="bg-blue-800 text-white">
        <tr>
          <th className="p-2">Cliente</th>
          <th className="p-2">Contacto</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
        <tbody>
          {data.map( cliente => (
          <Cliente
          cliente={cliente}
          key={cliente.id}
          />
        ))}
        </tbody>
      
    </table>) : (<p className="text-center mt-10">No se añadieron clientes</p>)

    }
    </>
  )
}

export default Index