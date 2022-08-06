import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  name: string = "Tomás Andrades";
  profile: string = "https://www.incluyeme.com/wp-content/uploads/2021/12/portrait-square-03.jpg";
  portrait: string = "https://i.pinimg.com/originals/09/01/43/0901434384290893f3f67b1065855d60.gif";
  constructor() { }

  ngOnInit(): void {
  }

}
