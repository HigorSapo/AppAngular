import { Component } from '@angular/core';
import { IEvento } from './../interfaces/interface.evento';
import { EventosService } from '../services/ventos.service';

@Component({
    moduleId: module.id,
    templateUrl: 'views/cadastro.component.html'
})
export class CadastroComponent {
    //para um evento selecionado
    public eventoSelecionado: IEvento;

    private novoEvento: IEvento;
    //para a inclusão de um novo evento
    public novo() {
        this.novoEvento = { descricao: '', data: '', preco: 0 }
        this.eventoSelecionado = this.novoEvento;
    }
    public incluir(evento: IEvento) {
        this.listaEventos.push(evento);
        alert('Evento incluído com sucesso');
    }

    public selecionar(item: IEvento): void {
        this.eventoSelecionado = item;
    }

    public listaEventos: IEvento[];
    constructor(eventosService: EventosService) {
        this.listaEventos = eventosService.getEventos();
    }

    //definindo um array de eventos
    /*
    public listaEventos: IEvento[] = [
        { descricao:'Bruninha', data: '23/10/2018', preco:100 },
        { descricao: 'Carolzinha', data: '02/05/2020', preco: 140 },
        { descricao: 'Jujuzinha', data: '10/07/2018', preco: 210 },
        { descricao: 'Robertinha', data: '16/01/2019', preco: 400 }
    ];
    */
}
