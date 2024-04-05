import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { GridComponent} from './app/grid/grid.component';

bootstrapApplication(GridComponent, appConfig)
  .catch((err) => console.error(err));
