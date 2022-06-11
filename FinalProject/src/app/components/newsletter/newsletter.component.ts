import { Component, OnInit } from '@angular/core';
import { Randomdog, RandomdogService } from '../../randomdog.service';

@Component({
  selector: 'app-mainsection',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent implements OnInit {
  randomdogs: Randomdog[] = [];

  submit(signup: any) {
    console.log('Form submitted', signup);
  }

  constructor(private randomdogService: RandomdogService) {}

  ngOnInit(): void {
    this.randomdogService.listRandomdog().forEach((response) => {
      console.log(response.message);
      this.randomdogs.push(response);
    });
  }
}

// ngOnInit(): void {
//   this.randomdogService.listRandomdog().subscribe((response: any) => {
//     console.log(response.message);
//     this.randomdogs = response.message;
//   });
// }

export class FormFieldOverviewExample {}
