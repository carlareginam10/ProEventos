
import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/Evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: Evento[] = [];
  public eventosfiltrados: any = [];
  private _filtroLista: string = '';

  public get filtroLista (): string {
    return this._filtroLista;
  }

  public set filtroLista (value: string){
    this._filtroLista = value;
    this.eventosfiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista):this.eventos;

  }

  filtrarEventos (filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      ( evento: { tema: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor)!== -1
    )
  }

  //chama o serviço
  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.getEventos();
  }

  public getEventos(): void {
    this.eventoService.getEventos().subscribe(
      (_eventos: Evento[] )=> {
        this.eventos = _eventos;
        this.eventosfiltrados = this.eventos;
      },
      error => console.log(error)
    );

  }

}
