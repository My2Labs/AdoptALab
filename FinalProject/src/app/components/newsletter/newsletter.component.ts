import { Component } from '@angular/core';

@Component({
  selector: 'app-mainsection',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {
  submit(signup: any) {
    console.log('Form submitted', signup);
  }
}

export class FormFieldOverviewExample {}
