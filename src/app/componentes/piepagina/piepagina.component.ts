import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-piepagina',
  templateUrl: './piepagina.component.html',
  styleUrls: ['./piepagina.component.css']
})
export class PiepaginaComponent implements OnInit {
  miPiepagina:any;
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    
    this.datosPorfolio.obtenerDatos().subscribe(data=>{ 
      console.log(data);
      this.miPiepagina=data;
    });
  }

}
