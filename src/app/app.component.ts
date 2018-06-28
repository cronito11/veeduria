import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: string;
  listaMenu: string[];
  localidades: string[];
  barrios: string[][];
  verMenu: boolean;
  constructor(){
    this.usuario ='Luis';
    this.listaMenu=["Inicio","Proyectos","Comentarios","Denuncias"];
    this.localidades=["a","b","c"];
    this.barrios=[["a","b","c"],["a","b","c"],["a","b","c"]];
    this.verMenu=false;
  }
  accionMenu(){
    this.verMenu=!this.verMenu;
  }
}
