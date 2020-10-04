import { Component, OnInit } from '@angular/core';
import { Data } from '../../interfaces/data.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cajeros',
  templateUrl: './cajeros.component.html',
  styles: [
  ]
})
export class CajerosComponent {

  info: Data = {};

  constructor(public infoData: DataService) { 

    this.infoData.getData().subscribe((data: Data) => this.info = data)

  }

}
