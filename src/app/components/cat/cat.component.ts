import { Component, Input, OnInit } from '@angular/core';

import { Cat } from '@models/cat.model';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent implements OnInit {

  @Input() cat!: Cat;

  constructor() { }

  ngOnInit() { }

}
