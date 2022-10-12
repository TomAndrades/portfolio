import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from "@angular/common/http"
import { Observable, of } from 'rxjs';
import { Experiencia, Estudio, Tecnologia, Proyecto } from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class DbmanagerService {
  private expUrl = "http://localhost:5000/experiencias"
  private estUrl = "http://localhost:5000/estudios"
  private tecUrl = "http://localhost:5000/tecnologias"
  private proUrl = "http://localhost:5000/proyectos"
  constructor(
    private http: HttpClient
  ) { }


  getExperiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.expUrl)
  }

  getEstudios(): Observable<Estudio[]> {
    return this.http.get<Estudio[]>(this.estUrl)
  }

  getTecnologias(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.tecUrl)
  }

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.proUrl)
  }
}
