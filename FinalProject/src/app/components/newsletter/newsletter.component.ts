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

// this.labadoptionService.listLabrador().subscribe((response: any) => {
//   console.log(response);
//   this.labradors = response.labadoptions;
// });

// ngOnInit(): void {
//   this.randomdogService.listRandomdog().subscribe((response: any) => {
//     console.log(response.message);
//     this.randomdogs = response.message;
//   });
// }

// getRandomDogs() {
//   this.httpClient.get<any>('https://dog.ceo/api/breed/labrador/images')
//     .subscribe((response: { message: Randomdog[] }) => {
//       console.log(response);
//       this.randomdogs = response.message;
//     });
// }

export class FormFieldOverviewExample {}
