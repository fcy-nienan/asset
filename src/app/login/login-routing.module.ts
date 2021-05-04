import {ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];
export const LOGIN_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);

