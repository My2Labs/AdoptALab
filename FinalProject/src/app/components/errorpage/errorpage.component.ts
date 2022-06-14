import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css'],
})
export class ErrorpageComponent implements OnInit {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {}

  onClick() {
    this.router.navigate(['/']);
  }
}

// export class ErrorpageComponent implements OnInit {
//   router: Router;

//   constructor(router: Router) {
//     this.router = router;
//   }

//   ngOnInit(): void {}

//   onClick() {
//     this.router.navigate(['/']);
//   }
// }
