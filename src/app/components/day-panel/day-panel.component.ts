import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Session } from '../../models/session';
import { DateSelectionService } from '../../services/date-selection.service';

@Component({
  selector: 'app-day-panel',
  templateUrl: './day-panel.component.html',
  styleUrl: './day-panel.component.css',
})
export class DayPanelComponent {
  isSearching: boolean = true;
  daySessions: Session[] = [];
  constructor(
    private _sessionService: SessionService,
    private _dateSelectionService: DateSelectionService
  ) {}

  ngOnInit(): void {
    this.isSearching = true;
    this._dateSelectionService.selectedDate$.subscribe((date) => {
      this._sessionService.getSessionsForDate(date).subscribe((sessions) => {
        this.daySessions = sessions;
        this.isSearching = false;
      });
    });
  }
}
