import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiSeverUrl='https://backcespedesluis.herokuapp.com/api';
  
  constructor(private Http: HttpClient) { }
 
  public getEducacion() : Observable<Educacion[]> {
    return this.Http.get<Educacion[]>(`${this.apiSeverUrl}/educacion/traer`)
  }
  public addEducacion(educacion:Educacion):Observable<Educacion>{
    return this.Http.post<Educacion>(`${this.apiSeverUrl}/educacion/persona/1/crear`,educacion);
  }
  public updateEducacion(educacion:Educacion):Observable<Educacion>{
    return this.Http.put<Educacion>(`${this.apiSeverUrl}/educacion/persona/1/editar`,educacion);
  }

  public deleteEducacion(educacionId:number):Observable<void>{
    return this.Http.delete<void>(`${this.apiSeverUrl}/educacion/delete/${educacionId}`);
  }
  public getEduacionId(id:number){
    return this.Http.get<Educacion>(`${this.apiSeverUrl}/educacion/traer/`+"/"+id);
  }

}
  