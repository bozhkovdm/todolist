import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';
import { faPenToSquare, faTrash, faBan, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  editable = false;

  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faBan = faBan;
  faFloppyDisk = faFloppyDisk;

  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(title: string) {
    this.editable = false;
    this.item.title = title;
  }
  
}
