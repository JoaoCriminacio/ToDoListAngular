import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItems } from '../../models/IListItems.model';

@Component({
  selector: 'app-input-list-item',
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.scss'
})
export class InputListItemComponent {
  @Input({ required: true }) public inputListItems: IListItems[] = [];

  @Output() public outputUpdateItemCheckbox = new EventEmitter<{id: string, checked: boolean}>();
  @Output() public outputUpdateItemText = new EventEmitter<{id: string, value: string}>();
  @Output() public outputDeleteItem = new EventEmitter<string>();

  public updateItemCheckbox(id: string, checked: boolean) {
    return this.outputUpdateItemCheckbox.emit({id, checked});
  }

  public updateItemText(id: string, value: string) {
    return this.outputUpdateItemText.emit({id, value});
  }

  public deleteItem(id: string) {
    return this.outputDeleteItem.emit(id);
  }
}
