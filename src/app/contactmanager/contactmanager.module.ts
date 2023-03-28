import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from 'src/app/contactmanager/contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent,
children: [
  {path: '', component: MainContentComponent },
  
] },  
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactmanagerModule { }
