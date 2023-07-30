import { getClienteId } from "../data/clientList"
import Formulario from "../components/Formulario"
import { Form, useNavigate, useLoaderData } from "react-router-dom"

export async function loader({params}){
    const cliente = await getClienteId(params.clienteId)
    if(Object.values(cliente).length === 0){
        throw new Response("", {
            status: 400,
            statusText: "No hay resultados"
        })
    }
    console.log(cliente)

    return cliente
}

function EditarCliente() {

    const navigate = useNavigate()
    const cliente = useLoaderData()

  return (
  <>
    <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
    <div className="flex justify-end">
      <button
        className="hover:bg-blue-800 bg-blue-600 text-white py-1 px-3 font-bold uppercase"
        onClick={() => navigate("/")}
      >
        Volver
      </button>
    </div>

    <div className="bg-white rounded-md shadow md:w-3/4 mx-auto px-5 py-10 mt-20">

     {/*  {errores?.length && errores.map((error,i) => (<Error key={i}>{error}</Error>))}
 */}
      <Form
      method="post"
      noValidate
      >
        <Formulario 
        cliente={cliente}/>

        <input
          type="submit"
          className="mt-5 w-full uppercase text-white text-lg p-3 font-bold bg-blue-600 hover:bg-blue-800 transition cursor-pointer"
          value="Registrar"
        />
      </Form>
    </div>
    </>
  )
}

export default EditarCliente