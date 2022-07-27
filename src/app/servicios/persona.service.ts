import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiSeverUrl='https://backcespedesluis.herokuapp.com/api';
  
  constructor(private Http: HttpClient) { }
 
  public getPersona() : Observable<Persona[]> {
    return this.Http.get<Persona[]>(`${this.apiSeverUrl}/persona/traer`)
  }
  public addPersona(persona:Persona):Observable<Persona>{
    return this.Http.post<Persona>(`${this.apiSeverUrl}/persona/crear`,persona);
  }
  public updatePersona(persona:Persona):Observable<Persona>{
    return this.Http.put<Persona>(`${this.apiSeverUrl}/persona/editar/`,persona);
  }

  public deletePersona(personaId:number):Observable<void>{
    return this.Http.delete<void>(`${this.apiSeverUrl}/persona/delete/${personaId}`);
  }
  public getPersonaId(id:number){
    return this.Http.get<Persona>(`${this.apiSeverUrl}/persona/traer/`+"/"+id);
  }

}
    
  

