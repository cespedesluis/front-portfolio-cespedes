import { Component, OnInit } from '@angular/core';

import { CursosService } from 'src/app/servicios/cursos.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Cursos } from 'src/app/model/Cursos';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursosList:any;
  cursos:Cursos= new Cursos();
  invalidLogin=false;

 

  constructor(private cursosService:CursosService,private router:Router,
    private modalService: NgbModal,config: NgbModalConfig) {config.backdrop = 'static';
    config.keyboard = false;
   }

  
openModal(content:any) {
    this.cursos=new Cursos();
    this.modalService.open(content);
  }
  guardar(): void{
    console.log(this.cursos);
    this.modalService.dismissAll();  
    this.cursosService.addCursos(this.cursos).subscribe(
      res=>this.cursosService.getCursos().subscribe(response=> this.cursosList=response)
    )
    
   }
  
   /** va a la edicion del modal   */
  
  
   cargar(modifi: any, cursos:Cursos ):void{
    this.modalService.open(modifi);
    this.cursos.curso=cursos.curso
    this.cursos.ano_curso=cursos.ano_curso
    this.cursos.ciudad_curso=cursos.ciudad_curso
    this.cursos.data_curso=cursos.data_curso
    this.cursos.idCursos=cursos.idCursos
    this.cursos.lugar_curso=cursos.lugar_curso
    this.cursos.pais_=cursos.pais_
    this.cursos.prov_curso=cursos.prov_curso
   
  
   
      
    console.log(cursos)
   }
   editar(cursos:Cursos):void{
    console.log(cursos);
    this.modalService.dismissAll();
    
     this.cursosService.updateCursos(cursos).subscribe(
      res=>this.cursosService.getCursos().subscribe(response=> this.cursosList=response)
     )
   }
   
  
  
  /**aca se abre modal para eliminar */
  onDelete(eliminar:any, cursos:Cursos){
    this.modalService.open(eliminar)
    this.cursos.idCursos=cursos.idCursos
  }
  
   
   
  delete(cursos:Cursos):void{
    console.log(cursos);
    this.modalService.dismissAll();
  
  
    this.cursosService.deleteCursos(cursos.idCursos).subscribe(
      res=>this.cursosService.getCursos().subscribe(response=> this.cursosList=response
  
      )
    );
  }
  ngOnInit(): void {
    if(sessionStorage.getItem('email')==null){
      this.invalidLogin=true;
    }
    this.cursosService.getCursos().subscribe(data =>{
      this.cursosList=data;
    });

  }

}
