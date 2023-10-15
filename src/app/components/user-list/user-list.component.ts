import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-lists.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'photo',
    'followers',
    'following',
    'repos',
  ];
  clickedRows = new Set<User>();

  @Input() list!: User[];

  ngOnInit(): void {
    this.list = this.list;
    console.log(this.list);
  }
}
