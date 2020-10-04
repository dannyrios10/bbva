import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data } from '../../interfaces/data.interface';
import { Files } from '../../interfaces/files.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  info: Data = {};
  logo: string;

  constructor(public infoData: DataService) { 

    this.infoData.getData().subscribe((data: Data) => this.info = data);
    this.infoData.getFiles().subscribe((data:Files) => this.logo = data.logo);

  }

  ngOnInit(): void {
  }

}
