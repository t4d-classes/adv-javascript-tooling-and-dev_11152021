

// - import the objects to be exported
//   by the UMD module
// - this line of code is from UMD JavaScript file
//   that will be produced
export * from './_app';


// Setup the Type Definition

import * as _app from './_app';

type _App = typeof _app;

declare global {
  // automatically add objects from code
  // to the App type
  interface App extends _App {

  }

  // makes available on the window object
  interface Window {
    app: App;
  }

  // referencing app in the global space without
  // window
  const app: App;
}

