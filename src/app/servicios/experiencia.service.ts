import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
  private apiSeverUrl='https://backcespedesluis.herokuapp.com/api';
  
  constructor(private Http: HttpClient) { }
 
  public getExperiencia() : Observable<Experiencia[]> {
    return this.Http.get<Experiencia[]>(`${this.apiSeverUrl}/experiencia/traer`)
  }
  public addExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.Http.post<Experiencia>(`${this.apiSeverUrl}/experiencia/persona/1/crear`,experiencia);
  }
  public updateExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.Http.put<Experiencia>(`${this.apiSeverUrl}/expiriencia/persona/1/editar`,experiencia);
  }

  public deleteExperiencia(experienciaId:number):Observable<void>{
    return this.Http.delete<void>(`${this.apiSeverUrl}/experiencia/delete/${experienciaId}`);
  }
  public getExperienciaId(id:number){
    return this.Http.get<Experiencia>(`${this.apiSeverUrl}/experiencia/traer/`+"/"+id);
  }

}
  






