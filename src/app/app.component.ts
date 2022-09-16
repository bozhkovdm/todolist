import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todolist';

  filter: 'all' | 'scheduled' | 'completed' = 'all';



  allItems = [
    { title: 'Застелить кровать', completed: false },
    { title: 'Почистить зубы', completed: true },
    { title: 'Выгулять собаку', completed: false },
    { title: 'Позавтракать', completed: false },
  ];

  addItem(title: string) {
    // let allItemsLenght = this.allItems.length
    this.allItems.unshift({
      // id: allItemsLenght + 1,
      title,
      completed: false,
    });
  }

  // removeItem(id: number) {
  //   let currentTask = this.allItems.filter((item) => this.filter.id
  //   this.allItems
  // }

  remove(item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  


  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'completed' ? item.completed : !item.completed
    );
  }
}
