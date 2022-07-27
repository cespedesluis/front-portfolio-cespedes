import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/model/Educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList:any;
  educacion:Educacion = new Educacion();
  invalidLogin=false;


  constructor(private educacionService:EducacionService,private router:Router,
    private modalService: NgbModal,config: NgbModalConfig) {config.backdrop = 'static';
    config.keyboard = false;
   }

   openModal(main:any) {
    
    this.educacion=new Educacion();
    this.modalService.open(main);
  }

 guardar(): void{
  console.log(this.educacion);
  this.modalService.dismissAll();  
  this.educacionService.addEducacion(this.educacion).subscribe(
    res=>this.educacionService.getEducacion().subscribe(response=> this.educacionList=response)
  )
  
 }

 /** va a la edicion del modal   */


 cargar(modifi: any, educacion:Educacion ):void{
  this.modalService.open(modifi);
  this.educacion.idEducacion=educacion.idEducacion
  this.educacion.url_educa=educacion.url_educa
  this.educacion.educa=educacion.educa
  this.educacion.titulo=educacion.titulo
  this.educacion.ini_educa=educacion.ini_educa
  this.educacion.fin_educa=educacion.fin_educa
  this.educacion.ciudad_educa=educacion.ciudad_educa
  this.educacion.prov_educa=educacion.prov_educa
  this.educacion.pais_educa=educacion.pais_educa

 
    
  console.log(educacion)
 }
 editar(educacion:Educacion):void{
  console.log(educacion);
  this.modalService.dismissAll();
  
   this.educacionService.updateEducacion(educacion).subscribe(
    res=>this.educacionService.getEducacion().subscribe(response=> this.educacionList=response)
   )
 }
 


/**aca se abre modal para eliminar */
onDelete(eliminar:any, educacion:Educacion){
  this.modalService.open(eliminar)
  this.educacion.idEducacion=educacion.idEducacion
}

 
 
delete(educacion:Educacion):void{
  console.log(educacion);
  this.modalService.dismissAll();


  this.educacionService.deleteEducacion(educacion.idEducacion).subscribe(
    res=>this.educacionService.getEducacion().subscribe(response=> this.educacionList=response

    )
  );
}

  ngOnInit(): void {
    if(sessionStorage.getItem('email')==null){
      this.invalidLogin=true;
    }
    this.educacionService.getEducacion().subscribe(data => { 
      this.educacionList=data;
    });
  }

}
