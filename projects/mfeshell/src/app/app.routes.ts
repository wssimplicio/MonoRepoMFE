import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {
    path: 'busca-cep', loadComponent: () => loadRemoteModule('MFEBuscaCep', './BuscaCepComponent')
    .then((b) => b.BuscaCepComponent)
  }
];
