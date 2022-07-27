import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conocimiento } from '../model/Conocimiento';

@Injectable({
  providedIn: 'root'
})
export class ConocimientoService {
  private apiSeverUrl='https://backcespedesluis.herokuapp.com/api';
  
  constructor(private Http: HttpClient) { }
 
  public getConocimiento() : Observable<Conocimiento[]> {
    return this.Http.get<Conocimiento[]>(`${this.apiSeverUrl}/skill/traer`)
  }
  public addConocimiento(conocimiento:Conocimiento):Observable<Conocimiento>{
    return this.Http.post<Conocimiento>(`${this.apiSeverUrl}/skill/persona/1/crear`,conocimiento);
  }
  public updateConocimiento(conocimiento:Conocimiento):Observable<Conocimiento>{
    return this.Http.put<Conocimiento>(`${this.apiSeverUrl}/skill/persona/1/editar`,conocimiento);
  }

  public deleteConocimiento(conocimiento:number):Observable<void>{
    return this.Http.delete<void>(`${this.apiSeverUrl}/skill/delete/${conocimiento}`);
  }
  public getConocimientoId(id:number){
    return this.Http.get<Conocimiento>(`${this.apiSeverUrl}/skill/traer/`+"/"+id);
  }

}
    
  
