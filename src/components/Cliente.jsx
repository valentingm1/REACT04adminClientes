import { useNavigate } from "react-router-dom"

function Cliente({cliente}) {
    const navigate = useNavigate()
    const {nombre, empresa, email, telefono, id} = cliente

  return (
    <tr className="border-b">
        <td className="p-6 space-y-2">
          <p className="text-2xl text-gray-800">{nombre}</p>
          <p>{empresa}</p>
        </td>

        <td className="p-6 mx-4">
        <p className="text-gray-600 "><span className="text-gray-800 font-bold uppercase">EMAIL: </span>{email}</p>
        <p className="text-gray-600"><span className="text-gray-800 font-bold uppercase">TEL: </span>{telefono}</p>
        </td>

        <td className="p-6 flex justify-center gap-4 ">
          <button className="text-blue-600 hover:to-blue-700 uppercase font-bold text-xs transition" type="button"
          onClick={() => navigate(`/clientes/${id}/editar`)}>
            Editar
          </button>
          <button className="text-red-400 hover:to-red-600 uppercase font-bold text-xs transition" type="button">
            Eliminar
          </button>
        </td>
    </tr>
  )
}

export default Cliente