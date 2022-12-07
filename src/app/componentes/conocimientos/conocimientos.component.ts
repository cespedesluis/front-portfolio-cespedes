import { Component, OnInit } from '@angular/core';

import { ConocimientoService } from 'src/app/servicios/conocimiento.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Conocimiento } from 'src/app/model/Conocimiento';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {
  conocimientosList:any;
  conocimiento:Conocimiento = new Conocimiento();
  invalidLogin=false;
   
  constructor(private conocimientoService:ConocimientoService, 
    private router:Router,private modalService: NgbModal,config: NgbModalConfig) {config.backdrop = 'static';
    config.keyboard = false;
   }

  
   openModal(main:any) {
    this.conocimiento=new Conocimiento();
    this.modalService.open(main);
  }

  guardar(): void{
    console.log(this.conocimiento);
    this.modalService.dismissAll();  
    this.conocimientoService.addConocimiento(this.conocimiento).subscribe(
      res=>this.conocimientoService.getConocimiento().subscribe(response=> this.conocimientosList=response)
    )
    
   }
  
   /** va a la edicion del modal   */
  
  
   cargar(modifi: any, conocimiento:Conocimiento ):void{
    this.modalService.open(modifi)
    this.conocimiento.idSkill=conocimiento.idSkill
    this.conocimiento.progress=conocimiento.progress
    this.conocimiento.skill=conocimiento.skill
    

    
    console.log(conocimiento)
   }
   
  
   editar(conocimiento:Conocimiento):void{
    console.log(conocimiento);
    this.modalService.dismissAll();
    
     this.conocimientoService.updateConocimiento(conocimiento).subscribe(
      res=>this.conocimientoService.getConocimiento().subscribe(response=> this.conocimientosList=response)
     )
   }
  /**aca se abre modal para eliminar */
  onDelete(eliminar:any, conocimiento:Conocimiento){
    this.modalService.open(eliminar)
    this.conocimiento.idSkill=conocimiento.idSkill
  }
  
   
   
  delete(conocimiento:Conocimiento):void{
    console.log(conocimiento);
    this.modalService.dismissAll();
  
  
    this.conocimientoService.deleteConocimiento(conocimiento.idSkill).subscribe(
      res=>this.conocimientoService.getConocimiento().subscribe(response=> this.conocimientosList=response
  
      )
    );
  }
  ngOnInit(): void {

    if(sessionStorage.getItem('email')==null){
      this.invalidLogin=true;
    }
    this.conocimientoService.getConocimiento().subscribe(data =>{ 
      this.conocimientosList=data, console.log(this.conocimientosList);
    });
  }

}
