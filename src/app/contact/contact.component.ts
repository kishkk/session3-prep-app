import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  constructor(private stateService: AppStateService) {}
  
  ngOnInit(): void {
    this.stateService.bSubject$.next(90);
  }
}
