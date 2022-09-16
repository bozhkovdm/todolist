import { Component, OnInit } from '@angular/core';
import { TasksHttpService } from './tasks-http.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todolist';

  filter: 'all' | 'scheduled' | 'completed' = 'all';

  allItems = [
    { title: 'Застелить кровать', completed: false },
    { title: 'Почистить зубы', completed: true },
    { title: 'Выгулять собаку', completed: false },
    { title: 'Позавтракать', completed: false },
  ];

  constructor(private tasksHttpService: TasksHttpService) {}

  ngOnInit() {
    // TODO: после решения проблем с CORS, брать список задач с сервера
    // this.tasksHttpService.getTasks().subscribe((tasks) => {
    //   debugger
    // })
  }

  addItem(title: string) {
    this.allItems.unshift({
      title,
      completed: false,
    });
  }

  remove(item: Item) {
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
