import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { GaurdService } from './admin/gaurd.service';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:AdminComponent,canActivate:[GaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[GaurdService],
})
export class AppRoutingModule { }
