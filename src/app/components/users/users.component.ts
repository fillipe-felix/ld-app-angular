import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  nomeUser: string = 'Luis Felipe'

  ngOnInit(): void {
  }

  alteraNomeUser(event: string) {
    this.nomeUser = event;
  }
}
