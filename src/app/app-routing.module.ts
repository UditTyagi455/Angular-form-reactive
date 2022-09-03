import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './component/forms/forms.component';
import { TableComponent } from './component/table/table.component';

const routes: Routes = [
  {
    path: "",
    component: FormsComponent
  },
  {
    path: "data",
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
