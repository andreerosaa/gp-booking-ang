import { Component, Input } from '@angular/core';
import { Session } from '../../models/session';
import { MatDialog } from '@angular/material/dialog';
import { SessionModalComponent } from '../session-modal/session-modal.component';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrl: './session.component.css',
})
export class SessionComponent {
  @Input() session: Session | null = null;

  constructor(public dialog: MatDialog) {}

  animal: string = '';
  name: string = '';

  openDialog(): void {
    const dialogRef = this.dialog.open(SessionModalComponent, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
