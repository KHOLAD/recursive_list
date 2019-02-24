import { LocalstorageService } from './../../services/localstorage.service';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'ui-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() list: any;
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Output() onRemove: EventEmitter<any> = new EventEmitter();
  @ViewChild('main_list') main_list: ElementRef

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