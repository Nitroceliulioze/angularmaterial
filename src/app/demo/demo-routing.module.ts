import { ButtonComponent } from './button/button.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonComponent,
  },
  {
    path: 'flexbox',
    component: FlexboxComponent,
  },
  { path: '**', redirectTo: 'buttons' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
