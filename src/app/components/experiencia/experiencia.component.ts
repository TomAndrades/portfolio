import { Component, OnInit } from '@angular/core';
import { EXPERIENCIAS } from 'src/app/mock-experiencias';
import { Experiencia } from 'src/app/experiencia';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = EXPERIENCIAS;

  constructor() { }

  ngOnInit(): void {
  }

}
