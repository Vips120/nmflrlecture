import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authguard/guard';

export const approutes: Routes = [
    {
     path:'',
     component: HomeComponent
    },
    {
    path:'home',
    component: HomeComponent,
canActivate:[AuthGuard]
},
 {
     path: 'about',
     component: AboutComponent,
     children:[{
         path: 'about1',
         component: About1Component
     },
      {
          path:'about2/:id',
          component: About2Component
      }
    ]
 },
 {
path:'service',
loadChildren:'../app/service/service.module#ServiceModule'
 },
 {
     path:'login',
     component: LoginComponent
 }
]