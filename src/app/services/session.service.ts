import { Injectable } from '@angular/core';
import { Session } from '../models/session';
import { Observable, filter, from, map, of } from 'rxjs';
import { DateSelectionService } from './date-selection.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(
    private http: HttpClient,
    private _dateSelectionService: DateSelectionService
  ) {}

  sessions: Session[] = [];

  getDates(): Date[] {
    // Get current Date
    const currentDate = new Date();

    // Compute days list from current Date
    const daysList = [];
    for (var i = 0; i < 15; i++) {
      let newDay = new Date();
      newDay.setDate(currentDate.getDate() + i);
      daysList.push(newDay);
    }
    return daysList;
  }

  getSessionsForDate(selectedDate: Date): Observable<Session[]> {
    return this.http.get<Session[]>('http://localhost:5000/sessions/').pipe(
      map((sessions: Session[]) => {
        // Filter sessions based on the provided date
        return sessions.filter((session) => {
          session.date = new Date(session.date);
          return session.date.getDate() === selectedDate.getDate();
        });
      })
    );
  }
}
