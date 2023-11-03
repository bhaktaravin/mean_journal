import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'createEntry', component: CreateEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
