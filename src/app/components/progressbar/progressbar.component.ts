import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/interfaces';
import { DbmanagerService } from 'src/app/services/dbmanager.service';
@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  tecnologias: Tecnologia[] = [];

  constructor(private dbmanagerService: DbmanagerService) {

  }

  ngOnInit(): void {
    this.dbmanagerService.getTecnologias().subscribe((tecnologias) => (
      this.tecnologias = tecnologias))
  }

}
