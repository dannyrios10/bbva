import { Component, OnInit } from '@angular/core';
import { Data } from '../../interfaces/data.interface';
import { DataService } from '../../services/data.service';
import { Files } from '../../interfaces/files.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  info: Data = {};
  files: Files = {};

  constructor(public infoData: DataService) { 

    this.infoData.getData().subscribe((data: Data) => this.info = data);
    this.infoData.getFiles().subscribe((data: Files) => this.files = data);

  }

  ngOnInit(): void {
  }

}
