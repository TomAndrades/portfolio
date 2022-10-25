import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/interfaces';
import { DbmanagerService } from 'src/app/services/dbmanager.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias: Experiencia[] = [];

  constructor(private dbmanagerService: DbmanagerService) { }

  ngOnInit(): void {
    //Get de las experiencias
    this.dbmanagerService.getExperiencias().subscribe((experiencias) => (
      this.experiencias = experiencias));
  }

  //Delete de las experiencias
  deleteExperiencia(experiencia: Experiencia) {
    this.dbmanagerService.deleteExperiencia(experiencia).subscribe(() => (
      this.experiencias = this.experiencias.filter(t => t.id !== experiencia.id)
    ))
  }

  toggleAddExperience() {
    console.log("Agregar experiencia");
  }

  agregarExperiencia(exp: Experiencia) {
    this.dbmanagerService.addExperiencia(exp).subscribe((exp) =>
      this.experiencias.push(exp))
  }

}
