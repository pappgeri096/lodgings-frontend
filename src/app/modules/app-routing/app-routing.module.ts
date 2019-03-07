import {LodgingsComponent} from '../../components/lodgings/lodgings.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TodosComponent} from '../../components/todos/todos.component';
import {LodgingAddComponent} from '../../components/lodgings/lodging-add/lodging-add.component';
import {UserLodgingsComponent} from '../../components/users/user-lodgings/user-lodgings.component';
import {UsersComponent} from '../../components/users/users.component';
import {LodgingDetailsComponent} from '../../components/lodgings/lodging-details/lodging-details.component';
import {LodgingEditComponent} from '../../components/lodgings/lodging-edit/lodging-edit.component';
import {UserEditComponent} from '../../components/users/user-edit/user-edit.component';
import {TodoAddComponent} from '../../components/todos/todo-add/todo-add.component';
import {TodoEditComponent} from '../../components/todos/todo-edit/todo-edit.component';
import {RegisterComponent} from '../../components/auth/register/register.component';
import {LoginComponent} from '../../components/auth/login/login.component';
import {LogoutComponent} from '../../components/auth/logout/logout.component';
import {AuthGuardService} from '../../services/auth/auth-guard/auth-guard.service';
import {RolesGuardService} from '../../services/auth/roles-guard/roles-guard.service';
import {InviteComponent} from '../../components/lodgings/add-tenants/invite.component';

const appRoutes = [
  {path: '', redirectTo: '/lodgings/rented', pathMatch: 'full'},
  {path: 'lodgings/own', canActivate: [AuthGuardService], component: LodgingsComponent},
  {path: 'lodgings/rented', canActivate: [AuthGuardService], component: LodgingsComponent},
  {path: 'todos', canActivate: [AuthGuardService], component: TodosComponent},
  {path: 'todos/:id/edit', canActivate: [AuthGuardService], component: TodoEditComponent},
  {path: 'todos/:lodging_id/add', canActivate: [AuthGuardService], component: TodoAddComponent},
  {path: 'lodgings/add', canActivate: [RolesGuardService], data: { expectedRole: 'ROLE_LANDLORD' }, component: LodgingAddComponent},
  {path: 'lodgings/:id/edit', canActivate: [RolesGuardService], data: { expectedRole: 'ROLE_LANDLORD' }  , component: LodgingEditComponent},
  {path: 'lodgings/:id', canActivate: [AuthGuardService], component: LodgingDetailsComponent},
  {path: 'lodgings/:id/addTenants', canActivate: [AuthGuardService], component: InviteComponent},
  {path: 'user/lodgings', canActivate: [AuthGuardService], component: UserLodgingsComponent},
  {path: 'user', canActivate: [AuthGuardService], component: UsersComponent},
  {path: 'user/edit', canActivate: [AuthGuardService], component: UserEditComponent},
  {path: 'registration', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', canActivate: [AuthGuardService], component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
