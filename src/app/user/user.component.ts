import { Component, OnInit } from '@angular/core';
import { SearchService } from './../search.service';
import { User } from './../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  repo: Repo;

  constructor(public myService: SearchService, private repoService: SearchService) {}

searchs(searchName) {
  this.myService.searchUser(searchName).then(
    (success) => {
      this.user = this.myService.getUser;
    },
    (error) => {
      console.log(error);
    }
  );
  this.repoService.getRepos(searchName).then(
      (results) => {
        this.repo = this.repoService.getRepo;
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );

}
ngOnInit() {
this.searchs('AmosMwangi');
  }

}
