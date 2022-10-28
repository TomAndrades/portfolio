import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudio } from '../../interfaces';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {

  @Input() item: Estudio = { id: 1, nombreInstituto: '', fechaInicio: new Date(), fechaFin: new Date(), cursandoActualmente: true, descripcion: '' };
  @Output() onDeleteEstudio: EventEmitter<Estudio> = new EventEmitter()

  constructor(

  ) { }

  ngOnInit(): void {

  }

  onEdit(item: Estudio) {
    console.log(item);
  };

  onDelete(item: Estudio) {
    this.onDeleteEstudio.emit(item);

  }
}
