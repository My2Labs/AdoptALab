import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

type SubscribeData = {
  firstName: string;
  lastName: string;
  email: string;
};

@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.css'],
})
export class MainsectionComponent {
  firstName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  subscribe({ firstName, lastName, email }: SubscribeData) {
    console.log(firstName, lastName, email);
  }
}

export class FormFieldOverviewExample {}
