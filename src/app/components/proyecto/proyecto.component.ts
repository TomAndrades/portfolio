import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/experiencia';
import { ExperienciasService } from 'src/app/services/experiencias.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: Proyecto[] = [];
  show = true;
  constructor(private experienciaService: ExperienciasService) { }

  ngOnInit(): void {
    this.experienciaService.getProyectos().subscribe((proyectos) => (
      this.proyectos = proyectos));
  }

}
