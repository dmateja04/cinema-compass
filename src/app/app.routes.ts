import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Test } from './test/test';
import { Result } from './result/result';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'test', component: Test },
  { path: 'result', component: Result }
];