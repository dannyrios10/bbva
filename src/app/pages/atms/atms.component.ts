import { Component, OnInit } from '@angular/core';
import { Data } from '../../interfaces/data.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-atms',
  templateUrl: './atms.component.html',
  styles: [
  ]
})
export class AtmsComponent implements OnInit {

  info: Data = {};

  constructor(public infoData: DataService) { 

    this.infoData.getData().subscribe((data: Data) => this.info = data)

  }

  ngOnInit(): void {
  }

}
