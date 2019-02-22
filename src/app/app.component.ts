import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  public list = [
    {
      title: 'New list',
      children: [],
    },
  ];

  onAdd(item) {
    item.push({title: "New", children:[]})
  }

  onRemoveItem(arr: any, index: number) {
    arr.splice(index,1)
  }

}
