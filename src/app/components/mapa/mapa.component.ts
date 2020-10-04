import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { CajerosService } from '../../services/cajeros.service';
import { DataService } from '../../services/data.service';
import { Files } from '../../interfaces/files.interface';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  
  lat = 19.4005511;
  lng = -99.1844923;
  marcadores: Marcador[] = [];
  file: Files = {};

  constructor( 
    private cajeros: CajerosService,
    private files: DataService ) {

    this.files.getFiles().subscribe((data: Files) => this.file = data);
}
ngOnInit(): void {
this.inicializarMapa();
}

inicializarMapa(){

this.cajeros.obtenerBancos().subscribe((cajero: any) =>{
// console.log(cajero.results);
for(let i =0; i<cajero.results.length; i++){
const marcador = new Marcador(cajero.results[i].latitude, cajero.results[i].longitude);
marcador.titulo = cajero.results[i].calle;
marcador.codigo = cajero.results[i].codigopostal;
this.marcadores.push(marcador);
}
})

}



}
