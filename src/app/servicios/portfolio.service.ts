import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Portfolio } from '../model/Portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
    private apiSeverUrl='https://witty-claudelle-cespedesluis.koyeb.app/api';
    
    constructor(private Http: HttpClient) { }
   
      public getPorfolio() : Observable<Portfolio[]> {
        return this.Http.get<Portfolio[]>(`${this.apiSeverUrl}/portfolio/traer`)
      }
      public addPorfolio(portfolio:Portfolio):Observable<Portfolio>{
        return this.Http.post<Portfolio>(`${this.apiSeverUrl}/portfolio/persona/1/crear`,portfolio);
      }
      public updatePorfolio(porfolio:Portfolio):Observable<Portfolio>{
        return this.Http.put<Portfolio>(`${this.apiSeverUrl}/portfolio/persona/1/editar`,porfolio);
      }

      public deletePorfolio(porfolioId:number):Observable<void>{
        return this.Http.delete<void>(`${this.apiSeverUrl}/portfolio/delete/${porfolioId}`);
      }
      public getPorfolioId(id:number){
        return this.Http.get<Portfolio>(`${this.apiSeverUrl}/portfolio/traer/`+"/"+id);
      }

    }