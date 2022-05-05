import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  edad: number = 20;
  public title: string | number = 'TODO-test';
  private nombre = 'Julian';
  static valorStatic = 'static';

  saludo = "Mi nombre es " + this.nombre;
  messages = 'Mi nombre es ' + this.nombre;
  templateString = `Mi nombre es ${this.nombre}`;
  ejemplo = `La respuesta es: ${2 + 5}`
  nuevaPersona = new Persona2('Julian', 20, false);

  ngOnInit() {
    // console.log(this.nuevaPersona);
    // console.log('Antes: ', this.nuevaPersona.getNombre);
    // this.nuevaPersona.setNombre = 'Andres'
    // console.log('Después: ', this.nuevaPersona.getNombre);
    // console.log(this.nuevaPersona.saludar());

    /* Objeto literal */
    // const objetoPersona = {
    //   nombre: 'Alejo',
    //   edad: 26,
    //   estaTrabajando: true,
    //   saludar: () => `Mi nombre es ${this.nombre} y tengo ${this.edad} años`
    // }

    // Funcion normal
    function decirNombre(nombre: string): string {
      return nombre;
    }

    const resultado = decirNombre('Alejo');
    console.log(resultado);

    // funcion de flecha
    // const darPermisoDeSalida = (edad: number): string => {
    //   if(edad > 18) {
    //     return 'Si puedes salir ya que eres mayor de edad';
    //   }

    //   return 'No puedes salir ya que eres un niño aun';
    // }

    // const darPermisoDeSalida = (edad: number): string =>
    //   (edad > 18)
    //     ? 'Si puedes salir ya que eres mayor de edad'
    //     : 'No puedes salir ya que eres un niño aun';

    // const respuesta = darPermisoDeSalida(19);
    // console.log(respuesta);

    const parteSuperior = (valorNumerico: 1 | 2): string => {
      return 'Ojos nariz';
    }

    const decirParteCuerpo = (parteCuerpo: 'cabeza' | 'pecho') => {
      const partesCuerpo = {
        cabeza: 'Ojos nariz',
        pecho: 'pectorales',
      };

      return partesCuerpo[parteCuerpo];

      // if(parteCuerpo === 'cabeza') {
      //   parteSuperior();
      // } else if(parteCuerpo === 'pecho') {
      //   return 'pectorales';
      // } else {
      //   return 'No hay coincidencias';
      // }
    }

    console.log(decirParteCuerpo('cabeza'));



    // console.log(objetoPersona);
    // console.log(`Es ambiente de producción? ${environment.production}`)

    // const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // const numerosX2 = numeros.map(numero => numero * 2);
    // const numerosPares = numeros.filter(numero => numero % 2 === 0);
    // const sumatoria = numeros.reduce((acumulador, valorActual) => {
    //   acumulador += valorActual;
    //   return acumulador;
    // });

    // const sonTodosPares = numeros.every(numero => numero % 2 === 0);
    // const hayImpares = numeros.some(numero => numero % 2 !== 0);

    // console.log(`Numeros ${numeros} || numerosX2 ${numerosX2}`);
    // console.log(`Numeros ${numeros} || numerosPares ${numerosPares}`);
    // console.log(`Numeros ${numeros} || sumatoria ${sumatoria}`);
    // console.log(`¿Son todos pares? ${sonTodosPares}`)
    // console.log(`¿Hay algún numero impar? ${hayImpares}`)

    // const objetoPersona = {
    //   nombre: 'Alejo',
    //   edad: 26,
    //   estaTrabajando: true,
    //   saludar: () => `Mi nombre es ${this.nombre} y tengo ${this.edad} años`
    // }

    // const { nombre, edad, estaTrabajando, saludar } = objetoPersona;
    // console.log('nombre', nombre);
    // console.log('edad', edad);
    // console.log('estaTrabajando', estaTrabajando);
    // console.log('saludar', saludar());

    // const arreglo: any = ['Julian', 26, true];
    // const [nombre, edad, estaTrabajando] = arreglo;
    // console.log('nombre', nombre);
    // console.log('edad', edad);
    // console.log('estaTrabajando', estaTrabajando);

    // const validar = (edad: number): string => {
    //   // if (edad > 18) {
    //   //   return 'Eres mayor de edad';
    //   // } else {
    //   //   return 'No eres mayor de edad';
    //   // }

    //   // return (edad > 18) ? 'Eres mayor de edad' : 'No eres mayor de edad';

    // }

    // console.log(validar(15));
  }
}



type NuevoTipo = {
  nombre: string;
  saludo: string;
}

interface nuevaInterfaz {
  nombre: string;
  saludo: string;
}

export class Persona1 {
  public nombre: string;
  public edad: number;
  protected estaTrabajandro: boolean;

  constructor(name: string, edad: number, estaTrabajandro: boolean) {
    this.nombre = name;
    this.edad = edad;
    this.estaTrabajandro = estaTrabajandro;
  }

  get getNombre(): string {
    return this.nombre;
  }

  set setNombre(value: string) {
    this.nombre = value;
  }

  public saludar() {
    return `Mi nombre es ${this.nombre} y tengo ${this.edad} años`
  }
}

class Persona2 {
  constructor(
    public name: string,
    public edad: number,
    protected estaTrabajandro: boolean
  ) {
    this.name = name;
  }

  get getNombre(): string {
    return this.name;
  }

  set setNombre(value: string) {
    this.name = value;
  }

  public saludar() {
    return `Mi nombre es ${this.name} y tengo ${this.edad} años`
  }
}
