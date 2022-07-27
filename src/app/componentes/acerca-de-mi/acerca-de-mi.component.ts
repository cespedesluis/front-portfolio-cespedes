import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/model/Persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AcercaDeMiComponent implements OnInit {
  personaList: any;
  educacionList: any;
  invalidLogin=false;
  persona:Persona= new Persona();

  miencabezado:any;


  constructor(private personaService:PersonaService,private educacionService:EducacionService,
    private loginService:AutenticacionService,
   private modalService: NgbModal,config: NgbModalConfig) {config.backdrop = 'static';
    config.keyboard = false;
   }

  
openModal(content:any) {
    this.modalService.open(content);
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
    this.persona.pais_nac=persona.pais_nac
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
    this.personaService.getPersona().subscribe(data => {  
    this.personaList=data,
    this.educacionService.getEducacion().subscribe(data =>{
      this.educacionList=data;
    })
    
  });

 }
}
