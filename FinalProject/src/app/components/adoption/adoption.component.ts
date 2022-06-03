import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Labrador, LabadoptionService } from '../../labadoption.service';
import { NgModule } from '@angular/core';

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

// ngOnInit(): void {
//   this.labadoptionService.listLabrador().subscribe((response) => {
//     console.log(response);
//     const observables = response;
//     observables
//       .map((labrador) => labrador.name)
//       .map((name) => {
//         return this.labadoptionService.getLabrador(name);
//       });
//     forkJoin(observables).subscribe((allLabradors) => {
//       console.log(allLabradors);
//       this.labradorList = allLabradors;
//     });
//   });
// }
