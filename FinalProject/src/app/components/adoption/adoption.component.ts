import { Component, OnInit } from '@angular/core';
import { Labrador, LabadoptionService } from '../../labadoption.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css'],
})
export class AdoptionComponent implements OnInit {
  labradors: Labrador[] = [];

  constructor(private labadoptionService: LabadoptionService) {}

  ngOnInit(): void {
    this.labadoptionService.listLabrador().subscribe((response: any) => {
      console.log(response);
      this.labradors = response.labadoptions;
    });
  }
}
