import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'angular', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)},
    { path: 'vue', loadChildren: () => import('./vue/vue.module').then(m => m.VueModule)},
    { path: '', redirectTo: '/angular', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }