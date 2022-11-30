import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListStudentComponent} from './list-student/list-student.component';
import {CreateStudentComponent} from './create-student/create-student.component';
import {DeleteStudentComponent} from './delete-student/delete-student.component';
import {EditStudentComponent} from './edit-student/edit-student.component';


const routes: Routes = [
  {path: '', component: ListStudentComponent},
  {path: 'create', component: CreateStudentComponent},
  {path: 'delete/:id', component: DeleteStudentComponent},
  {path: 'edit/:id', component: EditStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
