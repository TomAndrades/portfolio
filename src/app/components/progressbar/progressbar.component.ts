import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/experiencia';
import { TECNOLOGIAS } from 'src/app/mock-experiencias';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  tecnologias: Tecnologia[] = TECNOLOGIAS;

  constructor() {

  }

  ngOnInit(): void {
  }

}
