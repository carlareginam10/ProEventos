import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable()
export class EventoService {
baseURL = 'https://localhost:5001/api/eventos'
constructor(private http: HttpClient) { }


//retorna pra quem chamar o get evento
//getEventos(){
//  return this.http.get(this.baseURL);
//}

//refazendo com observale
public getEventos(): Observable<Evento[]>{
  return this.http.get<Evento[]>(this.baseURL);
}

public getEventosByTema(tema: string): Observable<Evento[]>{
  return this.http.get<Evento[]>(`${this.baseURL}/${tema}/tema`);
}

public getEventosById(id: number): Observable<Evento>{
  return this.http.get<Evento>(`${this.baseURL}/${id}`);
}


}
