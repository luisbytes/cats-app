import { Component, OnInit } from '@angular/core';

import { Cat } from '@models/cat.model';
import { CatsService } from '@services/cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  styleUrls: ['./cats.page.scss'],
})
export class CatsPage implements OnInit {

  cats?: Cat[];

  constructor(
    private catsService: CatsService
  ) { }

  async ngOnInit() {
    this.cats = await this.catsService.getCats();

    
  }

}
