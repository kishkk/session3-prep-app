import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  count: number = 0;
  constructor(private stateService: AppStateService) {}

  ngOnInit(): void {
    this.stateService.bSubject$.subscribe(c => {
      this.count = c;
    });
  }
}
