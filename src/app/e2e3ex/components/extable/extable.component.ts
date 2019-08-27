import { Component, OnInit, Input } from '@angular/core';
import { Ubigeo } from '../../models/ubigeo.model';

@Component({
  selector: 'extable',
  templateUrl: './extable.component.html',
  styleUrls: ['./extable.component.less']
})
export class ExtableComponent implements OnInit {

  constructor() { }

  @Input()
  tableName: string;

  @Input()
  ubigeos: Ubigeo[];

  ngOnInit() {
  }

}
