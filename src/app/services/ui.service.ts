import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAgregarExperiencia: boolean = false;
  private showAgregarEstudio: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAgregarExperiencia(): void {
    this.showAgregarExperiencia = !this.showAgregarExperiencia;
    this.subject.next(this.showAgregarExperiencia);
  }

  toggleAgregarEstudio(): void {
    this.showAgregarExperiencia = !this.showAgregarExperiencia;
    this.subject.next(this.showAgregarExperiencia);
  }


  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
