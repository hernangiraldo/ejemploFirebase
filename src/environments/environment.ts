// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDRK7xRucSFtr7eZaQPazx1-ndmMJz5hPw',
    authDomain: 'example-fabian.firebaseapp.com',
    databaseURL: 'https://example-fabian.firebaseio.com',
    projectId: 'example-fabian',
    storageBucket: 'example-fabian.appspot.com',
    messagingSenderId: '507462000042'
  }
};
