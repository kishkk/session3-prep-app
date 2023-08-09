import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    // Observable
    const names$ = of('Philip', 'Fiona', 'Bob')

    const observable$ = new Observable<string>(sub => {
      console.log('Observable Created!');
      sub.next('John');
      sub.next('Bob');
      //sub.error(new Error('Failure'));
      sub.next('Charlie');
      sub.complete();
    }
    )

    names$.subscribe({
        next: value => console.log(value),
        error: err => console.log(err.message),
        complete: () => console.log('Completed')
      });
    // Observer

    // Subscription

    
    // const observable$ = new Observable<string>(sub => {
    //   console.log('Observable created!')
    //   sub.next('Philip');
    //   sub.next('Fiona');
    //   sub.error(new Error('Failure'));
    //   setTimeout(() => sub.next('Bob'), 2000);
    //   sub.complete();
    // });  

    // //const names$ = of('Philip', 'Fiona', 'Bob')
    // const subscription = observable$.subscribe({
    //   next: value => console.log(value),
    //   error: err => console.log(err.message),
    //   complete: () => console.log('Completed')
    // });

    // setTimeout(() => {
    //   subscription.unsubscribe()
    //   console.log('Unsubscribed');
    // }, 3000);
  }
}
