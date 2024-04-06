import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIcons } from '@ng-icons/core';
import {
  heroChevronRight,
  heroXMark,
  heroMagnifyingGlass,
} from '@ng-icons/heroicons/outline';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideIcons({ heroChevronRight, heroXMark, heroMagnifyingGlass }),
  ],
};
