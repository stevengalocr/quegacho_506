import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SectionDetailsComponent } from './pages/details/section-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: SectionDetailsComponent },
];
