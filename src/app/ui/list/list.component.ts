import { LocalstorageService } from './../../services/localstorage.service';
import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {
  trigger,
  style,
  transition,
  animate,
  group } from '@angular/animations';

@Component({
  selector: 'ui-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({opacity: '.4'}),
        animate(300)
      ]),
      transition(':leave', [
        group([
          animate('0.1s ease', style({opacity: '0.3'})),
          animate('0.2s 0.2s ease', style({opacity: 0}))
        ])
      ])
    ])
  ]
})

export class ListComponent {

  @Input() list: any;
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  constructor(private _store: LocalstorageService) { }

  removeHandler(arr: any, index: number) {
    const remove_data = {list: arr,index: index}
    this.onRemove.emit(remove_data)
  }

  onChange(e) {
    this._store.set(this.list)
  }

  hideSection(item: any) {
    item.hide_child = !item.hide_child
    this._store.set(this.list)
  }

}