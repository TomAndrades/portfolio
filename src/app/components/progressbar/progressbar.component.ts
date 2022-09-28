import { Component, OnInit } from '@angular/core';
import { faAngular, faBootstrap, faCss3Alt, faHtml5, faJava, faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { Tecnologia } from 'src/app/experiencia';
import { TECNOLOGIAS } from 'src/app/mock-experiencias';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  fa = { 'js': faJs, 'angular': faAngular, 'css': faCss3Alt, 'html': faHtml5, 'python': faPython, 'java': faJava, 'bootstrap': faBootstrap }

  tecnologias: Tecnologia[] = TECNOLOGIAS;

  constructor() {

  }

  ngOnInit(): void {
  }

}
