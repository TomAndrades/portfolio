import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Experiencia, Estudio, Tecnologia, Proyecto } from '../interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DbmanagerService {
  //Rutas para el acceso a las distintas partes del db
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

  deleteExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    const url = `${this.expUrl}/${experiencia.id}`
    return this.http.delete<Experiencia>(url)
  }

  addExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.expUrl, experiencia, httpOptions)
  }

  deleteEstudio(estudio: Estudio): Observable<Estudio> {
    const url = `${this.expUrl}/${estudio.id}`
    return this.http.delete<Estudio>(url)
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
