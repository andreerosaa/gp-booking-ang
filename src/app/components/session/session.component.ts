import { Component, Input } from '@angular/core';
import { Session } from '../../models/session';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrl: './session.component.css',
})
export class SessionComponent {
  @Input() session: Session | null = null;

  constructor() {}

  openDialog(): void {}
}
