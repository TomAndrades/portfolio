import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { ESTUDIOS } from 'src/app/mock-estudios';
// import { Estudio } from 'src/app/estudio';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {
  // estudios: Estudios[] = ESTUDIOS;

  constructor() { }

  ngOnInit(): void {
  }

}
