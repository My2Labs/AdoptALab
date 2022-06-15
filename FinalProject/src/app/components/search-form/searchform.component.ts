import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css'],
})
export class SearchformComponent {
  constructor(private router: Router) {}

  searchDogs({ searchTerm }: { searchTerm: string }) {
    console.log(searchTerm);
    this.router.navigate(['/results'], { queryParams: { search: searchTerm } });
  }
}
