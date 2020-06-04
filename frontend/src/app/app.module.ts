import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RegisterComponent } from './register/register.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { PreviewComponent } from './preview/preview.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AdminComponent } from './admin/admin.component';
import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    PreviewComponent,
    AdminComponent
  ],
  entryComponents:[PreviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    MatDialogModule,
    MaterialFileInputModule,
    ChartsModule,
    MatTableModule,
  ],
  providers: [PreviewComponent,RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
