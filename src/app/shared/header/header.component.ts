import { Component, OnInit } from '@angular/core';
import { Data } from '../../interfaces/data.interface';
import { DataService } from '../../services/data.service';
import { Files } from '../../interfaces/files.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  info: Data = {};
  logo: string;

  constructor(public infoData: DataService) { 

    this.infoData.getData().subscribe((data: Data) => this.info = data);
    this.infoData.getFiles().subscribe((data: Files) => this.logo = data.logo);

  }

  ngOnInit(): void {
  }

}
