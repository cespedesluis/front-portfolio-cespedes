import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cursos } from '../model/Cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private apiSeverUrl='https://backcespedesluis.herokuapp.com/api';
  
  constructor(private Http: HttpClient) { }
 
  public getCursos() : Observable<Cursos[]> {
    return this.Http.get<Cursos[]>(`${this.apiSeverUrl}/cursos/traer`)
  }
  public addCursos(cursos:Cursos):Observable<Cursos>{
    return this.Http.post<Cursos>(`${this.apiSeverUrl}/cursos/persona/1/crear`,cursos);
  }
  public updateCursos(cursos:Cursos):Observable<Cursos>{
    return this.Http.put<Cursos>(`${this.apiSeverUrl}/cursos/persona/1/editar`,cursos);
  }

  public deleteCursos(cursosId:number):Observable<void>{
    return this.Http.delete<void>(`${this.apiSeverUrl}/cursos/delete/${cursosId}`);
  }
  public getCursosId(id:number){
    return this.Http.get<Cursos>(`${this.apiSeverUrl}/cursos/traer/`+"/"+id);
  }

}
    
  