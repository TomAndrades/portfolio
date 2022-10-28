import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Experiencia, Estudio } from 'src/app/interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() trabajo?: boolean;
  @Output() onAgregarExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  @Output() onAgregarEstudio: EventEmitter<Estudio> = new EventEmitter();

  // trabajo = true;
  //Atributos especificos
  nombreEmpresa: string = "";
  esTrabajoActual: boolean = false;
  showAgregarExperiencia: boolean = false;

  nombreInstituto: string = "";
  cursandoActualmente: boolean = false;
  showAgregarEstudio: boolean = false;

  //Atributos comunes
  subscription?: Subscription;
  fechaInicio: Date = new Date();
  fechaFin: Date = new Date();
  descripcion: string = '';

  constructor(
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAgregarExperiencia = value);
  }

  ngOnInit(): void {

  }

  toggleTrabajoActual() {
    this.esTrabajoActual = !this.esTrabajoActual;
  }

  toggleActual(s: string) {
    if (s === 'trabajo') {
      this.esTrabajoActual = !this.esTrabajoActual;
    }
    else if (s === 'estudio') {
      this.cursandoActualmente = !this.cursandoActualmente;
    }
  }

  onSubmit() {
    if (this.nombreEmpresa.length === 0) {
      alert("Por favor agrega un nombre a la empresa!");
      return
    }
    if (this.fechaFin < this.fechaInicio) {
      alert("Ingrese una fecha de fin mayor a la de inicio");
      return
    }
    const { nombreEmpresa, fechaInicio, fechaFin, esTrabajoActual, descripcion } = this
    const nuevaExperiencia = { nombreEmpresa, fechaInicio, esTrabajoActual, fechaFin, descripcion }
    this.onAgregarExperiencia.emit(nuevaExperiencia);
  }

  onSubmitType(v: number) {
    if (this.fechaFin < this.fechaInicio) {
      alert("Ingrese una fecha de fin mayor a la de inicio");
      return
    }
    // 0 - trabajo ; 1 - estudio
    const tipo = [this.nombreEmpresa, this.nombreInstituto];

    if (tipo[v].length === 0) {
      alert("Por favor agrega un nombre en el formulario");
      return
    }

    if (v === 0) {
      const { nombreEmpresa, fechaInicio, fechaFin, esTrabajoActual, descripcion } = this
      const nuevo = { nombreEmpresa, fechaInicio, esTrabajoActual, fechaFin, descripcion }
      this.onAgregarExperiencia.emit(nuevo)
    }
    else if (v === 1) {
      const { nombreInstituto, fechaInicio, fechaFin, cursandoActualmente, descripcion } = this
      const nuevo = { nombreInstituto, fechaInicio, cursandoActualmente, fechaFin, descripcion }
      this.onAgregarEstudio.emit(nuevo)
    }



  }
}

