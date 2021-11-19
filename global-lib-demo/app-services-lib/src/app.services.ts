// make the UMD build happy
export * from './_app.services';

// make the type definition build happy

import * as _services from './_app.services';

type _Services = typeof _services;

declare global {

  export interface Services extends _Services {

  }

  export interface App {
    services: Services,
  }

  interface Window {
    app: App
  }
}

