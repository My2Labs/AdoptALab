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

  ngOnInit(): void {}

  getRandomDog() {
    // fetch();
  }
}

// constructor(private randomdogService: RandomdogService) {}

// ngOnInit(): void {
//   this.randomdogService.listRandomdog().forEach((response) => {
//     this.randomdogs = [...this.randomdogs, new Randomdog(response.message)];
//     console.log(response.message);
//   });

// ngOnInit(): void {
//   this.randomdogService.listRandomdog().subscribe((response: any) => {
//     console.log(response.message);
//     this.randomdogs = response.message;
//   });
// }

export class FormFieldOverviewExample {}
