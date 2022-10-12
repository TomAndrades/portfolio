import { Component, OnInit } from '@angular/core';
import { DbmanagerService } from '../../services/dbmanager.service';
import { Experiencia } from '../../interfaces';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];

  constructor(
    private dbmanagerService: DbmanagerService
  ) { }

  ngOnInit(): void {
    this.dbmanagerService.getExperiencias().subscribe((experiencias) => (
      this.experiencias = experiencias));
  }

}
