import { Injectable } from '@angular/core';
import { IEvento } from '../interfaces/interface.evento';

@Injectable()
    export class EventosService {
        public getEventos(): IEvento[] {
            return [
                { descricao:'Bruninha', data: '23/10/2018', preco:100 },
                { descricao: 'Carolzinha', data: '02/05/2020', preco: 140 },
                { descricao: 'Jujuzinha', data: '10/07/2018', preco: 210 },
                { descricao: 'Robertinha', data: '16/01/2019', preco: 400 }
            ];
        }
} 