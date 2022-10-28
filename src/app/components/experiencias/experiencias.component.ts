import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/interfaces';
import { DbmanagerService } from 'src/app/services/dbmanager.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from "rxjs"

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experiencias: Experiencia[] = [];
  showAgregarExperiencia: boolean = false;
  subscription?: Subscription;

  constructor(private dbmanagerService: DbmanagerService,
    private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAgregarExperiencia = value);
  }

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

  toggleAgregarExperiencia() {
    this.uiService.toggleAgregarExperiencia();
  }

  agregarExperiencia(exp: Experiencia) {
    this.dbmanagerService.addExperiencia(exp).subscribe((exp) =>
      this.experiencias.push(exp))
  }

}
