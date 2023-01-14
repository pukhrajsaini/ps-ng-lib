import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SELECT_IMAGE_ROUTE } from './constants/route.constant';

const routes: Routes = [
  {
    path: SELECT_IMAGE_ROUTE.path,
    loadChildren: () => import('./pages/test-select-image/test-select-image.module').then(m => m.TestSelectImageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
