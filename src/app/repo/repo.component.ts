import { Component, OnInit } from '@angular/core';
import { SearchService } from './../search.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repo: Repo;
  constructor(public repService: SearchService) {}

  repoSearch(searchName){
    this.repService.getRepos(searchName).then(
      (result) => {
        this.repo = this.repService.getRepo;
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
