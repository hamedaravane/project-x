import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly isSideMenuOpenSubject: Subject<boolean> = new Subject<boolean>();

  get isSideMenuOpen$(): Observable<boolean> {
    return this.isSideMenuOpenSubject.asObservable();
  }
  set isSideMenuOpen$(value: boolean) {
    this.isSideMenuOpenSubject.next(value);
  }
}
