import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from '../../services/experiencias.service';
import { Experiencia } from '../../experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];

  constructor(
    private experienciaService: ExperienciasService
  ) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencias().subscribe((experiencias) => (
      this.experiencias = experiencias));
  }

}
