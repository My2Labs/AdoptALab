import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainsection',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent implements OnInit {
  submit(signup: any) {
    console.log('Form submitted', signup);
  }

  ngOnInit() {}
}

export class FormFieldOverviewExample {}
