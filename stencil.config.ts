import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        "node_modules/bulma/sass/utilities/all.sass",
        "node_modules/bulma/sass/base/all.sass",
        "node_modules/bulma/sass/elements/container.sass"
      ]
    })
  ]
};

