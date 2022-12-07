import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private apiSeverUrl='https://backcespedesluis.herokuapp.com/api';

  constructor(private Http:HttpClient) { 
}
public getUsuario() : Observable<Usuario[]> {
  return this.Http.get<Usuario[]>(`${this.apiSeverUrl}/usuario/traer`)
}

authenticate(email:any, password:any,email2:any,password2:any) {
  if (email === email2 && password === password2) {
    sessionStorage.setItem('email',email)

    return true;
    
  } else {
    return false;

  }
}

isUserLoggedIn() {
  let user = sessionStorage.getItem('email')
  console.log(!(user === null))
  return !(user === null)
}

logOut() {
 
  sessionStorage.removeItem('email')
}
}
