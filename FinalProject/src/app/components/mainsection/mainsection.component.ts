import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.css'],
})
export class MainsectionComponent {
  submit(signup: any) {
    console.log('Form submitted', signup);
  }
}

export class FormFieldOverviewExample {}
