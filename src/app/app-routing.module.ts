import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { UserFormComponent } from './user-form/user-form.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { CreateBookComponent } from './book/create-book/create-book.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'Register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'user_form',
    component:UserFormComponent,
    pathMatch:'full'
  },
  {
    path:'books',
    component:BookListComponent,
    pathMatch:'full'
  },
  {
    path:'books/create',
    component:CreateBookComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
