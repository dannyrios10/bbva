import { Component, OnInit } from '@angular/core';
import { Data } from '../../interfaces/data.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styles: [
  ]
})
export class BancosComponent implements OnInit {

  info: Data = {};

  constructor(public infoData: DataService) { 

    this.infoData.getData().subscribe((data: Data) => this.info = data)

  }

  ngOnInit(): void {
  }

}
