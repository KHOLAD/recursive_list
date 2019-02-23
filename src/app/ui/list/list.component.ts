import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: any;
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeHandler(arr: any, index: number) {
    const remove_data = {list: arr,index: index}
    this.onRemove.emit(remove_data)
  }

}