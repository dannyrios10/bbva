import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { CajerosService } from '../../services/cajeros.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  
  lat = 19.4005511;
  lng = -99.1844923;
  marcadores: Marcador[] = [];

  constructor( 
    private cajeros: CajerosService ) {


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
