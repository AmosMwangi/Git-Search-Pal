import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repo } from './repo';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  getUser: User;
  getRepo: Repo;

  constructor(private http: HttpClient) {
    this.getUser = new User('', '', '', '', 0, 0, 0, '', new Date());
    this.getRepo =  new Repo('', '', '', new Date(),'');

  }

  searchUser(searchName: string) {
    interface Response {
      url: string;
      login: string;
      html_url: string;
      location: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      created_at: Date;
    }

    return new Promise((resolve, reject) => {
      this.http.get<Response>('https://api.github.com/users/' + searchName + '?access_token=' + environment.apiKey).toPromise()
      .then((result) => {
        this.getUser = result;
        resolve();
      }, (error) => {
      console.log(error);
      reject();
      });
    });
  }
  getRepos(searchName) {
    interface Repos{
      name: string;
      html_url: string;
      description: string;
      forks: number;
      atcherCounted: number;
      language: string;
      created_at: Date;
    }
    
    return new Promise((resolve, reject) => {
      this.http.get<Repos>('https://api.github.com/users/' + searchName + '/repos?order=created&sort=asc?access_token=' + environment.apiKey)
      .toPromise().then(
        (results) => {
          this.getRepo = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
}
