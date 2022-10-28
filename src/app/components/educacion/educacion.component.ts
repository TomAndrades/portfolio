import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/interfaces';
import { DbmanagerService } from 'src/app/services/dbmanager.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from "rxjs"
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estudios: Estudio[] = [];
  showAgregarEstudio?: boolean;
  subscription?: Subscription;

  constructor(private dbmanagerService: DbmanagerService, private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAgregarEstudio = value);
  }

  ngOnInit(): void {
    this.dbmanagerService.getEstudios().subscribe((estudios) => (this.estudios = estudios))
  }

  deleteEstudio(estudio: Estudio) {
    this.dbmanagerService.deleteEstudio(estudio).subscribe(() => (
      this.estudios = this.estudios.filter(t => t.id !== estudio.id)
    ))
  }
  toggleAgregarEstudio() {
    this.uiService.toggleAgregarEstudio();
  }

  agregarEstudio(est: Estudio) {
    this.dbmanagerService.addEstudio(est).subscribe((est) =>
      this.estudios.push(est))
  }

}
