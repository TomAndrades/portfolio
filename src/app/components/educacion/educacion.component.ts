import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/interfaces';
import { DbmanagerService } from 'src/app/services/dbmanager.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estudios: Estudio[] = [];
  constructor(private dbManagerService: DbmanagerService) { }

  ngOnInit(): void {
    this.dbManagerService.getEstudios().subscribe((estudios) => (this.estudios = estudios))
  }

  deleteEstudio(estudio: Estudio) {
    this.dbManagerService.deleteEstudio(estudio).subscribe(() => (
      this.estudios = this.estudios.filter(t => t.id !== estudio.id)
    ))
  }
  toggleAddStudy() {
    console.log("Agregar Estudio");
  }

}
