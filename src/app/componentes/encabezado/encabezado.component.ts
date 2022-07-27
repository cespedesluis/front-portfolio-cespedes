import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  invalidLogin=true;
  
  isUserLoggedIn=true;
  email2:any
  password2:any
  usuarioList:any
  usuario:Usuario= new Usuario();


  constructor( private router:Router,
    private modalService: NgbModal,config: NgbModalConfig,private loginService:AutenticacionService, private formBuilder:FormBuilder) {config.backdrop = 'static';
    config.keyboard = true;
   }

  
openModal(login:any,usuario:Usuario) {
  this.email2=''
  this.password2=''
  
  this.usuario.email=usuario.email
  this.usuario.password=usuario.password
    
    this.modalService.open(login);
  }

Salir(){
  this.modalService.dismissAll();
  this.invalidLogin=false;
  this.loginService.logOut();
  window.location.reload();


}

  ngOnInit(): void {
    if(sessionStorage.getItem('email')==null){
      console.log(sessionStorage)
      this.invalidLogin=false;

    }
    
    this.loginService.getUsuario().subscribe(data => { 
      this.usuarioList=data; 
    });
    
  }
  guardar(email2:any,password2:any,incorrecto:any,usuario:Usuario) {
    
  
    this.modalService.dismissAll();
    if (this.loginService.authenticate(usuario.email,usuario.password,this.email2,this.password2)
    ) {
      
      this.invalidLogin = true
     
      window.location.reload();

    } else {
      this.invalidLogin = false
      this.modalService.open(incorrecto);}
 
  }
 
}
