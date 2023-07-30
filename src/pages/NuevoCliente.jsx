import { useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

function NuevoCliente() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          className="hover:bg-blue-800 bg-blue-600 text-white py-1 px-3 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div className="bg-white rounded-md shadow md:w-3/4 mx-auto px-5 py-10 mt-20">
        <form>
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full uppercase text-white text-lg p-3 font-bold bg-blue-600 hover:bg-blue-800 transition cursor-pointer"
            value="Registrar"
          />
        </form>
      </div>
    </>
  );
}

export default NuevoCliente;
