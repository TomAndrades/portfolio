import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  name: string = "Tomás Andrades";
  profile: string = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80";
  portrait: string = "https://i.pinimg.com/originals/09/01/43/0901434384290893f3f67b1065855d60.gif";
  constructor() { }

  ngOnInit(): void {
  }

}
