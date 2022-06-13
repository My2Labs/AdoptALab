// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  labradorsEndpoint: 'https://labadoption.herokuapp.com/labadoptions/',
  // randomdogsEndpoint: 'https://dog.ceo/api/breed/labrador/images?callback=foo',

  randomdogsEndpoint: 'https://dog.ceo/api/breeds/image/random',

  commentsEndpoint: 'https://my2labs-comments.herokuapp.com/comments/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
