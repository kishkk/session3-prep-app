import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Registration form submitted:', form.value);
    }
  }
}
