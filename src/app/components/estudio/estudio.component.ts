import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DbmanagerService } from '../../services/dbmanager.service';
import { Estudio } from '../../interfaces';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {

  @Input() estudio: Estudio = { id: 1, nombreInstituto: 'a', fechaInicio: new Date(), fechaFin: new Date(), cursandoActualmente: true, descripcion: '' };
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
