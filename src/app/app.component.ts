import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {

      this.peliculasEnCines = [{
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 1400.99
      },
      {
        titulo: 'Michi-Man',
        fechaLanzamiento: new Date(),
        precio: 2000.00
      },
      {
        titulo: 'Iron-Man',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 865.00
      }]
    }, 1000);
  }
  title = 'frontend como quiero eh';

  peliculasEnCines;

  peliculasProximosEstrenos = [{
    titulo: 'Coco',
    fechaLanzamiento: new Date(),
    precio: 1400.99
  },
  {
    titulo: 'Luna',
    fechaLanzamiento: new Date(),
    precio: 2000.00
  },
  {
    titulo: 'Varyan',
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 865.00
  },
  {
    titulo: 'KiroBeagles',
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 865.00
  }]


  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}
