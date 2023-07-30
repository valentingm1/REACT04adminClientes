export async function getClientes(){


    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = respuesta.json()

    return resultado
}


export async function getClienteId(id){


    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = respuesta.json()

    return resultado
}


export async function postCliente(data){
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}


export async function putCliente(id, data){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}


export async function deleteCliente(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: "DELETE"
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}