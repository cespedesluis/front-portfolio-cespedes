import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/model/Persona';

@Component({
  selector: 'app-piepagina',
  templateUrl: './piepagina.component.html',
  styleUrls: ['./piepagina.component.css']
})
export class PiepaginaComponent implements OnInit {

    persona:Persona = new Persona();
    personaList:any;
    invalidLogin=false;
  
    constructor( private personaService:PersonaService, private router:Router,
      private modalService: NgbModal,config: NgbModalConfig
      ) {config.backdrop = 'static';
      config.keyboard = false
     }
  
    openModal(main:any) {
      
      this.modalService.open(main);
    }
  
   guardar(): void{
    console.log(this.persona);
    this.modalService.dismissAll();
    this.personaService.addPersona(this.persona).subscribe(
      res=>this.personaService.getPersona().subscribe(response=> this.personaList=response)
    )
    
   }
  
   cargar(modifi: any, persona:Persona ):void{
    
    this.modalService.open(modifi)
    this.persona.id=persona.id
    this.persona.direccion=persona.direccion
    this.persona.email=persona.email
    this.persona.telefono=persona.telefono
    this.persona.nombre_dev=persona.nombre_dev
    this.persona.id=persona.id
    this.persona.nombre=persona.nombre
    this.persona.apellido=persona.apellido
    this.persona.fecha_nac=persona.fecha_nac
    this.persona.ciudad_nac=persona.ciudad_nac
    this.persona.prov_nac=persona.prov_nac
    this.persona.acerca_mi=persona.acerca_mi
    this.persona.url_baner=persona.url_baner
    this.persona.url_face=persona.url_face
   

    
    console.log(persona)
   }
 
  
   
   editar(persona:Persona):void{
    console.log(persona);
    this.modalService.dismissAll();
    
     this.personaService.updatePersona(persona).subscribe(
      res=>this.personaService.getPersona().subscribe(response=> this.personaList=response)
     )
   }
   
   
  delete(persona:Persona):void{
    console.log(persona);
  
    this.personaService.deletePersona(persona.id).subscribe(
      res=>this.personaService.getPersona().subscribe(response=> this.personaList=response
  
      )
    );
  }
  ngOnInit(): void {
    if(sessionStorage.getItem('email')==null){
      console.log(sessionStorage)
      this.invalidLogin=true;
    }
    
    this.personaService.getPersona().subscribe(data=>{ 
      
      this.personaList=data;console.log(data);
    });
  }

}
