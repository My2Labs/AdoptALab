import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { SearchformComponent } from './components/searchform/searchform.component';

export type Labrador = {
  name: string;
  breed: string;
  sex: string;
  age: string;
  city: string;
  state: string;
  imageUrl?: {
    imageUrl: string;
  };
};

type LabradorResponse = {
  labadoptions: Labrador[];
};

const labradorsEndpoint = environment.labradorsEndpoint;

@Injectable({
  providedIn: 'root',
})
export class LabadoptionService {
  constructor(private http: HttpClient) {}

  listLabrador() {
    return this.http.get<LabradorResponse>(labradorsEndpoint);
  }
  search(searchTerm: string) {
    return this.http.get<LabradorResponse>(
      `${labradorsEndpoint}/search?search=${searchTerm}`
    );
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// // import { environment } from '../environments/environment';

// export type Labrador = {
//   name: string;
//   breed: string;
//   sex: string;
//   age: string;
//   imageUrl?: {
//     imageUrl: string;
//   };
// };

// type LabradorResponse = {
//   labradors: Labrador[];
// };

// // const labradorsEndpoint = environment.labradorsEndpoint;

// @Injectable({
//   providedIn: 'root',
// })
// export class LabadoptionService {
//   constructor(private http: HttpClient) {}

//   listLabrador() {
//     return this.http.get<LabradorResponse>(
//       'https://labadoption.herokuapp.com/labadoptions'
//     );
//   }
// }
