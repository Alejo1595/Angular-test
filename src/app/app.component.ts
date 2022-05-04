import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  edad: number = 20;
  public title: string = 'TODO-test';
  private nombre = 'Julian';
  static valorStatic = 'static';

  messages = 'Mi nombre es ' + this.nombre;
  templateString = `Mi nombre es ${this.nombre}`;

  nuevaPersona = new Persona1('Julian', 20, false);

  ngOnInit() {
    // console.log(this.nuevaPersona);
    // console.log(this.nuevaPersona.saludar());

    // const objetoPersona = {
    //   nombre: 'Alejo',
    //   edad: 26,
    //   estaTrabajando: true,
    //   saludar: () => `Mi nombre es ${this.nombre} y tengo ${this.edad} años`
    // }

    // console.log(objetoPersona);

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

class Persona1 {
  public nombre: string;
  public edad: number;
  protected estaTrabajandro: boolean;

  constructor(nombre: string, edad: number, estaTrabajandro: boolean) {
    this.nombre = nombre;
    this.edad = edad;
    this.estaTrabajandro = estaTrabajandro;
  }

  public saludar() {
    return `Mi nombre es ${this.nombre} y tengo ${this.edad} años`
  }
}

class Persona2 {
  constructor(
    public nombre: string,
    public edad: number,
    protected estaTrabajandro: boolean
  ) { }

  public saludar() {
    return `Mi nombre es ${this.nombre} y tengo ${this.edad} años`
  }
}
