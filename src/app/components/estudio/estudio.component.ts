import { Component, OnInit } from '@angular/core';
import { DbmanagerService } from '../../services/dbmanager.service';
import { Estudio } from '../../interfaces';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {
  estudios: Estudio[] = [];

  constructor(
    private experienciaService: DbmanagerService
  ) { }

  ngOnInit(): void {
    this.experienciaService.getEstudios().subscribe((estudios) => (this.estudios = estudios))
  }

}
