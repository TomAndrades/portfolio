import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onAgregarExperiencia: EventEmitter<Experiencia> = new EventEmitter();

  nombreEmpresa: string = "";
  fechaInicio: Date = new Date();
  fechaFin: Date = new Date();
  descripcion: string = '';
  esTrabajoActual: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  toggleTrabajoActual() {
    this.esTrabajoActual = !this.esTrabajoActual;
  }

  onSubmit() {
    if (this.nombreEmpresa.length === 0) {
      alert("Por favor agrega un nombre a la empresa!");
      return
    }
    const { nombreEmpresa, fechaInicio, fechaFin, esTrabajoActual, descripcion } = this
    const nuevaExperiencia = { nombreEmpresa, fechaInicio, esTrabajoActual, fechaFin, descripcion }
    this.onAgregarExperiencia.emit(nuevaExperiencia);
  }
}
