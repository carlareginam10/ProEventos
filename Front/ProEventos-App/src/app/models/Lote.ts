import { Evento } from "./Evento";
export interface Lotes {
          id:number;
          nome:string;
          preço:string;
          dataInicio:Date;
          dataFim:Date;
          quantidade:number;
          eventoId:number;
          evento:Evento;
}
