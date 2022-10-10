import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/experiencia';
import { ExperienciasService } from 'src/app/services/experiencias.service';
@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  tecnologias: Tecnologia[] = [];

  constructor(private experienciaService: ExperienciasService) {

  }

  ngOnInit(): void {
    this.experienciaService.getTecnologias().subscribe((tecnologias) => (
      this.tecnologias = tecnologias))
  }

}
