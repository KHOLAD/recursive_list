import { LocalstorageService } from './services/localstorage.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  public category = new FormControl('');
  public list: any = [];

  constructor(private _store: LocalstorageService) {}

  ngOnInit() {
    if(this._store.get("lists") === null) this._store.set([]);
    this.list = this._store.get("lists");
  }

  addItem(list: any) {
    list.push({title: "New list", children:[]})
    this._store.set(this.list)
  }

  removeItem(payload: any) {
    const { list } = payload
    const { index } = payload
    list.splice(index,1)
    this._store.set(this.list)
  }

  addCategory() {
    const { value } = this.category;
    this.list.unshift({title: value, children: []})
    this.category.setValue(null)
    this._store.set(this.list)
  }

}
