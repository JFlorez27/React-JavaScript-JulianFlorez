console.log("hola mundo");
        alert("soy una alerta");

        //var=  ¡ya no se usa!
        //let = la nueva forma de declarar variables
        // en js no se declaran tipos de datos, el los interpreta
        //SCOPE: el alcance que una variable tendra en el codigo
        //ejemplo: el escope de cada funcion

        //SCOPE1
        var test = "hola2"
        let primera  = 23;
        let segunda  = 47;
        let tres = "hola";
        const estable = "no cambio";


        let resultado = primera+segunda;

        console.log(resultado);
        console.log(tres);
        function salir(){
            //SCOPE2
            let on = true;
            console.log(on+test)
        }
        salir();
        console.log(test);
        // console.log(on);

        // diferencia entre let y cocnt
        let factura2 = 55231 // guardando un espacio en memoria, que puede cambiar en el futuro; se pueden modificar
        const factura = 55231;

        // factura = 32
        factura2  = 28
        console.log("let:", factura2)
        console.log("const:",factura)

        if(factura2){
            console.log("si hay una factura");
        }else{ 
            if(factura2==23){
            console.log("no hay factura");
            }else{
                console.log("pailas")
            }
        }

        // (condicion) ? si valor verdadera : valor falso
        let res = factura2 ? "si hay una factura" : "no hay factura";
        console.log(res);

        //ciclos repetitivos(for,while, do_while)
        for(let i=0;i<=10;i++){
            console.log(i);
        }

        let i=0;
        while(i<=10){
            console.log(i);
            i++;
        }

        i=0;
        do {
            console.log(i);
            i++;
        } while (i<=10);

        console.log("manejo de strings");
        let saludo = "Hola Clase !";

        
        console.log( saludo.indexOf("x"));
        console.log( saludo.indexOf("a"));
        console.log( saludo.indexOf("Cl"));
        // encontrar un caracter, si no lo encuentra pone -1, si lo encuentra pone el numero de ubicacion

        // string inicia o terminal
        console.log(saludo.startsWith("H"));
        // si inicia con esa letra sale true sino sale false
        console.log(saludo.endsWith("!"));
        // si termina con ese caracter sale true sino sale false
        console.log(saludo.includes("s"));
        // si el string incluye cieto caracter o palabra saldra tru or false

        console.log("operadores");
        //operados AND(&&) Devuelve a si a y b son verdaderos, sino b 
        console.log(45 && false);
        console.log(50 && "10");
        // operador OR (||) Devuelve a (si es verdadero), o sino, b
        console.log(false||  "verdadero")
        console.log("10" || 10);
        
        let isCorrect = true;
        const doTask  = () =>  "OK!";
        console.log(isCorrect && doTask);

        console.log("arreglos y objetos")
        let instructores  = ["juan","Jesu","Carla"];
        console.log(instructores[2]);

        const tecnico = {
            name: "programacion de softwarre",
            time: "1 anio",
            practicas: true
        }
        console.log(tecnico.name)
        console.log("---- Interpolacion de Variables ---")

        const data = `soy un texto combinado con variables combinado con variables ${tecnico.practicas} como esta y esta ${instructores}`;
        console.log(data);

        //FUNCION = una función es como un mini-programa que puedes escribir y usar en tu código principal. 
        // Sirve para hacer una tarea específica y puedes llamarla varias veces en diferentes partes del programa
        console.log("***----FUNCIONES----***")
        function sumar(x,y){
            let suma = x+y;
            console.log("suma:"+ suma);
        }

        //funcion de flechas
        const salud = (instruc) => {
            let i=0
            while(i<=instruc.length){console.log(`Hola profesor ${instruc[i]}`);
                i++;
            }
            
        }
        sumar(5,22);
        salud(instructores);

        console.log("")

        //Rest: Junta los elementos en un arreglo
        function saludarRest(saludo, ...nombres){
            for(i in nombres){
                console.log(`${saludo} ${nombres[i]}`);
            }

        }
        saludarRest("hola","fernando","Javier","Maritza","Teo");
        //spread: Esparce los. elementos como si fueran enviados  en forma separada
        function SaludarSpread(saludo, ...nombres){
            console.log(`${saludo} ${nombres}.`);

        }
        let personas = ["Maria","Juan","Pedro","Julian"];
        saludarSpread =("hola",personas);


        let partes =["piernas","brazos"];
        let cuerpo =["cabeza","cuello",...partes,"pies","cabello"]
        console.log(cuerpo)

        //clases: Es una plantilla,define las propiedades y metodos de un objetO.
        // se pueden utilizar por medio de instancia.
        // cada clase una tiene sus propiedades y metodos
        // todas las clases  tiene un constructor donde se definen datos iniciales.

        console.log("***----clases---***")
        class Persona{ 
            constructor(nombre,edad,sexo){
                this.nombre = nombre;
                this.edad = edad;
                this.sexo = sexo;
            }
        
        
        getAllInfo(){
            console.log(`Tu nombre es ${this.nombre} tienes ${this.edad} años  y eres un(a) ${this.sexo}`)
        }
    }

    let juanes = new Persona("juanes",47,"Masculino")
    juanes.getName()
    juanes.getAllInfo()

    class Aprendiz extends Persona{
        constructor(nombre,edad,sexo,programa,competencia){
            super(nombre,edad,sexo)
            this.programa = programa
            this.competencia = competencia
    }
    getAprendiz(){
        console.log(`Te llamas ${this.nombre} tienes ${this.edad} años eres un(a) ${this.sexo}, tu programa es ${this.programa} y estas dando ${this.competencia}`)
    }
}
    Julian= new Aprendiz("julian",19,"Masculino","motores","mantenimiento de vehiculos pesados");
    Julian.getAprendiz()
