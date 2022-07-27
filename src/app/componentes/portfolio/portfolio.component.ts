import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from 'src/app/model/Portfolio';
import { Persona } from 'src/app/model/Persona';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio:Portfolio = new Portfolio();
  porfolioList:any
  persona:Persona= new Persona();
  invalidLogin=false;

  constructor( private porfolioService:PortfolioService, private router:Router,
    private modalService: NgbModal,config: NgbModalConfig
   ) {config.backdrop = 'static';
    config.keyboard = false
   }

  /**Se abre el modal y se graban datos */ 
openModal(main:any) {
  this.portfolio = new Portfolio();
  console.log(this.portfolio)
    this.modalService.open(main);
  }

 guardar(): void{
  console.log(this.portfolio);
  this.modalService.dismissAll(); 
   
  this.porfolioService.addPorfolio(this.portfolio).subscribe(
    res=>this.porfolioService.getPorfolio().subscribe(response=> this.porfolioList=response)
  )

  
 }

 /** va a la edicion del modal   */


 cargar(modifi: any, portfolio:Portfolio ):void{
  this.modalService.open(modifi)
  this.portfolio.idPortfolio=portfolio.idPortfolio
  this.portfolio.nombre_proyec=portfolio.nombre_proyec
  this.portfolio.proyec_desc=portfolio.proyec_desc
  this.portfolio.url_proyec=portfolio.url_proyec
  console.log(portfolio)
 }
 

 editar(portfolio:Portfolio):void{
  console.log(portfolio);
  this.modalService.dismissAll();
  
   this.porfolioService.updatePorfolio(portfolio).subscribe(
    res=>this.porfolioService.getPorfolio().subscribe(response=> this.porfolioList=response)
   )


 }
/**aca se abre modal para eliminar */
onDelete(eliminar:any, porfolio:Portfolio){
  this.modalService.open(eliminar)
  this.portfolio.idPortfolio=porfolio.idPortfolio
}

 
 
delete(portfolio:Portfolio):void{
  console.log(portfolio);
  this.modalService.dismissAll();


  this.porfolioService.deletePorfolio(portfolio.idPortfolio).subscribe(
    res=>this.porfolioService.getPorfolio().subscribe(response=> this.porfolioList=response

    )
  );
}

  ngOnInit(): void {
    if(sessionStorage.getItem('email')==null){
      this.invalidLogin=true;
    }
  
    this.porfolioService.getPorfolio().subscribe(data=>{ 
      this.porfolioList=data, console.log(this.porfolioList)
    });
  }

}
