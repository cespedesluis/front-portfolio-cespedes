import { Component, OnInit } from '@angular/core';
import { MdbModalRef,MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/model/Experiencia';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList:any;
  experiencia:Experiencia = new Experiencia();
  invalidLogin=false;

  constructor( private experienciaService:ExperienciaService, private router:Router,
    private modalService: NgbModal,config: NgbModalConfig) {config.backdrop = 'static';
    config.keyboard = false
   }

  openModal(main:any) {
    this.experiencia=new Experiencia();
    this.modalService.open(main);
  }

 guardar(): void{
  console.log(this.experiencia);
  this.modalService.dismissAll();
  this.experienciaService.addExperiencia(this.experiencia).subscribe(
    res=>this.experienciaService.getExperiencia().subscribe(response=> this.experienciaList=response)
  )
  
 }
/**aca se modifican datos  */
 cargar(modifi: any, experiencia:Experiencia ):void{
  this.modalService.open(modifi)
  this.experiencia.idExperiencia=experiencia.idExperiencia
  this.experiencia.trabajo=experiencia.trabajo
  this.experiencia.ini_trabajo=experiencia.ini_trabajo
  this.experiencia.fin_trabajo=experiencia.fin_trabajo
  this.experiencia.cargo_trabajo=experiencia.cargo_trabajo
  this.experiencia.ciudad_trabajo=experiencia.ciudad_trabajo
  this.experiencia.prov_trabajo=experiencia.prov_trabajo
  this.experiencia.url_trabajo=experiencia.url_trabajo
  this.experiencia.pais_trabajo=experiencia.pais_trabajo


  
  console.log(experiencia)
 }
 

 
 editar(experiencia:Experiencia):void{
  console.log(experiencia);
  this.modalService.dismissAll();
  
   this.experienciaService.updateExperiencia(experiencia).subscribe(
    res=>this.experienciaService.getExperiencia().subscribe(response=> this.experienciaList=response)
   )
 }
 /**aca se abre modal para eliminar */
onDelete(eliminar:any, experiencia:Experiencia){
  this.modalService.open(eliminar)
  this.experiencia.idExperiencia=experiencia.idExperiencia
}
 
delete(experiencia:Experiencia):void{
  console.log(experiencia);
  this.modalService.dismissAll();


  this.experienciaService.deleteExperiencia(experiencia.idExperiencia).subscribe(
    res=>this.experienciaService.getExperiencia().subscribe(response=> this.experienciaList=response

    )
  );
}

  ngOnInit(): void {
    if(sessionStorage.getItem('email')==null){
      console.log(sessionStorage)
      this.invalidLogin=true;
    }
    this.experienciaService.getExperiencia().subscribe(data=>{ 
      this.experienciaList=data, console.log(this.experienciaList)
    });
  }


}
