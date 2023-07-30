export async function getClientes(){


    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    console.log(respuesta)
    const resultado = respuesta.json()

    return resultado
}