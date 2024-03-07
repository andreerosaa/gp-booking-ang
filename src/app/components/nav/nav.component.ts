import { Component, ViewChild } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { DateSelectionService } from '../../services/date-selection.service';
import { DaysOfTheWeek } from '../../models/daysOfTheWeek';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  today: Date = new Date();
  isSearching: boolean = true;
  navDates: Date[] = [];
  selectedDate: Date | undefined;

  constructor(
    private _sessionService: SessionService,
    private _dateSelectionService: DateSelectionService
  ) {}

  ngOnInit(): void {
    this._dateSelectionService.selectedDate$.subscribe((date) => {
      this.selectedDate = date;
    });

    this.isSearching = true;
    this.navDates = this._sessionService.getDates();
    this.isSearching = false;
  }

  changeDate(newDate: Date) {
    console.log(this.selectedDate);
    this._dateSelectionService.setSelectedDate(newDate);
  }

  getDayOFTheWeek(day: number) {
    return DaysOfTheWeek[day];
  }

  tabChangeListener($event: any) {
    this.changeDate(this.navDates[$event.index]);
  }

  resetSelectedTab() {
    this.tabGroup.selectedIndex = 0;
  }
}
