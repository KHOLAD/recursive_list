import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  public category = new FormControl('');
  public list: any = [
    {
      title: "test",
      children: []
    }
  ];

  addItem(list: any) {
    list.push({title: "New", children:[]})
  }

  removeItem(payload: any) {
    const { list } = payload
    const { index } = payload
    list.splice(index,1)
  }

  addCategory() {
    const { value } = this.category;
    this.list.unshift({title: value, children: []})
    this.category.setValue(null)
  }

}
