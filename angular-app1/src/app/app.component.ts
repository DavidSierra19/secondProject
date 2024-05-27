import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  error: string = "Error DATOS";
  numero: number = 1;
  numeroString: string = this.numero.toString();
  dataServices = inject(DataService);
  fullDescripcion: boolean = false;
  pocoDescripcion: boolean =true;
  datos: any[] = [];

  obtenerTodosLosDatos(){
    this.dataServices.obtenerDatos().subscribe((respuesta: any)=>{
      if (respuesta.items){
        this.datos = respuesta.items;
      } else {
        console.log("ocurrio un error");
      }
    });
  }
  leerMas(){
    this.fullDescripcion = !this.fullDescripcion;
    this.pocoDescripcion = !this.pocoDescripcion;
  }
  hojaAnterior(){
    if(this.numero === 1){
      this.numero = 6;
      return this.numero;
  } else{
    this.numero = this.numero - 1;
    return this.numero;
  }
  }
  hojaSiguiente(){
    if(this.numero === 6){
      this.numero = 1;
      return this.numero;
  } else{
    this.numero = this.numero + 1;
    return this.numero;
  }
  }
  ngOnInit(){
    this.obtenerTodosLosDatos();
  }
}
