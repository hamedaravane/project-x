import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly isSideMenuOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isSideMenuOpen$ = this.isSideMenuOpenSubject.asObservable();
  setSideMenuStatus(value: boolean): void {
    this.isSideMenuOpenSubject.next(value);
  }
}
