console.log("***---Asincronia---***")
//Promises(pueden cumplirse o fallar)
//pido el listado de 5mil usuarios
//muestro el menu principal
//muestro foto de perfil
//muestro todo
//muestro listado de 5mil usuarios

const tareaasincrona =()=>{
    let promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
           console.log("Proceso asincrono terminado");
           resolve(); 
        },1300);

    })
    return promise
}
tareaasincrona().then(function(){
    console.log("todo ok")
});
console.log("alegria cocada caballito")
