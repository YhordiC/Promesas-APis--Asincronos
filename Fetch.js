const url = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
let Datos;  
const  solicitud = async (url) =>{
    
    let _datos = {
        titulo: "foo",
        principal: "bar", 
        Id:1
      }

   const resp= await fetch(url, {
    method: "POST",
    body: JSON.stringify(_datos),
    headers: {"Content-type": "application/json; charset=UTF-8"}})
    const response = await resp.json();
    return response
}
  
const peticiones = async() =>{
   const peticion = await solicitud('https://jsonplaceholder.typicode.com/posts')
   console.log(peticion)
}
peticiones()


const SolicitarAPis = async () => {

    try{
     const url1 = "https://jsonplaceholder.typicode.com/todos/1";
     const url2 = "https://jsonplaceholder.typicode.com/todos/2";
     const url3 = "https://jsonplaceholder.typicode.com/todos/3";
    
      const promesas = await Promise.all([
        fetch(url1),
        fetch(url2),
        fetch(url3)
      ])

    const promesasDatos = await promesas.map(response => response.json());
    const datosFinales = await Promise.all(promesasDatos);
    return datosFinales;
    } catch(error)
     {console.error(error)}
    
}

const datos = SolicitarAPis().then(datos => console.log(datos))