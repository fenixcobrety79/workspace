import { objectToCloudFormation } from "aws-cdk-lib"

let mensaje: string = "Hola Mundo"

mensaje = "chanchito feliz"

mensaje = "chao mundo"

console.log(mensaje)
console.log(typeof[])


let extincionDinosaurios = 76_000_000

function chanchitoFeliz(config:any){
    return config
}

let animales: string[] = ['chanchito', 'feliz', 'felipe']


//nums.map(x => x.)//

let tupla:[number, string] = [1, 'chanchito feliz']

///////

enum Talla { Chica = 's', Mediana ='m', Grande = 'l', ExtraGrande = 'xl'}

const variable1 = Talla.Grande
console.log(variable1)


//////
type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id : number,
    nombre?: string,
    talla: Talla,
    direccion: Direccion         
}


const objeto: Persona = {
    id:1,
    nombre: "hola mundo",
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: 'siempre viva',
        pais: 'barcelona'
    }
}

console.log(objeto)



 const fn: (a: number) => string = (edad: number) => {
       if (edad > 17)
        return 'puedes pasar'
    return 'no pudes pasar'
}


function validadEdad (edad: number, msg = 'chanchito feliz'): string {
if ( edad > 17)
    return  `puedes ingresar ${msg}`
return 'no puedes pasar'
}

validadEdad (18)