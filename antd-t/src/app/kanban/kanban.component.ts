import { ListSchemaService } from './list-kanban/list-schema.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ListSchema } from './list-kanban/list-schema';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  listSchema: ListSchema[] = []
  constructor(
    private listSchemaSer: ListSchemaService
  ) { }

  ngOnInit(): void {

    this.getList()
  }

  idea = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  getList() {
    this.listSchemaSer.getAllList().subscribe(
      res => {
        this.listSchema = res,
          console.log(this.listSchema)
      },
      (err) => {
        console.log(err)
      }
    );

  }



  

}
