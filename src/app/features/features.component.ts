import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit{
  posts: any = [];
  count: number = 0;
  constructor(
    private dataService: DataService,
    private stateService: AppStateService
  ) {}

  ngOnInit(): void {
    
  }
  getUsers() {
    console.log(this.count);

    this.dataService.getUsers().subscribe({
      next: (data: any) => {
        this.posts = data;
        console.log(this.posts);
      },
      error: (err) => console.log('Error happened: ', err.message),
      complete: () => console.log('Completed'),
    });
    
    this.stateService.bSubject$.next(35);
    //console.log(this.count);
  }
}
