import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-lists.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() list!: User[];

  ngOnInit(): void {
    this.list = this.list;
    console.log(this.list);
  }
}
