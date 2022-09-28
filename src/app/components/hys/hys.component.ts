import { Component, OnInit } from '@angular/core';
import { faAngular, faBootstrap, faCss3, faCss3Alt, faHtml5, faJava, faJs, faPython } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  faJs = faJs;
  faAngular = faAngular;
  faCss3Alt = faCss3Alt;
  faHtml5 = faHtml5;
  faPython = faPython;
  faJava = faJava;
  faBootstrap = faBootstrap;
  constructor() { }

  ngOnInit(): void {
  }

}
