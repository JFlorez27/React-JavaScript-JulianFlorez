//// crear un algoritmo donde esten listados 10 pacientes de un hospital
// se debe crear una funcion donde se recorran a los pacientes, si uno de sus nombres empieza con c,
// decirle que no puede pasar, si empieza con A decirle que espere, y si empieza con otra letra 
// dejarlo pasar.

let aprendices = ["jazmin","julian","carlos","ana","maria","carolina","carmin","rosa","sara","paola"]
class Aprendiz{
    constructor(nombre,edad,sexo,competencia,aprendices){
        this.nombre = nombre;
        this.edad= edad;
        this.sexo= sexo
        this.competencia=competencia
        this.aprendices=aprendices
    }
    ShowinfoAprendiz(){
        console.log(`Tu nombre es ${this.nombre} tienes ${this.edad} años y eres un(a) ${this.sexo} tu competencia es ${this.competencia}`)
    }
    recorrerA(){
        let i=0
    while(i<10){
        if(this.aprendices[i].startsWith("c")){
            console.log(`el paciente ${this.aprendices[i]} no puede pasar`)
            i++
        }else
            if(this.aprendices[i].startsWith("a")){
                console.log(`el paciente ${this.aprendices[i]} tiene que esperar`) 
                i++ 
            }else{
                console.log(`el paciente  ${this.aprendices[i]} puede pasar`)
                i++
            }
    }

    }
}
let programacion = new Aprendiz("julian",23,"masculino","javaSE",aprendices)
programacion.ShowinfoAprendiz()
programacion.recorrerA()