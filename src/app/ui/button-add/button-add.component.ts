import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-add-button',
  template: `
    <button
    [disabled]="disabled"
    type="button"
    class="btn btn-outline-primary ml-3 mr-3"
    (click)="onClick.emit()">Add</button>
  `
})
export class ButtonAddComponent {
  @Input()
  disabled: boolean;

  @Output()
  onClick: EventEmitter<any> = new EventEmitter();
}
