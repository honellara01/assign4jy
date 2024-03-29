import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'quotedetail',
    loadChildren: () => import('./quotedetail/quotedetail.module').then( m => m.QuotedetailPageModule)
  },
  {
    path: 'newquote',
    loadChildren: () => import('./newquote/newquote.module').then( m => m.NewquotePageModule)
  },
  {
    path: 'editquote',
    loadChildren: () => import('./editquote/editquote.module').then( m => m.EditquotePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
