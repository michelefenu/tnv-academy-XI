import { Routes } from '@angular/router';
import { PiattoDetailComponent } from './components/piatto-detail/piatto-detail.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageMenuComponent } from './components/page-menu/page-menu.component';

export const routes: Routes = [
    { path: 'menu', component: PageMenuComponent},
    { path: 'menu/:piattoId', component: PiattoDetailComponent},
    { path: '', redirectTo: 'menu', pathMatch: 'full'}
];
