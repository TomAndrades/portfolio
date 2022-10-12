import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/interfaces';
import { DbmanagerService } from 'src/app/services/dbmanager.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: Proyecto[] = [];
  show = true;
  constructor(private dbmanagerService: DbmanagerService) { }

  ngOnInit(): void {
    this.dbmanagerService.getProyectos().subscribe((proyectos) => (
      this.proyectos = proyectos));
  }

}
