import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  dataServices = inject(DataService);

  todoLosDatos:any[] = [];

  obtenerTodosLosDatos(){
    this.dataServices.obtenerDatos().subscribe((respuesta: any)=>{
      console.log("respuetsa:", respuesta);
    });
  }

  ngOnInit(){
    this.obtenerTodosLosDatos();
  }
}
