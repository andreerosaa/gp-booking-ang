export interface Session {
  id: string;
  date: Date;
  durationInMinutes: number;
  therapist: string;
  available: boolean;
  vacancies: number;
}
