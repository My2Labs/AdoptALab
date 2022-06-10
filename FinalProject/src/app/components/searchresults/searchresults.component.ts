import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Labrador } from '../../labadoption.service';
import { LabadoptionService } from '../../labadoption.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css'],
})
export class SearchresultsComponent implements OnInit {
  searchTerm = '';
  search: Labrador[] = [];

  constructor(
    private route: ActivatedRoute,
    private labadoptionService: LabadoptionService
  ) {}

  ngOnInit() {
    return this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['search'];
      this.labadoptionService.search(this.searchTerm).subscribe((response) => {
        console.log(response.labadoptions);

        this.search = response.labadoptions;
      });
    });
  }
}
