import { Component, OnInit } from '@angular/core';
import { Labrador, LabadoptionService } from '../../labadoption.service';

@Component({
  selector: 'app-lab-index',
  templateUrl: './lab-index.component.html',
  styleUrls: ['./lab-index.component.css'],
})
export class LabIndexComponent implements OnInit {
  labradors: Labrador[] = [];
  constructor(private labadoptionService: LabadoptionService) {}

  ngOnInit(): void {
    this.labadoptionService.fetchLabs().subscribe((response) => {
      console.log(response);
      this.labradors = response.labadoptions;
    });
  }
}
