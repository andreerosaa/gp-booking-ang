import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { DayPanelComponent } from './components/day-panel/day-panel.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SessionComponent } from './components/session/session.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { SessionModalComponent } from './components/session-modal/session-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    HeaderComponent,
    NavComponent,
    DayPanelComponent,
    SessionModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTabsModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
