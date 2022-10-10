import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from '../../services/experiencias.service';
import { Estudio } from '../../experiencia';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {
  estudios: Estudio[] = [];

  constructor(
    private experienciaService: ExperienciasService
  ) { }

  ngOnInit(): void {
    this.experienciaService.getEstudios().subscribe((estudios) => (this.estudios = estudios))
  }

}
