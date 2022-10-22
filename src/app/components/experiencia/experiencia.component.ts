import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from '../../interfaces';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  @Input() item: Experiencia = { id: 1, nombreEmpresa: 'a', fechaInicio: new Date(), fechaFin: new Date(), esTrabajoActual: true, descripcion: '' };
  @Output() onDeleteExperiencia: EventEmitter<Experiencia> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(item: Experiencia) {
    console.log(item);
  };

  onDelete(item: Experiencia) {
    this.onDeleteExperiencia.emit(item);
  }


}
