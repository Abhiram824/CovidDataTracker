import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { TrackerComponent } from './tracker/tracker.component';

const routes: Routes = [ 
  { path: 'contact', component: ContactComponent },
  { path: 'tracker', component: TrackerComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
