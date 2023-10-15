import { Component } from '@angular/core';
import { User } from './models/user-lists.model';
import { DataListService } from './service/data-list.service';
import { SortPipe } from './pipes/sort.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-component';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  list!: User[];

  constructor(
    private dataListService: DataListService,
    private sortPipe: SortPipe
  ) {}

  ngOnInit(): void {
    this.list = this.dataListService.getUserDataService();
  }
}
