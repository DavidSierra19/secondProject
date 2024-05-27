import { Injectable, inject } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  hoja: string = "1";
  API_URL: string = "https://dragonball-api.com/api/characters?page="+this.hoja+"&limit=10"
  
  httpClient = inject(HttpClient);

  obtenerDatos(){
    return this.httpClient.get(this.API_URL)
  }
}
